import React from "react";

const UserNavButton = (props) => {
  return (
    <button className="text-md group mt-4 inline-flex cursor-default items-center rounded-lg border border-neutral-500 bg-transparent py-1 px-3 font-semibold text-neutral-500 md:mt-0">
      {props.children}
    </button>
  );
};

export default UserNavButton;
