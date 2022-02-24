import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CartItem } from "../components/checkout/CartItem.component";
import { getUser } from "../services/UserService";
import { BsInfoSquareFill } from "react-icons/bs";
import withAuth from "./withAuth";
import TotalItem from "../components/checkout/TotalItem";

const CheckoutPage = (props) => {
  const userId = props.userId;
  const departureCity = props.departureCity;
  console.log(departureCity);
  const destinationCity = props.destinationCity;

  const [user, setUser] = useState(false);

  const autoFill = (event) => {
    event.preventDefault();
    getUser(userId)
      .then((res) => {
        if (res.status == 200 && res.statusText === "OK") {
          setUser(res.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  };

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
          <form id="payment-form" method="POST" action="">
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
                  onChange={inputChangedHandler}
                />
              </label>
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">Email</span>
                <input
                  name="email"
                  type="email"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="bernando@senate.gov"
                  required=""
                  value={user ? user.email : ""}
                  onChange={inputChangedHandler}
                />
              </label>
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">Address</span>
                <input
                  name="address"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="!=1600 Pennsylvania Ave."
                  value={user ? user.street : ""}
                  onChange={inputChangedHandler}
                />
              </label>
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">City</span>
                <input
                  name="city"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="Burlington"
                  value={user ? user.city : ""}
                  onChange={inputChangedHandler}
                />
              </label>
              <label className="flex h-12 items-center border-b border-indigo-50 py-8">
                <span className="w-24 px-2 text-left font-bold">State</span>
                <input
                  name="state"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="VA"
                  value={user ? user.state : ""}
                  onChange={inputChangedHandler}
                />
              </label>
              <label className="flex h-12 items-center py-8">
                <span className="w-24 px-2 text-left font-bold">ZIP</span>
                <input
                  name="postal_code"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="90210"
                  value={user ? user.zip : ""}
                  onChange={inputChangedHandler}
                />
              </label>
            </fieldset>
          </form>
        </div>
        <div className="rounded-md">
          <h2 className="my-2 text-lg font-bold uppercase tracking-wide text-gray-700">
            Payment Information
          </h2>
          <fieldset className="mb-10 rounded-xl bg-neutral-50 px-4 text-neutral-900 shadow-lg">
            <label className="flex h-12 items-center border-b border-indigo-50 py-8">
              <span className="ml-1 w-24 px-2 text-left font-bold">Card</span>
              <input
                name="card"
                className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                placeholder="Card number MM/YY CVC"
                required=""
              />
            </label>
          </fieldset>
        </div>
        <Link href={"/account"}>
          <a>
            <div className="flex justify-center">
              <button className="submit-button duration-400 transform rounded-2xl border-2 border-red-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-400 shadow-md transition ease-in-out hover:scale-105 hover:border-red-500 hover:bg-indigo-600 hover:text-red-500">
                PAY $65.72
              </button>
            </div>
          </a>
        </Link>
      </div>
      <div className="col-span-1 hidden h-full rounded-b-xl bg-neutral-50 lg:block">
        <h1 className="border-b-2 py-6 px-8 text-xl font-bold text-indigo-500">
          Order Summary
        </h1>
        <ul className="space-y-6 border-b py-6 px-8">
          <CartItem
            tripTitle = {departureCity + " to " + destinationCity}
            tripImage = "./img/CHI-BNA.webp"
            // tripDate="March 16 2020"
            // tripTime="08:25"
            tripPrice = "$25.00"
          />
        </ul>
        <div className="border-b px-8">
          <TotalItem
            title={"Subtotal"}
            value={"$62.00"}
            style={"flex justify-between py-4 text-indigo-500"}
          />
          <TotalItem
            title={"Taxes"}
            value={"$3.72"}
            style={"flex justify-between py-4 text-indigo-500"}
          />
        </div>
        <TotalItem
          title={"Total"}
          value={"$65.72"}
          style={
            "flex justify-between px-8 py-8 text-xl font-semibold text-indigo-500"
          }
        />
      </div>
    </section>
  );
};

export default withAuth(CheckoutPage);
