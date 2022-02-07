import React from "react";

export const Reservation = (props) => {
  return (
    <div className="flex flex-col mb-12 overflow-hidden h-auto">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-48 rounded-lg"
          src={props.displayImage}
          alt={`${props.departureCity} to ${props.finalDestination}`}
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex-1">
          <div className="flex pt-6 justify-between font-normal tracking-wide space-x-1 text-sm text-gray-500">
            <time dateTime={`${props.date}`}> {props.date} </time>
            <span className="text-right font-bold uppercase text-hypertan bg-hyperred bg-opacity-90 border rounded-md px-2 py-1 mb-5">
              {props.confirmationCode}
            </span>
          </div>
          <h3
            className="
              text-xl
        font-bold
              leading-none
              tracking-tight
              text-neutral-700
            "
          >
            {props.departureCity} to {props.finalDestination}
          </h3>
        </div>
      </div>
    </div>
  );
};
