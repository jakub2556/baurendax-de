import { connect } from "cloudflare:sockets";

interface ContactForm {
  heatingType: string;
  propertyType: string;
  bundesland: string;
  area: string;
  plz: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  _honey?: string;
}

interface Env {
  SMTP_HOST: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  MAIL_TO: string;
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Handle POST — send email
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const data: ContactForm = await context.request.json();

    // Honeypot spam check
    if (data._honey) {
      return new Response(JSON.stringify({ success: true }), { headers });
    }

    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: "Name und E-Mail sind erforderlich" }),
        { status: 400, headers }
      );
    }

    await sendEmail(context.env, data);
    return new Response(JSON.stringify({ success: true }), { headers });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ error: "E-Mail konnte nicht gesendet werden" }),
      { status: 500, headers }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

async function sendEmail(env: Env, data: ContactForm) {
  const socket = connect(
    { hostname: env.SMTP_HOST, port: 465 },
    { secureTransport: true }
  );

  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();

  async function read(): Promise<string> {
    const { value } = await reader.read();
    return value ? decoder.decode(value) : "";
  }

  async function send(cmd: string): Promise<string> {
    await writer.write(encoder.encode(cmd + "\r\n"));
    return read();
  }

  try {
    // SMTP handshake
    await read(); // 220 greeting

    await send("EHLO baurendax.de");
    await send("AUTH LOGIN");
    await send(btoa(env.SMTP_USER));
    const authResult = await send(btoa(env.SMTP_PASS));

    if (!authResult.startsWith("235")) {
      throw new Error("SMTP auth failed: " + authResult);
    }

    await send(`MAIL FROM:<${env.SMTP_USER}>`);
    await send(`RCPT TO:<${env.MAIL_TO}>`);
    await send("DATA");

    // Build email
    const subject = `Neue Anfrage: ${data.name} — ${data.propertyType || "Wärmepumpe"}`;
    const encodedSubject = `=?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
    const htmlBody = buildEmailHtml(data, env.MAIL_TO);
    const encodedBody =
      btoa(unescape(encodeURIComponent(htmlBody)))
        .match(/.{1,76}/g)
        ?.join("\r\n") || "";

    const message = [
      `From: Baurendax Website <${env.SMTP_USER}>`,
      `To: <${env.MAIL_TO}>`,
      `Reply-To: ${data.name} <${data.email}>`,
      `Subject: ${encodedSubject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      `Date: ${new Date().toUTCString()}`,
      "",
      encodedBody,
    ].join("\r\n");

    // Send body + terminator
    await writer.write(encoder.encode(message + "\r\n.\r\n"));
    await read(); // 250 OK

    await send("QUIT");
  } finally {
    await writer.close();
    socket.close();
  }
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(d: ContactForm, mailTo: string): string {
  const row = (label: string, val: string, link?: string) =>
    val
      ? `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;width:140px">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600">${link ? `<a href="${link}" style="color:#c45f1a;text-decoration:none">${esc(val)}</a>` : esc(val)}</td>
    </tr>`
      : "";

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f8fafc">
  <div style="background:#1a3a5c;color:#fff;padding:24px;border-radius:12px 12px 0 0">
    <h1 style="margin:0;font-size:20px">Neue Wärmepumpen-Anfrage</h1>
    <p style="margin:8px 0 0;opacity:.7;font-size:14px">über baurendax.de Kontaktformular</p>
  </div>
  <div style="background:#fff;border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">
      ${row("Name", d.name)}
      ${row("E-Mail", d.email, `mailto:${esc(d.email)}`)}
      ${row("Telefon", d.phone, `tel:${esc(d.phone)}`)}
      ${row("Heizungstyp", d.heatingType)}
      ${row("Gebäudetyp", d.propertyType)}
      ${row("Bundesland", d.bundesland)}
      ${row("Wohnfläche", d.area ? `${d.area} m²` : "")}
      ${row("PLZ", d.plz)}
    </table>
    ${
      d.message
        ? `<div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:8px">
      <p style="margin:0 0 4px;color:#64748b;font-size:13px">Nachricht:</p>
      <p style="margin:0">${esc(d.message)}</p>
    </div>`
        : ""
    }
    <div style="margin-top:24px;padding:16px;background:#fff7ed;border-radius:8px;font-size:13px;color:#c45f1a">
      Antworten Sie direkt auf diese E-Mail — die Antwort geht an <strong>${esc(d.email)}</strong>
    </div>
  </div>
  <p style="text-align:center;color:#94a3b8;font-size:11px;margin-top:16px">
    Gesendet von baurendax.de Kontaktformular an ${esc(mailTo)}
  </p>
</body></html>`;
}
