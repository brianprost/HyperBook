import React from "react";
export const CityOption = (props) => {
  return (
    <div className="group p-2 border-4 border-hyperred rounded-xl hover:bg-hyperred hover:border-hyperblue">
      <div className="w-full h-full flex justify-center">
      <img
        src={`${props.image}`}
        alt={`${props.wine}`}
        className="rounded-xl"
      />
      </div>
      <h1
        className="text-xl font-Montserrat leading-none tracking-tighter text-hyperred text-center lg:text-3xl select-none 
      group-hover:text-hypertan group-hover:scale-105"
      >
        {props.city}
      </h1>
      <h2 className="text-md">{props.winery}</h2>
    </div>
  );
};
