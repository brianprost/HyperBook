import React from "react";
import { FiLogIn } from "react-icons/fi";
import AccountButton from "./UserNavButton.component";

const LoginButton = () => {
  return (
    <a href={"/login"}>
      <AccountButton>
        Login
        <FiLogIn
          className="ml-1 h-4 w-4 group-hover:text-red-500"
          strokeWidth={2.8}
        />
      </AccountButton>
    </a>
  );
};

export default LoginButton;
