import React from "react";

export const CartItem = (props) => {
  return (
    <li className="grid grid-cols-6 gap-2 border-b-1">
      <div className="col-span-1 self-center">
        <img src={props.tripImage} alt="Product" className="rounded w-full" />
      </div>
      <div className="flex flex-col col-span-3 pt-2">
        <span className="text-gray-600 text-md font-bold">
          {props.tripTitle}
        </span>
        <span className="text-gray-400 text-sm font-sans inline-block pt-2">
          {props.tripDate} at {props.tripTime}
        </span>
      </div>
      <div className="col-span-2 pt-3">
        <div className="flex items-center space-x-2 text-sm justify-end">
          <span className="text-hyperred font-bold inline-block">
            {props.tripPrice}
          </span>
        </div>
      </div>
    </li>
  );
};
