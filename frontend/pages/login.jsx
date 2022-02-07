import Head from 'next/head'
import React from "react";
import LoginForm from '../components/login-form'

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section id="login">
        <LoginForm/>
      </section>
    </div>
  );
};

export default LoginPage;
