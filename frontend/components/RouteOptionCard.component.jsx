import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const RouteOptionCard = (props) => {
  return (
    <div className="relative flex flex-col p-8 bg-indigo-500 rounded-2xl border-[6px] border-red-500 animate-slideInDown">
      <h3 className="text-4xl xl:text-5xl underline font-[725] text-center tracking-tighter px-auto mb-10 drop-shadow-sm text-red-50  select-none">
        {props.timeOfDay}
      </h3>
      <p className="flex items-baseline my-4 justify-center">
        <span className="text-3xl font-bold tracking-wide p-2 text-center border-[3px] border-red-500 rounded-xl w-2/3 bg-neutral-300 select-all">
          {props.departureTime}
        </span>
      </p>
      <div className="flex justify-center">
        <ArrowDownIcon className="h-6 w-6 text-red-500" />
      </div>
      <p className="flex items-baseline my-4 justify-center">
        <span className="text-3xl font-bold tracking-wide p-2 text-center border-[3px] border-red-500 rounded-xl w-2/3 bg-neutral-300 select-all">
          {props.arrivalTime}
        </span>
      </p>
      <div className="mt-6 rounded-lg select-none">
        <Link href={"/checkout"}>
          <a
            type="highlight"
            className=" w-full items-center block px-10 py-3.5 text-xl font-[780] text-center transition duration-400 ease-in-out transform border-[3px] shadow-md rounded-xl border-neutral-500 hover:bg-neutral-500 bg-red-500 text-neutral-500 hover:text-red-500 hover:border-red-500"
          >
            {props.tripPrice}
          </a>
        </Link>
      </div>
    </div>
  );
};
