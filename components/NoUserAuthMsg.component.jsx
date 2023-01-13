import React from "react";

const NoUserAuthMsg = () => {
  const msg =
    "Unfortunately, the old database was taken offline by one of Brian's classmates, so while Brian finds some time that doesn't exist to finish the migration to the new database, new user sign ups are disabled. Yeah...it sucks.";
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <img
        src="/img/hyperbook-icon.webp"
        alt="hyperbook logo spin"
        className="h-52 w-52"
      />
      <p className="mt-12 select-none text-4xl font-bold hover:bg-gradient-to-r hover:from-black-500 hover:to-red-500 hover:bg-clip-text max-w-4xl text-center hover:text-transparent">
        {msg}{" "}
      </p>
    </div>
  );
};

export default NoUserAuthMsg;
