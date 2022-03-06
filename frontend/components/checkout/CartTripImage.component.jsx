import React from "react";

const CartTripImage = ({ departureCity, destinationCity, departureWindow }) => {
  departureCity = departureCity.replace(/[\s,.]+/g, "-").toLowerCase();
  destinationCity = destinationCity.replace(/[\s,.]+/g, "-").toLowerCase();
  return (
    <div className="col-span-2 flex flex-col self-center rounded-lg bg-indigo-500">
      <div className="grid h-20 flex-shrink-0 grid-cols-2 grid-rows-1">
        <img
          className="h-full w-full rounded-l-lg object-cover"
          src={`./img/cities/${departureCity}.webp`}
          alt={`${departureCity}`}
        />
        <img
          className="h-full w-full rounded-r-lg object-cover"
          src={`./img/cities/${destinationCity}.webp`}
          alt={`${destinationCity}`}
        />
      </div>
      <p className="my-1.5 text-center text-xs font-[550] uppercase tracking-widest text-neutral-500 ">
        {departureWindow ? departureWindow : `DEPARTURE WINDOW`}
      </p>
    </div>
  );
};

export default CartTripImage;
