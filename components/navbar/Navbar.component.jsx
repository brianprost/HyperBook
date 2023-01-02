import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginButton from "./LoginButton.component";
import UserNavSection from "./UserNavSection.component";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = (props) => {
  const showOldNavbar = 0;
  const isUser = props.isUser;
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/" },
    // { name: "Book", href: `${isUser ? "/book" : "/login"}` },
    { name: "Book", href: "/book" },
    {
      name: "How Hyperloop Works",
      href: "https://www.youtube.com/watch?v=zcikLQZI5wQ",
    },
  ];

  if (showOldNavbar) {
    return (
      <Disclosure as="nav" className="bg-red-500">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Responsive menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="./img/hyperbook-navbar-logo.png"
                      alt="Workflow"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="./img/hyperbook-navbar-logo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-neutral-500 bg-opacity-20 text-neutral-500"
                              : "text-neutral-200 hover:bg-neutral-500 hover:bg-opacity-50 hover:text-black-500",
                            "rounded-md px-3 py-2 text-sm font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800">
                        <span className="sr-only">Your account menu</span>
                        <UserIcon className="h-8 w-8 rounded-full bg-hypertan p-1 text-red-500" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-neutral-500 py-1 shadow-lg ring-1 ring-black-500 ring-opacity-5 focus:outline-none">
                        {isUser && (
                          <Menu.Item>
                            {({ active }) => (
                              <Link href={isUser ? "/account" : "/login"}>
                                <a
                                  className={classNames(
                                    active ? "bg-neutral-100" : "",
                                    "block px-4 py-2 text-right text-sm font-semibold text-neutral-900"
                                  )}
                                >
                                  Your Account
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) =>
                            isUser ? (
                              <Link href="/">
                                <a
                                  onClick={() => {
                                    document.cookie
                                      .split(";")
                                      .forEach(function (c) {
                                        document.cookie =
                                          c.trim().split("=")[0] +
                                          "=;" +
                                          "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                                      });
                                    localStorage?.setItem(
                                      "isAuthenticated",
                                      "false"
                                    );
                                  }}
                                  className={classNames(
                                    active ? "bg-neutral-100" : "",
                                    "block px-4 py-2 text-right text-sm font-semibold text-neutral-900"
                                  )}
                                >
                                  Logout
                                </a>
                              </Link>
                            ) : (
                              <Link href="/login">
                                <a
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-right text-sm font-semibold text-gray-700"
                                  )}
                                >
                                  Login
                                </a>
                              </Link>
                            )
                          }
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-hypertan bg-opacity-20 text-white"
                        : " text-neutral-200 hover:bg-hypertan hover:bg-opacity-50 hover:text-indigo-500",
                      "block rounded-md px-3 py-14 text-center text-2xl  font-black"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  } else {
    return (
      <header className="bg-red-500">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5">
            {navigation.map((navItem) => (
              <a
                key={navItem.name}
                href={navItem.href}
                className={classNames(
                  router.pathname == navItem.href
                    ? "bg-neutral-500 bg-opacity-20 text-neutral-500"
                    : "text-neutral-200 hover:bg-indigo-500 hover:bg-opacity-90 hover:text-neutral-50",
                  "rounded-md px-3 py-2 text-sm font-semibold"
                )}
                aria-current={navItem.current ? "page" : undefined}
              >
                {navItem.name}
              </a>
            ))}
          </nav>
          <Link href={"/"}>
            <a className="order-first mb-4 flex items-center md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center">
              <img
                className="h-8 w-auto"
                src="./img/hyperbook-navbar-logo.png"
                alt="hyperbook logo"
              />
            </a>
          </Link>
          <div className="ml-5 inline-flex lg:ml-0 lg:w-2/5 lg:justify-end">
            {isUser ? (
              <UserNavSection username={props.username} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>
    );
  }
};
