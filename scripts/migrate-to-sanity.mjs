/**
 * Migration script: upload all blog + service content to Sanity
 * Run with: node scripts/migrate-to-sanity.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";
import { randomUUID } from "crypto";

const client = createClient({
  projectId: "fvp2sfim",
  dataset: "production",
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// --- Markdown to Portable Text converter ---
function markdownToPortableText(md) {
  const blocks = [];
  const lines = md.trim().split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) continue;

    // Table — skip (render as text description)
    if (trimmed.startsWith("|")) {
      // Collect all table lines
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const tl = lines[i].trim();
        // Skip separator rows like |---|---|
        if (!tl.match(/^\|[\s\-:|]+\|$/)) {
          tableLines.push(tl);
        }
        i++;
      }
      i--; // Back up one since for loop will increment

      // Convert table to readable text blocks
      for (const tl of tableLines) {
        const cells = tl
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        blocks.push(makeBlock("normal", parseInlineMarks(cells.join(" — "))));
      }
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      blocks.push(
        makeBlock("h3", parseInlineMarks(trimmed.slice(4)))
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push(
        makeBlock("h2", parseInlineMarks(trimmed.slice(3)))
      );
      continue;
    }

    // Bullet list
    if (trimmed.startsWith("- ")) {
      blocks.push(
        makeBlock(
          "normal",
          parseInlineMarks(trimmed.slice(2)),
          "bullet",
          1
        )
      );
      continue;
    }

    // Numbered list
    const numMatch = trimmed.match(/^(\d+)\.\s+/);
    if (numMatch) {
      blocks.push(
        makeBlock(
          "normal",
          parseInlineMarks(trimmed.slice(numMatch[0].length)),
          "number",
          1
        )
      );
      continue;
    }

    // Regular paragraph
    blocks.push(makeBlock("normal", parseInlineMarks(trimmed)));
  }

  return blocks;
}

function makeBlock(style, children, listItem, level) {
  const block = {
    _type: "block",
    _key: randomUUID().slice(0, 12),
    style,
    children,
    markDefs: [],
  };
  if (listItem) {
    block.listItem = listItem;
    block.level = level || 1;
  }
  return block;
}

function parseInlineMarks(text) {
  const spans = [];
  // Simple bold parsing: **text**
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text before bold
    if (match.index > lastIndex) {
      spans.push({
        _type: "span",
        _key: randomUUID().slice(0, 8),
        text: text.slice(lastIndex, match.index),
        marks: [],
      });
    }
    // Bold text
    spans.push({
      _type: "span",
      _key: randomUUID().slice(0, 8),
      text: match[1],
      marks: ["strong"],
    });
    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    spans.push({
      _type: "span",
      _key: randomUUID().slice(0, 8),
      text: text.slice(lastIndex),
      marks: [],
    });
  }

  if (spans.length === 0) {
    spans.push({
      _type: "span",
      _key: randomUUID().slice(0, 8),
      text,
      marks: [],
    });
  }

  return spans;
}

// --- Upload image to Sanity ---
async function uploadImage(filePath) {
  const fullPath = resolve(process.cwd(), "public", filePath.replace(/^\//, ""));
  try {
    const buffer = readFileSync(fullPath);
    const asset = await client.assets.upload("image", buffer, {
      filename: filePath.split("/").pop(),
    });
    console.log(`  ✓ Uploaded image: ${filePath} → ${asset._id}`);
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.error(`  ✗ Failed to upload ${filePath}:`, err.message);
    return null;
  }
}

// --- Service data ---
const services = [
  {
    slug: "beratung",
    shortDescription:
      "Kostenlose Erstberatung und detaillierte technische Analyse vor Ort.",
    image: "/images/Roztiahnute-sluzby-1024x683.webp",
    order: 1,
    process: [
      { _key: "p1", title: "Kontaktaufnahme", description: "Sie füllen unser Formular aus oder rufen uns an" },
      { _key: "p2", title: "Terminvereinbarung", description: "Wir vereinbaren einen Vor-Ort-Termin" },
      { _key: "p3", title: "Begehung", description: "Unser Experte analysiert Ihr Gebäude" },
      { _key: "p4", title: "Angebot", description: "Sie erhalten ein detailliertes Festpreisangebot" },
    ],
    faq: [
      { _key: "f1", q: "Ist die Beratung wirklich kostenlos?", a: "Ja, die Erstberatung und Begehung vor Ort ist für Sie komplett kostenlos und unverbindlich." },
      { _key: "f2", q: "Wie lange dauert eine Begehung?", a: "In der Regel 30-60 Minuten. Wir nehmen uns die Zeit, die nötig ist." },
      { _key: "f3", q: "Was muss ich vorbereiten?", a: "Idealerweise halten Sie Ihre letzte Heizkostenabrechnung und den Energieausweis bereit. Ist aber kein Muss." },
    ],
  },
  {
    slug: "installation",
    shortDescription:
      "Fachgerechte Lieferung und professionelle Montage durch zertifizierte Techniker.",
    image: "/images/service-techniker.webp",
    order: 2,
    process: [
      { _key: "p1", title: "Auftragsbestätigung", description: "Nach Ihrem OK bestellen wir das Equipment" },
      { _key: "p2", title: "Lieferung", description: "Material und Gerät werden angeliefert" },
      { _key: "p3", title: "Montage", description: "Unsere Techniker installieren die Anlage (2-5 Tage)" },
      { _key: "p4", title: "Inbetriebnahme", description: "Funktionstest, Einweisung und Übergabe" },
    ],
    faq: [
      { _key: "f1", q: "Welche Marken installieren Sie?", a: "Wir arbeiten mit führenden Herstellern wie Viessmann, Bosch, Daikin und Vaillant zusammen." },
      { _key: "f2", q: "Wie lange dauert die Installation?", a: "Die reine Installation dauert 2-5 Arbeitstage, je nach Komplexität des Projekts." },
      { _key: "f3", q: "Was ist eine Festpreisgarantie?", a: "Der vereinbarte Preis gilt — auch wenn die Installation aufwändiger wird als geplant. Kein Risiko für Sie." },
    ],
  },
  {
    slug: "umruestung",
    shortDescription:
      "Komplettumbau von Öl, Gas oder Elektro auf eine effiziente Wärmepumpe.",
    image: "/images/Preis-1024x683.webp",
    order: 3,
    process: [
      { _key: "p1", title: "Bestandsaufnahme", description: "Analyse der vorhandenen Heizungsanlage" },
      { _key: "p2", title: "Planung", description: "Konzept für die Umrüstung inkl. Förderantrag" },
      { _key: "p3", title: "Demontage", description: "Fachgerechte Entfernung der alten Anlage" },
      { _key: "p4", title: "Installation", description: "Einbau der neuen Wärmepumpe und Inbetriebnahme" },
    ],
    faq: [
      { _key: "f1", q: "Kann ich auch nur die Heizung tauschen, ohne zu dämmen?", a: "Ja! Eine Wärmepumpe funktioniert auch ohne zusätzliche Dämmung. Natürlich ist eine gute Dämmung vorteilhaft, aber kein Muss." },
      { _key: "f2", q: "Was passiert mit meiner alten Ölheizung?", a: "Wir demontieren die Anlage inklusive Öltank und kümmern uns um die fachgerechte Entsorgung." },
      { _key: "f3", q: "Bekomme ich für die Umrüstung Förderung?", a: "Ja, beim Austausch einer Öl- oder alten Gasheizung erhalten Sie bis zu 70% Zuschuss durch die BEG." },
    ],
  },
  {
    slug: "wartung",
    shortDescription:
      "Regelmäßige Wartung und schneller Service für störungsfreien Betrieb.",
    image: "/images/Udrzba-v-technickej-miestnosti.webp",
    order: 4,
    process: [
      { _key: "p1", title: "Vertrag abschließen", description: "Wählen Sie Ihren passenden Wartungsvertrag" },
      { _key: "p2", title: "Jährliche Wartung", description: "Unser Techniker prüft und wartet Ihre Anlage" },
      { _key: "p3", title: "Dokumentation", description: "Wartungsprotokoll und Effizienz-Report" },
      { _key: "p4", title: "Support", description: "Im Störungsfall schnelle Hilfe per Telefon oder vor Ort" },
    ],
    faq: [
      { _key: "f1", q: "Wie oft muss eine Wärmepumpe gewartet werden?", a: "Wir empfehlen eine jährliche Wartung. Das sichert die Effizienz und verlängert die Lebensdauer der Anlage." },
      { _key: "f2", q: "Was kostet ein Wartungsvertrag?", a: "Unsere Wartungsverträge beginnen ab 190 € pro Jahr, je nach Anlagentyp und Umfang." },
      { _key: "f3", q: "Wie schnell sind Sie im Notfall vor Ort?", a: "Kunden mit Wartungsvertrag haben Priorität — in der Regel sind wir innerhalb von 24-48 Stunden bei Ihnen." },
    ],
  },
];

// --- Blog post data ---
const categoryMap = {
  "Kosten & Förderung": "kosten-foerderung",
  Technik: "technik",
  Aktuelles: "aktuelles",
  Ratgeber: "ratgeber",
};

const posts = [
  {
    slug: "waermepumpe-kosten-2026",
    image: "/images/Preis-1024x683.webp",
    date: "2026-03-15",
    category: "Kosten & Förderung",
    readTime: "8 Min.",
  },
  {
    slug: "waermepumpe-altbau",
    image: "/images/ChatGPT-Image-3.-3.-2026-15_18_14.webp",
    date: "2026-03-08",
    category: "Technik",
    readTime: "6 Min.",
  },
  {
    slug: "foerderung-heizungstausch",
    image: "/images/hero-bg.webp",
    date: "2026-03-01",
    category: "Kosten & Förderung",
    readTime: "7 Min.",
  },
  {
    slug: "geg-heizungsgesetz-2026",
    image: "/images/ChatGPT-Image-18.-3.-2026-20_32_36.webp",
    date: "2026-03-28",
    category: "Aktuelles",
    readTime: "7 Min.",
  },
  {
    slug: "waermepumpe-lautstaerke-abstand",
    image: "/images/hero-house-pump.webp",
    date: "2026-03-25",
    category: "Technik",
    readTime: "6 Min.",
  },
];

// --- Import blog-posts.ts content for body ---
// We'll read it and extract content strings
import("../src/data/blog-posts.ts")
  .catch(() => null);

// Hardcoded content since we can't easily import TS
const blogContents = {};

// Read content from the TS file manually
const blogFileContent = readFileSync(
  resolve(process.cwd(), "src/data/blog-posts.ts"),
  "utf-8"
);

// Extract content blocks between backtick strings
const contentRegex = /slug:\s*"([^"]+)"[\s\S]*?content:\s*`([\s\S]*?)`,?\s*\}/g;
let contentMatch;
while ((contentMatch = contentRegex.exec(blogFileContent)) !== null) {
  blogContents[contentMatch[1]] = contentMatch[2];
}

// --- MAIN ---
async function main() {
  console.log("=== Sanity Content Migration ===\n");

  // 1. Migrate services
  console.log("--- Services ---");
  const existingServices = await client.fetch(
    '*[_type == "service"]{_id, slug}'
  );

  for (const svc of services) {
    const existing = existingServices.find(
      (s) => s.slug?.current === svc.slug
    );
    if (!existing) {
      console.log(`  ⚠ Service "${svc.slug}" not found in Sanity, skipping`);
      continue;
    }

    console.log(`  Patching service: ${svc.slug} (${existing._id})`);

    // Upload image
    const imageAsset = await uploadImage(svc.image);

    const patch = {
      shortDescription: svc.shortDescription,
      process: svc.process,
      faq: svc.faq,
      order: svc.order,
    };
    if (imageAsset) patch.image = imageAsset;

    await client.patch(existing._id).set(patch).commit();
    console.log(`  ✓ Service "${svc.slug}" patched`);
  }

  // 2. Publish services
  console.log("\n  Publishing services...");
  for (const svc of existingServices) {
    try {
      const draftId = `drafts.${svc._id}`;
      const draft = await client.getDocument(draftId);
      if (draft) {
        await client
          .transaction()
          .createOrReplace({ ...draft, _id: svc._id })
          .delete(draftId)
          .commit();
      }
    } catch (e) {
      // Already published or no draft
    }
  }
  console.log("  ✓ Services published");

  // 3. Migrate blog posts
  console.log("\n--- Blog Posts ---");
  const existingPosts = await client.fetch(
    '*[_type == "post"]{_id, slug}'
  );

  for (const post of posts) {
    const existing = existingPosts.find(
      (p) => p.slug?.current === post.slug
    );
    if (!existing) {
      console.log(`  ⚠ Post "${post.slug}" not found in Sanity, skipping`);
      continue;
    }

    console.log(`  Patching post: ${post.slug} (${existing._id})`);

    // Upload image
    const imageAsset = await uploadImage(post.image);

    // Convert markdown to Portable Text
    const markdown = blogContents[post.slug];
    let body = null;
    if (markdown) {
      body = markdownToPortableText(markdown);
      console.log(`  ✓ Converted ${body.length} blocks from markdown`);
    } else {
      console.log(`  ⚠ No content found for ${post.slug}`);
    }

    const patch = {
      category: categoryMap[post.category] || post.category,
      readTime: post.readTime,
      publishedAt: new Date(post.date).toISOString(),
    };
    if (imageAsset) patch.mainImage = imageAsset;
    if (body) patch.body = body;

    await client.patch(existing._id).set(patch).commit();
    console.log(`  ✓ Post "${post.slug}" patched`);
  }

  // 4. Publish posts
  console.log("\n  Publishing posts...");
  for (const post of existingPosts) {
    try {
      const draftId = `drafts.${post._id}`;
      const draft = await client.getDocument(draftId);
      if (draft) {
        await client
          .transaction()
          .createOrReplace({ ...draft, _id: post._id })
          .delete(draftId)
          .commit();
      }
    } catch (e) {
      // Already published or no draft
    }
  }
  console.log("  ✓ Posts published");

  console.log("\n=== Migration complete! ===");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
