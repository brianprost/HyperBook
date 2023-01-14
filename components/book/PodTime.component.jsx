import React from "react";
import { GiApolloCapsule } from "react-icons/gi";

const PodTime = ({ time, firstOrLast }) => {
  return (
    <div className="group my-2 flex items-center justify-start space-x-4">
      <div className="flex flex-col items-center justify-center text-red-50 ">
        <GiApolloCapsule className="text-center text-xl" />
        <p className="font-semibold group-hover:text-red-500">{firstOrLast}</p>
      </div>
      <span className="w-2/3 select-all rounded-xl border-[3px] border-red-500 bg-neutral-300 p-2 text-center text-3xl lg:text-xl font-bold tracking-wide text-black-500">
        {time}
      </span>
    </div>
  );
};

export default PodTime;
