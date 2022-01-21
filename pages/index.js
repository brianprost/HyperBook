import Head from "next/head";
import Image from "next/image";
import { RouteChoicespage } from "../components/RouteChoicespage.component";

export default function Home() {
  return <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Inter&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />

  </Head>
  <RouteChoicespage></RouteChoicespage>
  </>;
}
