import "../styles/globals.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/encode-sans/variable.css";
import { Navbar } from "../components/Navbar.component";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hyperbook</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
