import "../styles/globals.css";
import "@fontsource/montserrat/variable.css";
import "@fontsource/encode-sans/variable.css";
import { Navbar } from "../components/Navbar.component";
import Head from "next/head";
import Cookies from "cookies";
import App from "next/app";

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
  let time = "";
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
    time = cookies.get("time");
  } else {
    isUser = getCookie("isAuthenticated");
    userId = getCookie("userId");
    departureCity = getCookie("departureCity");
    destinationCity = getCookie("destinationCity");
    departureCityId = getCookie("departureCityId");
    destinationCityId = getCookie("destinationCityId");
    time = getCookie("time");
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
      time,
    },
  };
};

export default MyApp;
