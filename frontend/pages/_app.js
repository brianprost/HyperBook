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
    let userId = '';
    let depCityId;
    let desCityId;
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
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
        depCityId = cookies.get("departureCityId");
        desCityId = cookies.get("destinationCityId");
    } else {
        isUser = getCookie('isAuthenticated');
        userId = getCookie('userId');
        depCityId = getCookie('departureCityId');
        desCityId = getCookie('destinationCityId');
    }
    return {
        ...appProps, 
        pageProps: { 
            isUser, userId, depCityId, desCityId
        },
    }
}

export default MyApp;
