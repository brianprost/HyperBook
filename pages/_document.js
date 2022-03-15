import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* For new browsers - multisize ico  */}
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16 32x32"
          href="img/favicon/favicon.ico"
        />

        {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/favicon/favicon-152-precomposed.png"
        />

        {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="img/favicon/favicon-144-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/favicon/favicon-120-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/favicon/favicon-114-precomposed.png"
        />

        {/* For iPhone 6+ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/favicon/favicon-180-precomposed.png"
        />

        {/* For first- and second-generation iPad: */}
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/favicon/favicon-72-precomposed.png"
        />

        {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="img/favicon/favicon-57.png"
        />

        {/* For Old Chrome */}
        <link rel="icon" sizes="32x32" href="img/favicon/favicon-32.png" />
        {/* Chrome for Android */}
        <link rel="icon" sizes="192x192" href="img/favicon/favicon-192.png" />
      </Head>
      <body className="h-screen overflow-x-hidden bg-neutral-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
