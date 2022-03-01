import React from "react";

export const Reservation = ({
  departureCity,
  destinationCity,
  departureWindow,
  confirmationCode,
}) => {
  // TODO fix images with spaces

  return (
    <div className="mb-12 flex h-auto flex-col overflow-hidden">
      <div className="grid flex-shrink-0 grid-cols-2 grid-rows-1">
        <img
          className="h-48 w-full rounded-l-lg object-cover"
          src={`./img/cities/${departureCity}.webp`}
          alt={`${departureCity}`}
        />
        <img
          className="h-48 w-full rounded-r-lg object-cover"
          src={`./img/cities/${destinationCity}.webp`}
          alt={`${destinationCity}`}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <p className="mt-2 cursor-default select-none text-center text-sm font-semibold uppercase tracking-wider text-indigo-400">
          {departureWindow}
        </p>
        <div className="mt-2.5 flex justify-between space-x-1 text-sm font-normal tracking-wide text-indigo-800 ">
          <h3 className="text-xl font-bold tracking-tight text-indigo-500">
            {departureCity} to {destinationCity}
          </h3>
          <span className="mb-5 select-all rounded-md border bg-red-500 bg-opacity-100 px-2 py-1 text-right font-bold uppercase text-neutral-300 tracking-wide">
            {confirmationCode}
          </span>
        </div>
      </div>
    </div>
  );
};
