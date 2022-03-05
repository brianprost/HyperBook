import React from "react";

export const CartItem = (props) => {
  const tripTitle = props.departureCity + " to " + props.destinationCity;
  return (
    <li className="border-b-1 grid grid-cols-6 gap-2">
      <div className="col-span-1 self-center">
        <img
          src="./img/SEA-SFO.webp"
          alt="Product"
          className="w-full rounded"
        />
      </div>
      <div className="col-span-3 flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
          {props.departureWindow ? props.departureWindow : `DEPARTURE WINDOW`}
        </span>
        <span className="text-base font-bold text-indigo-600">{tripTitle}</span>
      </div>
      <div className="col-span-2 self-center">
        <div className="flex items-center justify-end space-x-2 text-sm">
          <span className="inline-block font-bold text-red-500">
            {"$" + props.tripPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  );
};
