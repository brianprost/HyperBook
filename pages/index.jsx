import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [sectionClassName, setSectionClassName] = useState(null);

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="relative drop-shadow-lg">
                  <img
                    className="mx-auto animate-zoomInLeft object-cover object-center "
                    alt="hero"
                    src="./img/hyperbook-icon.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-16 flex animate-fadeInUp flex-col items-center justify-center text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
            <h1 className="mb-8 text-4xl font-bold text-indigo-500 drop-shadow-md md:text-7xl">
              HYPERBOOK
            </h1>
            <p className="mb-8 text-left text-2xl font-[330] text-neutral-800 antialiased">
              The easy and fun way to book travel on the newest method of
              transportation.
            </p>
            <div className="mt-0 lg:mt-4">
              <button
                className="duration-400 block transform rounded-xl border-2 border-red-500 bg-red-500 px-10 py-3.5 text-center text-xl font-[780] text-neutral-400 shadow-md transition ease-in-out hover:border-red-500 hover:bg-indigo-600 hover:text-neutral-300"
                onClick={() => {
                  setSectionClassName("animate-backOutUp");
                  router.push("/book");
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
