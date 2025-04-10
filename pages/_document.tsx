import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-gb">
      <Head>
        {/* Preload the hero banner image for faster LCP */}
        <link
          rel="preload"
          href="https://media.topfinanzas.com/images/banner-home-mobile.webp"
          as="image"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://media.topfinanzas.com/images/banner-home.webp"
          as="image"
          media="(min-width: 768px)"
          fetchPriority="high"
        />

        {/* Preconnect to media domain to establish early connection */}
        <link rel="preconnect" href="https://media.topfinanzas.com" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/poppins-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
