import Link from "next/link";
import React from "react";
import { Map } from "../components/Map.component";

const BookingPage = () => {
  

  return (
    <section id="book">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h2 className="text-6xl font-Montserrat text-black text-center">
          Destinations
        </h2>
        <Map />
      </div>
    </section>
  );
};

export default BookingPage;
