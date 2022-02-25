import React from "react";
import Link from "next/link";
import PodTime from "./PodTime.component";
import { setCookies } from "cookies-next";
import Router from "next/router";

export const RouteOptionCard = ({
  timeOfDay,
  earliestPod,
  latestPod,
  tripPrice,
}) => {
  const onLinkClick = (e) => {
    e.preventDefault();
    setCookies("time", timeOfDay)
    Router.push('/checkout');
  };
  return (
    <div className="relative flex animate-slideInDown flex-col rounded-2xl border-[6px] border-red-500 bg-indigo-500 p-8 px-12">
      <h3 className="px-auto mb-5 select-none text-center text-4xl font-[725] tracking-tighter text-red-50 underline drop-shadow-sm xl:text-5xl">
        {timeOfDay}
      </h3>
      <h2 className="px-auto mb-2 select-all text-center text-xl font-semibold tracking-tight text-red-50">
        All <span className="font-bold text-red-500 drop-shadow-md">Pods</span>{" "}
        between:
      </h2>
      <PodTime time={earliestPod} firstOrLast={"First"} />
      <PodTime time={latestPod} firstOrLast={"Last"} />
      <div className="mt-6 select-none rounded-lg">
        <button
          type="button"
          className=" duration-400 block w-full transform items-center rounded-xl border-[3px] border-neutral-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-500 shadow-md transition ease-in-out hover:border-red-500 hover:bg-neutral-500 hover:text-red-500"
          // className="duration-400 block transform rounded-xl border-2 border-red-500 bg-red-500 px-3 py-2 text-center text-lg font-[620] text-neutral-400 shadow-md transition ease-in-out hover:border-red-500 hover:bg-indigo-500 hover:text-neutral-300"
          onClick={onLinkClick}
        >
          {tripPrice}
        </button>  
        {/* <Link href='/checkout' onClick={onLinkClick}>
          <a
            type="highlight"
            className=" duration-400 block w-full transform items-center rounded-xl border-[3px] border-neutral-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-500 shadow-md transition ease-in-out hover:border-red-500 hover:bg-neutral-500 hover:text-red-500"
          >
            {tripPrice}
          </a>
        </Link> */}
      </div>
    </div>
  );
};
