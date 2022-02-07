import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const [sectionClassName, setSectionClassName] = useState(null);

  return (
    <section className={sectionClassName}>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="relative drop-shadow-lg">
                  <img
                    className="object-cover object-center mx-auto animate-zoomInLeft "
                    alt="hero"
                    src="./img/hyperbook-icon.webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 animate-fadeInUp">
            <h1 className="mb-8 text-4xl font-bold text-hyperblue md:text-7xl drop-shadow-md">
              HYPERBOOK
            </h1>
            <p className="mb-8 text-2xl text-left text-gray-600 antialiased font-[330]">
              The easy and fun way to book travel on the newest method of
              transportation.
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button
                  className="items-center block px-10 py-4 text-base font-bold tracking-wide text-center text-hypertan shadow-lg transition duration-500 ease-in-out transform bg-hyperblue rounded-xl hover:bg-blue-900"
                  onClick={() => {
                    setSectionClassName("animate-backOutUp");
                    router.push("/book");
                  }}
                >
                  Book Now
                </button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <Link href="/login">
                  <a>
                    <button className="items-center block px-10 py-3.5 text-base font-bold tracking-wide text-center text-hyperblue transition duration-500 ease-in-out transform border-2 border-white shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                      Sign In
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
