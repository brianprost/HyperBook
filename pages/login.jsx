import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm.component";
import RegisterForm from "../components/login/RegisterForm.component";
import LoadingComponent from "../components/Loading.component";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login - Hyperbook</title>
      </Head>
      <section id="login">
        {/* <LoginForm />
        <h4 className="my-10 text-center font-light text-indigo-500">
          {"Don't have an account?"}
          <Link href="/register">
            <a className="block font-bold text-red-500">Sign Up</a>
          </Link>
        </h4> */}
        <LoadingComponent />
      </section>
    </div>
  );
};

export default LoginPage;
