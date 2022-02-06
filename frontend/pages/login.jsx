import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section id="login">
      <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-4xl font-sans font-semibold text-center text-neutral-900">
            Log in to your
            <p className="text-4xl font-bold text-hyperred drop-shadow my-4">
              HYPERBOOK
            </p>
            account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required=""
                    className="block w-full px-5 py-3 text-base text-hyperred placeholder-gray-300 transition duration-500 ease-in-out transform border border-hyperblue rounded-lg bg-hyperred bg-opacity-5 focus:outline-none focus:border-hyperblue focus:ring-2 focus:ring-hyperred focus:ring-offset-2 focus:ring-offset-gray-300 font-bold"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-sans font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-hyperblue rounded-lg bg-hyperred bg-opacity-5 focus:outline-none focus:border-hyperblue focus:ring-2 focus:ring-hyperred focus:ring-offset-2 focus:ring-offset-gray-300 "
                  />
                </div>
              </div>

              <div>
                <Link href={"/checkout"}>
                  <a>
                    <button
                      // type="submit"
                      type="button"
                      className="mt-10 w-full items-center block px-10 py-3.5 text-lg font-sans font-extrabold text-center transition duration-400 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-zinc-200 hover:bg-red-700 hover:text-white"
                    >
                      Log in
                    </button>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
