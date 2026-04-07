"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/**
 * Google Analytics 4 with Consent Mode v2 (DSGVO compliant)
 *
 * 1. Loads gtag.js but with consent DENIED by default
 * 2. CookieConsent component calls gtag('consent','update') when user accepts
 * 3. Only then GA4 starts collecting data
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Consent Mode v2 — default denied before gtag loads */}
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      {/* GA4 gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
