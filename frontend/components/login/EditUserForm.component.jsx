import { FormLabel } from "../form-label";
import { useFormik } from "formik";
import * as yup from "yup";
import router from "next/router";
import { useState } from "react";
import { getCookies } from "cookies-next";
import { getUser, UpdateUser } from "../../services/UserService";

const EditUserValidation = yup.object().shape({
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
  zip: yup.string().max(2).required(),
  phone: yup.string().required(),
});

const EditUserForm = ({
  user,
}) => {
  const [isError, setIsError] = useState(false);
  // const [nameState, setName] = useState(false);
  // const [emailState, setEmail] = useState(false);
  // const [addressState, setAddress] = useState(false);
  // const [addressState2, setAddress2] = useState(false);
  // const [cityState, setCity] = useState(false);
  // const [stateState, setState] = useState(false);
  // const [zipState, setZip] = useState(false);
  // const [phoneState, setPhone] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: user[1],
      lastName: user[3],
      email: user[5],
      password: "",
      addressLine1: user[7],
      addressLine2: user[9],
      city: user[11],
      state: user[13],
      zip: user[15],
      phone: user[17],
    },
    validationSchema: EditUserValidation,
    onSubmit: (values) => {
      let userId = "";
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

      UpdateUser(
        userId,
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
          Edit your User for
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
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  className="user-auth-input"
                  value={user ? user[1] : ""}
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
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  className="user-auth-input"
                  value={user ? user[3] : ""}
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
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="user-auth-input"
                  value={user ? user[5] : ""}
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
                Password
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
                Address Line 1
              </label>
              <div className="mt-1">
                <input
                  id="addressLine1"
                  name="addressLine1"
                  className="user-auth-input"
                  value={user ? user[7] : ""}
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
                  value={user ? user[9] : ""}
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
                City
              </label>
              <div className="mt-1">
                <input
                  id="city"
                  name="city"
                  className="user-auth-input"
                  value={user ? user[11] : ""}
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
                State
              </label>
              <div className="mt-1">
                <input
                  id="state"
                  name="state"
                  className="user-auth-input"
                  value={user ? user[13] : ""}
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
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  id="zip"
                  name="zip"
                  className="user-auth-input"
                  value={user ? user[15] : ""}
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
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  className="user-auth-input"
                  value={user ? user[17] : ""}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditUserForm;
