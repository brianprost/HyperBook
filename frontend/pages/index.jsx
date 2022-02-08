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
          <div className="flex flex-col items-center mt-12 mb-16 text-left lg:flex-grow justify-center lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 animate-fadeInUp">
            <h1 className="mb-8 text-4xl font-bold text-hyperblue md:text-7xl drop-shadow-md">
              HYPERBOOK
            </h1>
            <p className="mb-8 text-2xl text-left text-gray-600 antialiased font-[330]">
              The easy and fun way to book travel on the newest method of
              transportation.
            </p>
            <div className="mt-0 lg:mt-4">
              <button
                className="block px-10 py-3.5 text-xl font-[780] text-center transition duration-400 ease-in-out transform border-2 border-white text-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-hyperred hover:bg-zinc-200 hover:text-hyperred hover:border-hyperred"
                onClick={() => {
                  setSectionClassName("animate-backOutUp");
                  router.push("/login");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
