import Head from "next/head";
import Image from "next/image";
import { AccountPage } from "../components/AccountPage.component";
import { BookingPage } from "../components/BookingPage.component";
import { CheckoutPage } from "../components/CheckoutPage.component";
import { LandingPage } from "../components/LandingPage.component";
import { LoginPage } from "../components/LoginPage.component";
import { Navbar } from "../components/Navbar.component";
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100..1000&family=Montserrat:wght@700&family=PT+Serif+Caption&family=Encode+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-hypertan overflow-x-hidden">
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <BookingPage></BookingPage>
        <RouteChoicesPage></RouteChoicesPage>
        <LoginPage></LoginPage>
        <CheckoutPage></CheckoutPage>
        <AccountPage></AccountPage>
      </div>
    </>
  );
}
