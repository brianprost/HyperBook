import React from "react";
import { Reservation } from "../components/Reservation.component";

const AccountPage = () => {
  const accountName = "Billie Joe Gates";

  return (
    <section id="account-bookings">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl h-screen ">
        <h2 className="text-4xl text-right font-bold mb-20">
          Hi, <span className="text-hyperred">{accountName}</span>
        </h2>
        <div className="pb-5 border-b border-black">
          <h3 className="text-lg font-bold leading-6 text-neutral-600">
            Your reservations
          </h3>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <Reservation
              date="Mar 16, 2020"
              pricePaid="$25"
              departureCity="Chicago"
              finalDestination="Nashville"
              confirmationCode="FF9OUG"
              displayImage="./img/CHI-BNA.webp"
            />
            <Reservation
              date="Jun 08, 2021"
              pricePaid="$15"
              departureCity="New York"
              finalDestination="Philadelphia"
              confirmationCode="WFYC38"
              displayImage="./img/NYC-PHL.webp"
            />
            <Reservation
              date="Dec 24, 2020"
              pricePaid="$30"
              departureCity="Seattle"
              finalDestination="San Francisco"
              confirmationCode="6PDQBF"
              displayImage="./img/SEA-SFO.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
