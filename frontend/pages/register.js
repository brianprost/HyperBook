import Head from "next/head";
import React from "react";
import RegisterForm from "../components/register-form";

const RegisterPage = () => {
  return (
    <div>
      <Head>
        <title>Register Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section id="register">
        <RegisterForm />
      </section>
    </div>
  );
};

export default RegisterPage;
