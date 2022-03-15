import React from "react";
import CartTripImage from "./CartTripImage.component";

export const CartItem = ({
  departureCity,
  destinationCity,
  departureWindow,
  tripPrice,
}) => {
  const tripTitle = departureCity + " to " + destinationCity;
  return (
    <li className="border-b-1 grid grid-cols-6 gap-2">
      <CartTripImage
        departureCity={departureCity}
        destinationCity={destinationCity}
        departureWindow={departureWindow}
      />
      <div className="col-span-3 flex h-full flex-col items-center justify-center">
        <p className="py-auto text-center text-xl font-[700] text-indigo-600 ">
          {departureCity}
          <span className="my-auto block text-center text-xs font-[220] text-indigo-400">
            to
          </span>
          {destinationCity}
        </p>
      </div>
      <div className="col-span-1 self-center">
        <div className="flex items-center justify-end space-x-2 text-sm">
          <span className="inline-block font-bold text-red-500">
            {"$" + tripPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  );
};
