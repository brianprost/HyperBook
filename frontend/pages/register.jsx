import Head from "next/head";
import Link from "next/link";
import React from "react";
import RegisterForm from "../components/login/RegisterForm.component";

const RegisterPage = () => {
  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <section id="register">
        <RegisterForm />
        <h4 className="mt-10 mb-20 text-center font-light text-indigo-500">
          {"Already have an account?"}
          <Link href="/login">
            <a className="block font-bold text-red-500">Log in</a>
          </Link>
        </h4>
      </section>
    </div>
  );
};

export default RegisterPage;
