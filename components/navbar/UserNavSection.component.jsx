import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AccountButton from "./UserNavButton.component";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";
import { getUser } from "../../services/AzureUserService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserNavSection = (props) => {
  const router = useRouter();

  const [accountName, setAccountName] = useState("");

  useEffect(() => {
    let id = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      .split("=")[1];
    getUser(id)
      .then((res) => {
        setAccountName(
          res.data.firstName.toUpperCase() +
            " " +
            res.data.lastName.toUpperCase()
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
              : "mr-2 text-neutral-200 hover:bg-indigo-500 hover:bg-opacity-90",
            "rounded-md py-2 px-3 text-sm font-semibold"
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
        <Link href={link}>
          <a
            key={linkTitle}
            className={classNames(
              router.pathname == linkTitle
                ? "bg-neutral-500 bg-opacity-20 text-neutral-500"
                : "text-neutral-200 hover:bg-indigo-500 hover:bg-opacity-90 hover:text-neutral-500",
              "rounded-md py-2 px-3 text-sm font-semibold"
            )}
          >
            {linkTitle}
          </a>
        </Link>
      );
  };

  return (
    <div className="flex flex-row items-center justify-evenly">
      {/* TODO: make this button non styled once this username thing is figured out */}
      <LinkElement linkTitle={"My Account"} link={"/account"} />
      <LinkElement linkTitle={"Logout"} link={"/"} />
      <AccountButton>
        <RiAccountCircleLine className="mr-2 h-5 w-5" />
        {accountName ? accountName : "whereIsUsername?"}
      </AccountButton>
    </div>
  );
};

export default UserNavSection;
