import React from "react";
import { RouteOptionCard } from "./RouteOptionCard.component";
import { setCookies } from "cookies-next";

const RouteSection = (props) => {
  setCookies("departureCity", props.departureCity);
  setCookies("destinationCity", props.destinationCity);
  setCookies("departureCityId", props.departureCityId);
  setCookies("destinationCityId", props.destinationCityId);

  const routeOptions = [
    {
      tripID: "abc123",
      departureWindow: "Morning",
      earliestPod: "05:00",
      latestPod: "10:25",
      tripPrice: "$25.00",
    },
    {
      tripID: "def456",
      departureWindow: "Midday",
      earliestPod: "10:30",
      latestPod: "15:30",
      tripPrice: "$10.00",
    },
    {
      tripID: "ghi789",
      departureWindow: "Evening",
      earliestPod: "14:00",
      latestPod: "21:30",
      tripPrice: "$15.00",
    },
  ];

  return (
    <section
      id="route-choices"
      className="relative mx-auto mb-auto w-full items-center px-5 py-12 md:px-12 lg:px-24"
    >
      {/* TODO center this instead of a large margin top. flex box be flexing weird rn... */}
      <h2 className="text-center text-6xl font-bold text-black-500">
        {props.departureCity} to {props.destinationCity}
      </h2>
      <div className="relative mx-auto mt-20 flex max-w-7xl items-center justify-evenly md:px-12 lg:px-16">
        <div className="relative space-y-12 overflow-hidden rounded-xl p-10 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {routeOptions.map((option, index) => (
            <RouteOptionCard
              key={option.tripID}
              departureWindow={option.departureWindow}
              earliestPod={option.earliestPod}
              latestPod={option.latestPod}
              tripPrice={option.tripPrice}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
