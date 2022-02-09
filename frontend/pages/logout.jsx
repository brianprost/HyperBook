import Head from 'next/head'
import React from "react";
import Cookies from "cookies";

const LogoutPage = () => {
    //set isUser cookie to false
    return (
        <div>
        <Head>
            <title>Logout</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        {/*  */}
        {/* <section id="login">
            <LoginForm/>
        </section> */}
        </div>
    );
};

export default LogoutPage;