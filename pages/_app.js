import "../styles/globals.css";
import "@fontsource/montserrat/variable.css";
import "@fontsource/encode-sans/variable.css";
import { Navbar } from "../components/navbar/Navbar.component";
import Head from "next/head";
import Cookies from "cookies";
import App from "next/app";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hyperbook</title>
      </Head>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  let isUser = false;
  let userId = "";
  let departureCity = "";
  let destinationCity = "";
  let departureCityId;
  let destinationCityId;
  let departureWindow = "";
  let tripPrice;
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  if (appContext.ctx.req) {
    const cookies = Cookies(appContext.ctx.req, appContext.ctx.res);
    isUser = cookies.get("isAuthenticated") ? true : false;
    userId = cookies.get("userId");
    departureCity = cookies.get("departureCity");
    destinationCity = cookies.get("destinationCity");
    departureCityId = cookies.get("departureCityId");
    destinationCityId = cookies.get("destinationCityId");
    departureWindow = cookies.get("departureWindow");
    tripPrice = cookies.get("tripPrice");
  } else {
    isUser = getCookie("isAuthenticated");
    userId = getCookie("userId");
    departureCity = getCookie("departureCity");
    destinationCity = getCookie("destinationCity");
    departureCityId = getCookie("departureCityId");
    destinationCityId = getCookie("destinationCityId");
    departureWindow = getCookie("departureWindow");
    tripPrice = getCookie("tripPrice");
  }
  return {
    ...appProps,
    pageProps: {
      isUser,
      userId,
      departureCity,
      destinationCity,
      departureCityId,
      destinationCityId,
      departureWindow,
      tripPrice,
    },
  };
};

export default MyApp;
