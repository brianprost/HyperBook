import React from "react";

const TripImage = ({ departureCity, destinationCity }) => {
  // restructure city names to hyphenated
  departureCity = departureCity.replace(/[\s,.]+/g, "-").toLowerCase();
  destinationCity = destinationCity.replace(/[\s,.]+/g, "-").toLowerCase();

  return (
    <div className="grid flex-shrink-0 grid-cols-2 grid-rows-1">
      <img
        className="h-48 w-full rounded-l-lg object-cover"
        src={`./img/cities/${departureCity}.webp`}
        alt={`${departureCity}`}
      />
      <img
        className="h-48 w-full rounded-r-lg object-cover"
        src={`./img/cities/${destinationCity}.webp`}
        alt={`${destinationCity}`}
      />
    </div>
  );
};

export default TripImage;
