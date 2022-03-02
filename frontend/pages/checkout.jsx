import React from "react";
import Cookies from "cookies";
import TotalItem from "../components/checkout/TotalItem";
import router from "next/router";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { CartItem } from "../components/checkout/CartItem.component";
import { addTrip, getPodSchedule, getUser } from "../services/UserService";
import { BsInfoSquareFill } from "react-icons/bs";
import { FormLabel } from "../components/form-label";

const CheckoutPage = (props) => {
  const userId = props.userId;
  const departureCity = props.departureCity.replace(/_/g, ' ');
  const destinationCity = props.destinationCity.replace(/_/g, ' ');
  const departureCityId = props.departureCityId;
  const destinationCityId = props.destinationCityId;
  const departureWindow = props.departureWindow;
  const subTotal = Number(props.tripPrice);
  const taxes = subTotal * 0.07;
  const roundedTaxes = Math.round((taxes + Number.EPSILON) * 100) / 100;
  const total = subTotal + roundedTaxes;
  const card = "1234000156780002";
  const expiry = "05/25";
  const cvc = "001";

  const [user, setUser] = useState(false);
  const [nameState, setName] = useState(false);
  const [emailState, setEmail] = useState(false);
  const [addressState, setAddress] = useState(false);
  const [cityState, setCity] = useState(false);
  const [stateState, setState] = useState(false);
  const [zipState, setZip] = useState(false);

  const LoginValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    card: yup.string().required(),
    expiry: yup.string().required(),
    cvc: yup.string().required(),
  });

  const autoFill = (event) => {
    event.preventDefault();
    getUser(userId)
      .then((res) => {
        if (res.status == 200 && res.statusText === "OK") {
          setUser(res.data);
          setName(res.data.firstName + " " + res.data.lastName);
          setEmail(res.data.email);
          setAddress(res.data.street);
          setCity(res.data.city);
          setState(res.data.state);
          setZip(res.data.zip);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  };

  const formik = useFormik({
    initialValues: {
      name: nameState,
      email: emailState,
      address: addressState,
      city: cityState,
      state: stateState,
      zip: zipState,
      card: "",
      expiry: "",
      cvc: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      if (
        values.card === card &&
        values.expiry === expiry &&
        values.cvc === cvc
      ) {
        getPodSchedule(departureCityId, destinationCityId)
          .then((res) => {
            res.data.forEach((element) => {
              if (element.departureWindow === time) {
                addTrip(userId, element.id, 2)
                  .then((res) => {
                    router.push("/account");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }
            });
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        alert(
          "The card details entered are incorrect. Hence the payment did not got through! Please try again!"
        );
      }
    },
  });

  return (
    <section id="checkout" className="grid h-auto grid-cols-3">
      <div className="col-span-3 space-y-8 px-12 lg:col-span-2">
        <div className="relative mt-8 flex flex-col rounded-xl bg-neutral-50 p-4 shadow sm:flex-row sm:items-center">
          <div className="flex w-full flex-row items-center border-b pb-4 sm:w-auto sm:border-b-0 sm:pb-0">
            <BsInfoSquareFill className="ml-4 h-6 w-6 text-indigo-500" />
            <div className="ml-4 font-semibold text-indigo-500">
              Fill in from account profile?
            </div>
          </div>
          <div className="absolute right-4 top-4 ml-auto cursor-pointer text-gray-400 hover:text-gray-800 sm:relative sm:top-auto sm:right-auto">
            <button
              type="button"
              className="duration-400 block transform rounded-xl border-2 border-red-500 bg-red-500 px-3 py-2 text-center text-lg font-[620] text-neutral-400 shadow-md transition ease-in-out hover:border-red-500 hover:bg-indigo-500 hover:text-neutral-300"
              onClick={autoFill}
            >
              Autofill
            </button>
          </div>
        </div>
        <div className="rounded-xl">
          <form id="payment-form" onSubmit={formik.handleSubmit}>
            <h2 className="my-2 text-lg font-bold uppercase tracking-wide text-gray-700">
              Shipping & Billing Information
            </h2>
            <fieldset className="mb-3 rounded-xl bg-neutral-50 px-4 py-2 text-indigo-500 shadow-lg">
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">Name</span>
                <input
                  name="name"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="Bernando Sanders"
                  required=""
                  value={user ? user.firstName + " " + user.lastName : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel style={{ color: "red" }} text={formik.errors.name} />
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">Email</span>
                <input
                  name="email"
                  type="email"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="bernando@senate.gov"
                  required=""
                  value={user ? user.email : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel style={{ color: "red" }} text={formik.errors.email} />
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">Address</span>
                <input
                  name="address"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="!=1600 Pennsylvania Ave."
                  value={user ? user.street : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel
                style={{ color: "red" }}
                text={formik.errors.address}
              />
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">City</span>
                <input
                  name="city"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="Burlington"
                  value={user ? user.city : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel style={{ color: "red" }} text={formik.errors.city} />
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">State</span>
                <input
                  name="state"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="VA"
                  value={user ? user.state : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel style={{ color: "red" }} text={formik.errors.state} />
              <label className="flex h-12 items-center py-8">
                <span className="w-24 px-2 text-left font-bold">ZIP</span>
                <input
                  name="zip"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="90210"
                  value={user ? user.zip : ""}
                  onChange={formik.handleChange}
                />
              </label>
              <FormLabel style={{ color: "red" }} text={formik.errors.zip} />
            </fieldset>
            <div className="rounded-md">
              <h2 className="my-2 text-lg font-bold uppercase tracking-wide text-gray-700">
                Payment Information
              </h2>
              <fieldset className="mb-10 rounded-xl bg-neutral-50 px-4 text-neutral-900 shadow-lg">
                <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                  <span className="ml-1 w-24 px-2 text-left font-bold">
                    Card
                  </span>
                  <input
                    name="card"
                    className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                    placeholder="Card number"
                    required=""
                    onChange={formik.handleChange}
                  />
                </label>
                <FormLabel style={{ color: "red" }} text={formik.errors.card} />
                <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                  <span className="ml-1 w-24 px-2 text-left font-bold">
                    Expiry
                  </span>
                  <input
                    name="expiry"
                    className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                    placeholder="MM/YY"
                    required=""
                    onChange={formik.handleChange}
                  />
                </label>
                <FormLabel
                  style={{ color: "red" }}
                  text={formik.errors.expiry}
                />
                <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                  <span className="ml-1 w-24 px-2 text-left font-bold">
                    CVC
                  </span>
                  <input
                    name="cvc"
                    className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                    placeholder="CVC"
                    required=""
                    onChange={formik.handleChange}
                  />
                </label>
                <FormLabel style={{ color: "red" }} text={formik.errors.cvc} />
              </fieldset>
            </div>
            {/* <Link href={"/account"}>
              <a> */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="submit-button duration-400 transform rounded-2xl border-2 border-red-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-400 shadow-md transition ease-in-out hover:scale-105 hover:border-red-500 hover:bg-indigo-600 hover:text-red-500"
              >
                {"PAY $" + total}
              </button>
            </div>
            {/* </a>
            </Link> */}
          </form>
        </div>
      </div>
      <div className="col-span-1 hidden h-full rounded-b-xl bg-neutral-50 lg:block">
        <h1 className="border-b-2 py-6 px-8 text-xl font-bold text-indigo-500">
          Order Summary
        </h1>
        <ul className="space-y-6 border-b py-6 px-8">
          <CartItem
            departureCity={departureCity}
            destinationCity={destinationCity}
            departureWindow={departureWindow}
            tripPrice={"$" + subTotal}
          />
        </ul>
        <div className="border-b px-8">
          <TotalItem
            title={"Subtotal"}
            value={"$" + subTotal}
            style={"flex justify-between py-4 text-indigo-500"}
          />
          <TotalItem
            title={"Taxes"}
            value={"$" + roundedTaxes}
            style={"flex justify-between py-4 text-indigo-500"}
          />
        </div>
        <TotalItem
          title={"Total"}
          value={"$" + total}
          style={
            "flex justify-between px-8 py-8 text-xl font-semibold text-indigo-500"
          }
        />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const cookies = Cookies(context.req, context.res);
  const isUser = cookies.get("isAuthenticated") ? true : false;
  //const isUser = localStorage.getItem("isAuthenticated");
  if (!isUser || isUser === "false") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default CheckoutPage;
