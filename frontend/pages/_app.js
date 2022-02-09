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
    //const cookies = Cookies(appContext.ctx.req, appContext.ctx.res);
    const cookie = appContext.ctx.req.cookies;
    const isUser = cookie.isAuthenticated ? true : false;
    const userId = cookie.userId;
    
    return {
        ...appProps,
    
        pageProps: { 
            isUser, userId
        },
    }
}

export default MyApp;
