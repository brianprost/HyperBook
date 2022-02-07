import React from "react";
import { RouteOptionCard } from "../components/RouteOptionCard.component";

const RouteChoicesPage = (props) => {
  const routeOptions = [
    {
      tripID: "abc123",
      timeOfDay: "Morning",
      departureTime: "08:25",
      arrivalTime: "08:55",
      tripPrice: "$25.00",
    },
    {
      tripID: "def456",
      timeOfDay: "Afternoon",
      departureTime: "12:40",
      arrivalTime: "13:20",
      tripPrice: "$10.00",
    },
    {
      tripID: "ghi789",
      timeOfDay: "Evening",
      departureTime: "18:15",
      arrivalTime: "18:45",
      tripPrice: "$15.00",
    },
  ];

  return (
    <section id="route-choices">
      {/* TODO center this instead of a large margin top. flex box be flexing weird rn... */}
      <div className="relative mx-auto md:px-12 lg:px-16 max-w-7xl flex justify-evenly items-center mt-20">
        <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
          {routeOptions.map((option, index) => (
            <RouteOptionCard
              key={option.tripID}
              timeOfDay={option.timeOfDay}
              departureTime={option.departureTime}
              arrivalTime={option.arrivalTime}
              tripPrice={option.tripPrice}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteChoicesPage;
