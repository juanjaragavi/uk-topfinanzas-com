import Script from "next/script";

const GTM_ID = "GTM-MR76NXR3"; // Default GTM ID

/**
 * Optimized Google Tag Manager Script Component
 * - Uses next/script with strategy="lazyOnload" to significantly defer loading
 * - Doesn't block the initial page rendering or interactivity
 * - Helps improve Core Web Vitals scores (FCP, LCP, FID)
 */
export default function GoogleTagManager({ id = GTM_ID }: { id?: string }) {
  return (
    <Script
      id="gtm-script"
      strategy="lazyOnload" // Changed from afterInteractive to lazyOnload
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`,
      }}
    />
  );
}

/**
 * Google Tag Manager noscript fallback
 * No change needed as this doesn't impact JS performance
 */
export function GoogleTagManagerNoScript({ id = GTM_ID }: { id?: string }) {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
