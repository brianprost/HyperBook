import React from "react";

const UserNavButton = (props) => {
  return (
    <button className="text-md group mt-4  inline-flex items-center rounded-lg border border-neutral-500 bg-transparent py-1 px-3 font-semibold text-neutral-500  hover:border-opacity-0 hover:bg-indigo-500 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 md:mt-0">
      {props.children}
    </button>
  );
};

export default UserNavButton;
