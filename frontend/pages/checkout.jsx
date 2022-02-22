import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CartItem } from "../components/CartItem.component";
import { getUser } from "../services/UserService";

const CheckoutPage = (props) => {
  const userId = props.userId;
  const [user, setUser] = useState(false);

  const autoFill = (event) => {
    event.preventDefault();
    getUser(userId)
    .then((res) => {
      if (res.status == 200 && res.statusText === "OK") {
        setUser(res.data);
        //console.log(res.data);
      }
    })
    .catch((err) => {
      alert(err);
    });
  };

  return (
    <section id="checkout" className="grid h-auto grid-cols-3">
      <div className="col-span-3 space-y-8 px-12 lg:col-span-2">
        <div className="relative mt-8 flex flex-col rounded-lg bg-neutral-50 p-4 shadow sm:flex-row sm:items-center">
          <div className="flex w-full flex-row items-center border-b pb-4 sm:w-auto sm:border-b-0 sm:pb-0">
            <div className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className=" ml-3 font-semibold text-neutral-600">
              Fill in from account profile?
            </div>
          </div>
          <div className="absolute right-4 top-4 ml-auto cursor-pointer text-gray-400 hover:text-gray-800 sm:relative sm:top-auto sm:right-auto">
            <button
              type="button"
              className="rounded-xl bg-red-500 px-3 py-1 font-[650] tracking-wider text-hypertan hover:text-neutral-50"
              onClick={autoFill}
            >
              Autofill
            </button>
          </div>
        </div>
        <div className="rounded-lg">
          <form id="payment-form" method="POST" action="">
            <h2 className="my-2 text-lg font-bold uppercase tracking-wide text-gray-700">
              Shipping & Billing Information
            </h2>
            <fieldset className="mb-3 rounded-lg bg-neutral-50 px-4 py-2 text-neutral-900 shadow-lg">
              <label className="flex h-12 items-center border-b border-gray-200 py-8">
                <span className="ml-1 w-auto px-2 text-left font-bold">
                  Name
                </span>
                <input
                  name="name"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="Bernando Sanders"
                  required=""
                  value={user ? user.firstName + " " + user.lastName : ""}
                />
              </label>
              <label className="flex h-12 items-center border-b border-gray-200 py-8">
                <span className="ml-1 w-auto px-2 text-left font-bold">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="bernando@senate.gov"
                  required=""
                  value={user ? user.email : ""}
                />
              </label>
              <label className="flex h-12 items-center border-b border-gray-200 py-8">
                <span className="ml-1 w-auto px-2 text-left font-bold">
                  Address
                </span>
                <input
                  name="address"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="!=1600 Pennsylvania Ave."
                  value={user ? user.street : ""}
                />
              </label>
              <label className="flex h-12 items-center border-b border-gray-200 py-8">
                <span className="ml-1 w-auto px-2 text-left font-bold">
                  City
                </span>
                <input
                  name="city"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="Burlington"
                  value={user ? user.city : ""}
                />
              </label>
              <label className="inline-flex w-2/4 border-gray-200 py-6">
                <span className="px-2 text-right font-bold">State</span>
                <input
                  name="state"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="VA"
                  value={user ? user.state : ""}
                />
              </label>
              <label className="flex items-center border-t border-gray-200 py-6 xl:inline-flex xl:w-1/4 xl:border-none">
                <span className="xl:text-none ml-1 px-2 text-right font-bold xl:px-0">
                  ZIP
                </span>
                <input
                  name="postal_code"
                  className="font-semilight w-full bg-neutral-50 px-3 focus:outline-none"
                  placeholder="90210"
                  value={user ? user.zip : ""}
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
            <label className="flex h-12 items-center border-b border-gray-200 py-8">
              <span className="px-2 text-right font-bold">Card</span>
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
                Pay $65.72
              </button>
            </div>
          </a>
        </Link>
      </div>
      <div className="col-span-1 hidden h-full rounded-b-xl bg-neutral-50 lg:block">
        <h1 className="border-b-2 py-6 px-8 text-xl font-bold text-neutral-900">
          Order Summary
        </h1>
        <ul className="space-y-6 border-b py-6 px-8">
          <CartItem
            tripTitle="Chicago to Nashville"
            tripImage="./img/CHI-BNA.webp"
            tripDate="March 16 2020"
            tripTime="08:25"
            tripPrice="$25.00"
          />
          <CartItem
            tripTitle="Seattle to San Francisco"
            tripImage="./img/SEA-SFO.webp"
            tripDate="Dec 24 2020"
            tripTime="16:30"
            tripPrice="$37.00"
          />
        </ul>
        <div className="border-b px-8">
          <div className="flex justify-between py-4 text-neutral-900">
            <span className="font-bold">Subtotal</span>
            <span className="font-bold text-red-500">$62.00</span>
          </div>
          <div className="flex justify-between py-4 text-neutral-900">
            <span className="font-bold">Taxes</span>
            <span className="font-bold text-red-500">$3.72</span>
          </div>
        </div>
        <div className="flex justify-between px-8 py-8 text-xl font-semibold text-neutral-900">
          <span className="font-bold">Total</span>
          <span className="font-bold">$65.72</span>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
