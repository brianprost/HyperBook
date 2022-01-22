import React from "react";

export const CityOption = (props) => {
  return (
    <div className="group p-2 border-4 border-hyperred rounded-xl hover:bg-hyperred hover:border-hyperblue">
      <h1 className="text-2xl font-semibold font-sans leading-none tracking-tighter text-hyperred text-center lg:text-3xl select-none 
      group-hover:text-hypertan group-hover:scale-105">
        {props.city}
      </h1>
    </div>
  );
};
