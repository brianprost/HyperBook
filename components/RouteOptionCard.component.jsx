import React from "react";

export const RouteOptionCard = (props) => {
  return (
    <div>
      <div className="relative flex flex-col p-8 bg-zinc-300 rounded-xl border-4 border-red-700">
        <div className="flex-1 ">
          <h3 className="text-5xl underline font-Inter font-extrabold text-center mb-10">
            {props.timeOfDay}
          </h3>
          <p className="flex items-baseline my-4 justify-center">
            <span className="text-3xl font-mono font-bold tracking-wide p-2 text-center border-4 border-red-700 rounded-xl w-2/3 bg-zinc-100">
              {props.departureTime}
            </span>
          </p>
          <p className="flex items-baseline my-4 justify-center">
            <span className="text-3xl font-mono font-bold tracking-wide p-2 text-center border-4 border-red-700 rounded-xl w-2/3 bg-zinc-100">
              {props.arrivalTime}
            </span>
          </p>
        </div>
        <div className="mt-6 rounded-lg">
          <a
            href="#"
            type="highlight"
            className=" w-full items-center block px-10 py-3.5 text-xl font-Inter font-extrabold text-center transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-zinc-200 hover:bg-red-700 hover:text-zinc-200
        "
          >
            {props.tripPrice}
          </a>
        </div>
      </div>
    </div>
  );
};
