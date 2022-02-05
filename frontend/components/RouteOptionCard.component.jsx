import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const RouteOptionCard = (props) => {
  return (
    <div className="relative flex flex-col p-8 bg-zinc-300 rounded-2xl border-[6px] border-red-700">
      <h3 className="text-4xl xl:text-5xl underline font-Montserrat text-center tracking-tighter px-auto mb-10">
        {props.timeOfDay}
      </h3>
      <p className="flex items-baseline my-4 justify-center">
        <span className="text-3xl font-Montserrat tracking-wide p-2 text-center border-2 border-red-700 rounded-xl w-2/3 bg-zinc-200">
          {props.departureTime}
        </span>
      </p>
      <div className="flex justify-center">
        <ArrowDownIcon className="h-6 w-6 text-hyperblue" />
      </div>
      <p className="flex items-baseline my-4 justify-center">
        <span className="text-3xl font-Montserrat tracking-wide p-2 text-center border-2 border-red-700 rounded-xl w-2/3 bg-zinc-200">
          {props.arrivalTime}
        </span>
      </p>
      <div className="mt-6 rounded-lg">
        <Link href={"/checkout"}>
          <a
            type="highlight"
            className=" w-full items-center block px-10 py-3.5 text-xl font-Montserrat font-extrabold text-center transition duration-400 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-zinc-200 hover:bg-red-700 hover:text-zinc-200
        "
          >
            {props.tripPrice}
          </a>
        </Link>
      </div>
    </div>
  );
};
