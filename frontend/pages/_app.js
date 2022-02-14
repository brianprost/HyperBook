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
    const cookies = Cookies(appContext.ctx.req, appContext.ctx.res);
    //console.log("we are logging: " + cookies);
    //const cookie = appContext.ctx.req.cookies;
    const isUser = cookies.get("isAuthenticated") ? true : false;
    const userId = cookies.get("userId");
    const depCity = cookies.get("departureCity");
    
    return {
        ...appProps,
    
        pageProps: { 
            isUser, userId, depCity
        },
    }
}

export default MyApp;
