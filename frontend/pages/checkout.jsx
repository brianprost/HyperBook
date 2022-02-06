import Link from "next/link";
import React from "react";
import { CartItem } from "../components/CartItem.component";

const CheckoutPage = () => {
  return (
    <section id="checkout" className="h-screen grid grid-cols-3">
      <div className="lg:col-span-2 col-span-3 space-y-8 px-12">
        <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-lg">
          <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
            <div className="text-hyperred">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-hyperblue"
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
            <div className=" font-medium ml-3">
              Fill in from account profile?
            </div>
          </div>
          <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
            <button
              type="button"
              className="bg-hyperred font-bold px-3 py-1 text-hypertan rounded-xl"
            >
              Autofill
            </button>
          </div>
        </div>
        <div className="rounded-lg">
          <form id="payment-form" method="POST" action="">
            <h2 className="uppercase tracking-wide text-lg font-bold text-gray-700 my-2">
              Shipping & Billing Information
            </h2>
            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
              <label className="flex border-b border-gray-200 h-12 py-8 items-center">
                <span className="w-1/12 ml-1 text-left px-2 font-bold">
                  Name
                </span>
                <input
                  name="name"
                  className="focus:outline-none px-3 w-full"
                  placeholder="Bernando Sanders"
                  required=""
                />
              </label>
              <label className="flex border-b border-gray-200 h-12 py-8 items-center">
                <span className="w-1/12 ml-1 text-left px-2 font-bold">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  className="focus:outline-none px-3 w-full"
                  placeholder="bernando@senate.gov"
                  required=""
                />
              </label>
              <label className="flex border-b border-gray-200 h-12 py-8 items-center">
                <span className="w-1/12 ml-1 text-left px-2 font-bold">
                  Address
                </span>
                <input
                  name="address"
                  className="focus:outline-none px-3 w-full"
                  placeholder="!=1600 Pennsylvania Ave."
                />
              </label>
              <label className="flex border-b border-gray-200 h-12 py-8 items-center">
                <span className="w-1/12 ml-1 text-left px-2 font-bold">
                  City
                </span>
                <input
                  name="city"
                  className="focus:outline-none px-3 w-full"
                  placeholder="Burlington"
                />
              </label>
              <label className="inline-flex w-2/4 border-gray-200 py-6">
                <span className="text-right px-2 font-bold">State</span>
                <input
                  name="state"
                  className="focus:outline-none px-3 w-full"
                  placeholder="VA"
                />
              </label>
              <label className="xl:w-1/4 xl:inline-flex items-center flex xl:border-none border-t border-gray-200 py-6">
                <span className=" font-bold ml-1 text-right px-2 xl:px-0 xl:text-none">
                  ZIP
                </span>
                <input
                  name="postal_code"
                  className="focus:outline-none px-3 w-full"
                  placeholder="90210"
                />
              </label>
            </fieldset>
          </form>
        </div>
        <div className="rounded-md">
          <h2 className="uppercase tracking-wide text-lg font-bold text-gray-700 my-2">
            Payment Information
          </h2>
          <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
            <label className="flex border-b border-gray-200 h-12 py-8 items-center">
              <span className="text-right px-2 font-bold">Card</span>
              <input
                name="card"
                className="focus:outline-none px-3 w-full"
                placeholder="Card number MM/YY CVC"
                required=""
              />
            </label>
          </fieldset>
        </div>
        <Link href={"/account"}>
          <a>
            <button className="submit-button px-4 py-3 rounded-full bg-hyperred text-white focus:ring focus:outline-none w-full text-xl font-bold transition-colors">
              Pay $65.72
            </button>
          </a>
        </Link>
      </div>
      <div className="col-span-1 bg-white lg:block hidden">
        <h1 className=" font-bold py-6 border-b-2 text-xl text-gray-600 px-8">
          Order Summary
        </h1>
        <ul className="py-6 border-b space-y-6 px-8">
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
        <div className="px-8 border-b">
          <div className="flex justify-between py-4 text-gray-600">
            <span className=" font-bold">Subtotal</span>
            <span className=" font-bold text-hyperred">$62.00</span>
          </div>
          <div className="flex justify-between py-4 text-gray-600">
            <span className=" font-bold">Taxes</span>
            <span className=" font-bold text-hyperred">$3.72</span>
          </div>
        </div>
        <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
          <span className=" font-bold">Total</span>
          <span className=" font-bold">$65.72</span>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
