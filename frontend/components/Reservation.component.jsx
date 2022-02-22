import React from "react";

export const Reservation = (props) => {
  return (
    <div className="mb-12 flex h-auto flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full rounded-lg object-cover"
          src={props.displayImage}
          alt={`${props.departureCity} to ${props.finalDestination}`}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex-1">
          <div className="flex justify-between space-x-1 pt-6 text-sm font-normal tracking-wide text-indigo-800 ">
            <time dateTime={`${props.date}`}> {props.date} </time>
            <span className="mb-5 select-all rounded-md border bg-red-500 bg-opacity-90 px-2 py-1 text-right font-bold uppercase text-hypertan">
              {props.confirmationCode}
            </span>
          </div>
          <h3 className="text-xl font-bold leading-none tracking-tight text-indigo-800">
            {props.departureCity} to {props.finalDestination}
          </h3>
        </div>
      </div>
    </div>
  );
};
