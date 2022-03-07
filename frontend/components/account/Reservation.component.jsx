import React from "react";
import TripImage from "./TripImage.component";
import { cancelTrip } from "../../services/UserService";

export const Reservation = ({
  departureCity,
  destinationCity,
  departureWindow,
  confirmationCode,
  tripId,
}) => {
  return (
    <div className="mb-12 flex h-auto flex-col overflow-hidden">
      <TripImage
        departureCity={departureCity}
        destinationCity={destinationCity}
      />
      <div className="flex flex-col justify-between">
        <p className="mt-2 cursor-default select-none text-center text-sm font-semibold uppercase tracking-wider text-indigo-400">
          {departureWindow}
        </p>
        <div className="mt-2.5 flex justify-between space-x-1 text-sm font-normal tracking-wide text-indigo-800 ">
          <h3 className="text-xl font-bold tracking-tight text-indigo-500">
            {departureCity} to {destinationCity}
          </h3>
          <div
            className="group relative flex h-8 w-1/3 flex-col items-center justify-center rounded-lg bg-red-500 py-1 text-center font-bold uppercase tracking-wide hover:cursor-pointer hover:border hover:border-red-500 hover:bg-indigo-500 hover:text-red-500"
            onClick={() => {
              console.log(`cancel trip ${tripId}`);
              cancelTrip(tripId);
            }}
          >
            <p className="absolute select-none  text-neutral-300 group-hover:opacity-0">
              {confirmationCode}
            </p>
            <p className="relative opacity-0 group-hover:opacity-100">CANCEL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
