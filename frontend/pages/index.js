import Head from "next/head";
import Image from "next/image";
import { AccountPage } from "../components/AccountPage.component";
import { BookingPage } from "../components/BookingPage.component";
import { CheckoutPage } from "../components/CheckoutPage.component";
import { LandingPage } from "../components/LandingPage.component";
import { LoginPage } from "../components/LoginPage.component";
import { Map } from "../components/Map.component";
import { Navbar } from "../components/Navbar.component";
import { RouteChoicesPage } from "../components/RouteChoicesPage.component";

export default function Home() {
  return (
    <div className="bg-hypertan overflow-x-hidden">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Map></Map>
      <BookingPage></BookingPage>
      <RouteChoicesPage></RouteChoicesPage>
      <LoginPage></LoginPage>
      <CheckoutPage></CheckoutPage>
      <AccountPage></AccountPage>
    </div>
  );
}
