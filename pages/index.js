import Head from "next/head";
import Image from "next/image";
import { LandingPage } from "../components/LandingPage.component";
import { RouteChoicesPage } from "../components/RouteChoicesPage.component";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=IBM+Plex+Mono:wght@100..1000&family=Montserrat:wght@100..1000&family=PT+Serif+Caption&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-hypertan overflow-x-hidden">
        <LandingPage></LandingPage>
        <RouteChoicesPage></RouteChoicesPage>
      </body>
    </>
  );
}
