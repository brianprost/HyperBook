import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100..1000&family=Montserrat:wght@700&family=PT+Serif+Caption&family=Encode+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-hypertan overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
