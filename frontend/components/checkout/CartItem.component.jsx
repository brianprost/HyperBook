import React from "react";

export const CartItem = (props) => {
  return (
    <li className="border-b-1 grid grid-cols-6 gap-2">
      <div className="col-span-1 self-center">
        <img src={props.tripImage} alt="Product" className="w-full rounded" />
      </div>
      <div className="col-span-3 flex flex-col pt-2">
        <span className="text-md font-bold text-indigo-600">
          {props.tripTitle}
        </span>
        <span className="inline-block pt-2 font-sans text-sm text-indigo-400">
          {props.tripDate} at {props.tripTime}
        </span>
      </div>
      <div className="col-span-2 pt-3">
        <div className="flex items-center justify-end space-x-2 text-sm">
          <span className="inline-block font-bold text-red-500">
            {props.tripPrice}
          </span>
        </div>
      </div>
    </li>
  );
};
