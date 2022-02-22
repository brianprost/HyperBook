import React from "react";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";

const MapMarker = ({ city, departureCity, destinationCity }) => {
  return (
    <>
      {(departureCity || destinationCity) === city.city ? (
        <FaMapMarkerAlt className="-translate-x-2.5 -translate-y-5 text-xl text-red-700 " />
      ) : (
        <FaMapMarker className="-translate-x-2.5 -translate-y-5 text-xl text-red-500 hover:text-red-700 " />
      )}
    </>
  );
};

export default MapMarker;
