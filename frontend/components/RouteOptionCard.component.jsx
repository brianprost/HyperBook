import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const RouteOptionCard = (props) => {
  return (
    <div className="relative flex animate-slideInDown flex-col rounded-2xl border-[6px] border-red-500 bg-indigo-500 p-8">
      <h3 className="px-auto mb-10 select-none text-center text-4xl font-[725] tracking-tighter text-red-50 underline drop-shadow-sm  xl:text-5xl">
        {props.timeOfDay}
      </h3>
      <p className="my-4 flex items-baseline justify-center">
        <span className="w-2/3 select-all rounded-xl border-[3px] border-red-500 bg-neutral-300 p-2 text-center text-3xl font-bold tracking-wide">
          {props.departureTime}
        </span>
      </p>
      <div className="flex justify-center">
        <ArrowDownIcon className="h-6 w-6 text-red-500" />
      </div>
      <p className="my-4 flex items-baseline justify-center">
        <span className="w-2/3 select-all rounded-xl border-[3px] border-red-500 bg-neutral-300 p-2 text-center text-3xl font-bold tracking-wide">
          {props.arrivalTime}
        </span>
      </p>
      <div className="mt-6 select-none rounded-lg">
        <Link href={"/checkout"}>
          <a
            type="highlight"
            className=" duration-400 block w-full transform items-center rounded-xl border-[3px] border-neutral-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-500 shadow-md transition ease-in-out hover:border-red-500 hover:bg-neutral-500 hover:text-red-500"
          >
            {props.tripPrice}
          </a>
        </Link>
      </div>
    </div>
  );
};
