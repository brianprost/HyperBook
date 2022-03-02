import React from "react";
import { useRouter } from "next/router";
import AccountButton from "./UserNavButton.component";
import { RiAccountCircleLine } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserNavSection = (props) => {
  const router = useRouter();

  const LinkElement = ({ linkTitle, link }) => {
    // yeah i know this doesn't look pretty. i'll change it later
    if (linkTitle === "Logout") {
      return (
        <a
          key={linkTitle}
          href={link}
          className={classNames(
            router.pathname == linkTitle
              ? "bg-neutral-500 bg-opacity-20 text-neutral-500"
              : "text-neutral-200 outline-offset-1 hover:bg-indigo-500 hover:bg-opacity-90 hover:text-neutral-500 hover:outline hover:outline-2 hover:outline-neutral-500",
            "y-2 rounded-md px-3 text-sm font-semibold"
          )}
          onClick={() => {
            document.cookie.split(";").forEach(function (c) {
              document.cookie =
                c.trim().split("=")[0] +
                "=;" +
                "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            });
            localStorage?.setItem("isAuthenticated", "false");
          }}
        >
          {linkTitle}
        </a>
      );
    } else
      return (
        <a
          key={linkTitle}
          href={link}
          className={classNames(
            router.pathname == linkTitle
              ? "bg-neutral-500 bg-opacity-20 text-neutral-500"
              : "text-neutral-200 outline-offset-1 hover:bg-indigo-500 hover:bg-opacity-90 hover:text-neutral-500 hover:outline hover:outline-2 hover:outline-neutral-500",
            "y-2 rounded-md px-3 text-sm font-semibold"
          )}
        >
          {linkTitle}
        </a>
      );
  };

  return (
    <div className="flex flex-row items-center justify-evenly">
      {/* TODO: make this button non styled once this username thing is figured out */}
      <AccountButton>
        <RiAccountCircleLine className="mr-2 h-5 w-5" />
        {props.username ? props.username : "whereIsUsername?"}
      </AccountButton>
      <LinkElement linkTitle={"Your Account"} link={"/account"} />
      <LinkElement linkTitle={"Logout"} link={"/"} />
    </div>
  );
};

export default UserNavSection;
