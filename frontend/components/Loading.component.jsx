import React from "react";

const Loading = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <img
        src="/img/hyperbook-icon.webp"
        alt="hyperbook logo spin"
        className="h-52 w-52 animate-pulse animate-infinite"
      />
      <p className="mt-12 select-none text-4xl font-bold hover:bg-gradient-to-r hover:from-black-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent">
        Loading{" "}
        <span className="inline-block animate-tada bg-gradient-to-r from-red-500 to-black-500 bg-clip-text text-transparent animate-infinite">
          ...
        </span>
      </p>
    </div>
  );
};

export default Loading;
