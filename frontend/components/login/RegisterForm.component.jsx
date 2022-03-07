import { FormLabel } from "../form-label";
import { useFormik } from "formik";
import * as yup from "yup";
import router from "next/router";
import { useState } from "react";
import { setCookies } from "cookies-next";
import { addUser } from "../../services/UserService";

const RegisterValidation = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    //.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
  addressLine1: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().min(5).max(9).required(),
  phone: yup.string().required(),
});

const RegisterForm = () => {
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      let firstName = values.firstName;
      let lastName = values.lastName;
      let email = values.email;
      let password = values.password;
      let addressLine1 = values.addressLine1;
      let addressLine2 = values.addressLine2;
      let city = values.city;
      let state = values.state;
      let zip = values.zip;
      let phone = values.phone;

      addUser(
        firstName,
        lastName,
        email,
        password,
        addressLine1,
        addressLine2,
        city,
        state,
        zip,
        phone
      )
        .then((res) => {
          if (res.status == 201) {
            // setCookies("isAuthenticated", "true");
            // setCookies("userId", res.data.userId);
            // localStorage?.setItem("isAuthenticated", "true");
            alert("Your user has been successfully registered. Please login!");
            router.push("/login");
          }
        })
        .catch((err) => {
          setIsError(true);
          console.error(err);
        });
    },
  });
  return (
    // TODO center this properly
    <section className="mt-12 flex flex-col items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center font-sans text-4xl font-semibold text-neutral-900">
          Register for
          <p className="my-4 text-4xl font-bold text-red-500 drop-shadow">
            HYPERBOOK
          </p>
        </h2>
      </div>
      <div className="w-3/5 mt-8">
        {isError && (
          <div className="px-4 py-8">
            User with the same email already exists. Please try a different
            email!
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 justify-start gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-[550] text-gray-700"
              >
                First Name*
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.firstName}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-[550] text-gray-700"
              >
                Last Name*
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.lastName}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-[550] text-gray-700"
              >
                Email Address*
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel style={{ color: "red" }} text={formik.errors.email} />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-sans text-sm font-[550] text-gray-700"
              >
                Password*
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  onChange={formik.handleChange}
                  name="password"
                  type="password"
                  className="block w-full transform rounded-lg border border-indigo-500 bg-red-500 bg-opacity-5 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.password}
              />
            </div>
            <div>
              <label
                htmlFor="addressLine1"
                className="block text-sm font-[550] text-gray-700"
              >
                Address Line 1*
              </label>
              <div className="mt-1">
                <input
                  id="addressLine1"
                  name="addressLine1"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.addressLine1}
              />
            </div>
            <div>
              <label
                htmlFor="addressLine2"
                className="block text-sm font-[550] text-gray-700"
              >
                Address Line 2
              </label>
              <div className="mt-1">
                <input
                  id="addressLine2"
                  name="addressLine2"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.addressLine2}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-[550] text-gray-700"
              >
                City*
              </label>
              <div className="mt-1">
                <input
                  id="city"
                  name="city"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel style={{ color: "red" }} text={formik.errors.city} />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-[550] text-gray-700"
              >
                State*
              </label>
              <div className="mt-1">
                <input
                  id="state"
                  name="state"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel style={{ color: "red" }} text={formik.errors.state} />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-[550] text-gray-700"
              >
                Zip Code*
              </label>
              <div className="mt-1">
                <input
                  id="zip"
                  name="zip"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel style={{ color: "red" }} text={formik.errors.zip} />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-[550] text-gray-700"
              >
                Phone Number*
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  className="user-auth-input"
                  onChange={formik.handleChange}
                />
              </div>
              <FormLabel style={{ color: "red" }} text={formik.errors.phone} />
            </div>
          </div>

          <div className="flex justify-center mt-12 ">
            <button
              type="submit"
              className="duration-400 w-1/3 transform rounded-xl border-2 border-red-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-400 shadow-md transition ease-in-out hover:border-red-500 hover:bg-indigo-600 hover:text-neutral-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
