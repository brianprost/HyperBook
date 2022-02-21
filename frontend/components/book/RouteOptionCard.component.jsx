import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import PodTime from "./PodTime.component";
import { GiApolloCapsule } from "react-icons/gi";

export const RouteOptionCard = ({
  timeOfDay,
  earliestPod,
  latestPod,
  tripPrice,
}) => {
  return (
    <div className="relative flex animate-slideInDown flex-col rounded-2xl border-[6px] border-red-500 bg-indigo-500 p-8 px-12">
      <h3 className="px-auto mb-5 select-none text-center text-4xl font-[725] tracking-tighter text-red-50 underline drop-shadow-sm xl:text-5xl">
        {timeOfDay}
      </h3>
      <h2 className="px-auto select-all text-center text-xl font-semibold tracking-tight text-red-50 mb-2">
        All <span className="text-red-500">pods</span> between:
      </h2>
      <PodTime time={earliestPod} firstOrLast={"First"} />
      <PodTime time={latestPod} firstOrLast={"Last"} />
      <div className="mt-6 select-none rounded-lg">
        <Link href={"/checkout"}>
          <a
            type="highlight"
            className=" duration-400 block w-full transform items-center rounded-xl border-[3px] border-neutral-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-500 shadow-md transition ease-in-out hover:border-red-500 hover:bg-neutral-500 hover:text-red-500"
          >
            {tripPrice}
          </a>
        </Link>
      </div>
    </div>
  );
};
