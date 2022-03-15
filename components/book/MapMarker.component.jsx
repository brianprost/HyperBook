import React from "react";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";

const MapMarker = ({ city, departureCity, destinationCity }) => {
  return (
    <>
      {/* {(departureCity || destinationCity) === city.city ? (
        <FaMapMarkerAlt
          className="object-center text-xl text-indigo-500 "
          x={-9.5}
          y={-20}
        />
      ) : (
        <FaMapMarker
          className="object-center text-xl text-red-500 hover:text-indigo-500 "
          x={-9.5}
          y={-20}
        />
      )} */}
      <FaMapMarker
        className="object-center text-xl text-red-500 hover:text-indigo-500 "
        x={-9.5}
        y={-20}
      />
    </>
  );
};

export default MapMarker;
