import React from "react";

export const Reservation = ({
  displayImage,
  departureCity,
  finalDestination,
  departureWindow,
  confirmationCode,
}) => {
  return (
    <div className="mb-12 flex h-auto flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full rounded-lg object-cover"
          src={displayImage}
          alt={`${departureCity} to ${finalDestination}`}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wider text-indigo-400">
          {departureWindow}
        </p>
        <div className="mt-1 flex justify-between space-x-1 text-sm font-normal tracking-wide text-indigo-800 ">
          <h3 className="text-xl font-bold tracking-tight text-indigo-500">
            {departureCity} to {finalDestination}
          </h3>
          <span className="mb-5 select-all rounded-md border bg-red-500 bg-opacity-100 px-2 py-1 text-right font-bold uppercase text-neutral-300">
            {confirmationCode}
          </span>
        </div>
      </div>
    </div>
  );
};
