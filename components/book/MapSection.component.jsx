import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
useRouter;
import ReactTooltip from "react-tooltip";
import RouteSection from "./RouteSection.component";
import Loading from "../Loading.component";
import { Map } from "./Map.component";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../pages/_app";
import { supabase } from "../../services/supabase";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export function MapSection() {
  const [cities, setCities] = useState(null);
  const [destinations, setDestinations] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureCityId, setDepartureCityId] = useState(NaN);
  const [destinationCityId, setDestinationCityId] = useState(NaN);
  const [titleText, setTitleText] = useState("Destinations");
  const [tooltipContent, setTooltipContent] = useState("");

  useEffect(() => {
    getCities().then((data) => {
      setCities(data);
      setLoading(false);
    });
  }, []);
  
  if (isLoading) return <Loading />;
  // if (!cities) return <p>No cities :(</p>;

  if (destinationCity) {
    return (
      <RouteSection
        departureCity={departureCity}
        destinationCity={destinationCity}
        departureCityId={departureCityId}
        destinationCityId={destinationCityId}
      />
    );
  }

  return (
    <div className="relative mx-auto mb-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
      <h2 className="text-center text-6xl font-bold text-black-500">
        {titleText}
      </h2>
      <Map
        cities={cities}
        // filterCities={filterCities}
        titleText={titleText}
        setTitleText={setTitleText}
        departureCity={departureCity}
        setDepartureCity={setDepartureCity}
        setDepartureCityId={setDepartureCityId}
        setTooltipContent={setTooltipContent}
        destinationCity={destinationCity}
        setDestinationCity={setDestinationCity}
        setDestinationCityId={setDestinationCityId}
      />
      <ReactTooltip
        className="font-[720]"
        backgroundColor="#222831"
        textColor="#e8e8e8"
      >
        {tooltipContent}
      </ReactTooltip>
    </div>
  );
};

export default MapSection;

async function getCities() {
  const { data, error } = await supabase.from("cities").select("*");
  if (error) console.log(error);
  return data;
}
