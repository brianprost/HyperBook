import { FormLabel } from "../form-label";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../../services/AzureUserService";
import router from "next/router";
import { useState } from "react";
import { setCookies } from "cookies-next";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseApp } from "../../pages/_app"

const auth = getAuth(firebaseApp);

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
}

const logout = () => {
  signOut(auth);
}

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    //.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
});

const LoginForm = () => {

  const [user, loading, error] = useAuthState(auth);
  
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });
  return (
    // TODO center this properly
    <section className="mt-36 flex flex-col items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center font-sans text-4xl font-semibold text-neutral-900">
          Log in to your
          <p className="my-4 text-4xl font-bold text-red-500 drop-shadow">
            HYPERBOOK
          </p>
          account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {isError && (
          <div className="px-auto bg-neutral-100-500 mx-4 my-8 cursor-not-allowed rounded-xl border-2 border-indigo-500 py-4 text-center font-bold text-red-500">
            😿 Username or password is incorrect 😿
          </div>
        )}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-[550] text-gray-700 group-focus-within:font-semibold group-focus-within:text-red-500"
            >
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full transform rounded-lg border border-indigo-500 bg-red-500 bg-opacity-5 px-5 py-3 text-base font-bold text-red-500 placeholder-gray-300 transition duration-500 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-300"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-2 text-center font-semibold text-red-500 first-letter:capitalize">
              <FormLabel text={formik.errors.email} />
            </div>
          </div>
          <div className="group">
            <label
              htmlFor="password"
              className="block font-sans text-sm font-[550] text-gray-700 group-focus-within:font-semibold group-focus-within:text-red-500"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                onChange={formik.handleChange}
                name="password"
                type="password"
                className="block w-full transform rounded-lg border border-indigo-500 bg-red-500 bg-opacity-5 px-5 py-3 text-base text-red-500 placeholder-gray-300 transition duration-500 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-300"
              />
            </div>
            <div className="mt-2 text-center font-semibold text-red-500 first-letter:capitalize">
              <FormLabel text={formik.errors.password} />
            </div>
          </div>

          <div>
            <button
              type="submit"
              // type="button"
              className="duration-400 w-full transform rounded-xl border-2 border-red-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-400 shadow-md transition ease-in-out hover:border-red-500 hover:bg-indigo-600 hover:text-neutral-300"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
