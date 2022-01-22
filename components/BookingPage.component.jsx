import React from "react";
import { cities } from "../data/cities";
import { CityOption } from "./CityOption.component";

export const BookingPage = () => {
  return (
    <section id="book">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full gap-12 mx-auto lg:grid-cols-4">
        {cities.map((city, index) => (
          <CityOption city={city.city} key={index} />
        ))}
        </div>
      </div>
      </section>
  );
};
