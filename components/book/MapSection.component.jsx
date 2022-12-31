import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
useRouter;
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import RouteSection from "./RouteSection.component";
import MapMarker from "./MapMarker.component";
import Loading from "../Loading.component";
import { getDestinations } from "../../services/UserService";
import { Map } from "./Map.component";
import { useCollection } from 'react-firebase-hooks/firestore';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapSection = () => {
  const [cities, setCities] = useState(null);
  const [destinations, setDestinations] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [departureCity, setDepartureCity] = useState(false);
  const [destinationCity, setDestinationCity] = useState(false);
  const [departureCityId, setDepartureCityId] = useState(false);
  const [destinationCityId, setDestinationCityId] = useState(false);
  const [titleText, setTitleText] = useState("Destinations");
  const [tooltipContent, setTooltipContent] = useState("");

  // const filterCities = ({ cityId }) => {
  //   let destinations = getDestinations(cityId);
  //   setCities(destinations);
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     "https://hyperbookappapi.azurewebsites.net/api/HyperBook/GetCitiesWithInfo"
  //   )
  //     .then((res) => res.json())
  //     .then((Cities) => {
  //       setCities(Cities);
  //       setLoading(false);
  //     });
  // }, []);

  const [value, loading, error] = useCollection(
    firebase.firestore().collection('myCollection').where('id', '!=', 4)
  );

  // set cities to value from firestore
  useEffect(() => {
    if (value) {
      setCities(value.docs.map(doc => doc.data()));
    }
  }, [value]);

  if (isLoading) return <Loading />;
  if (!cities) return <p>No Cities :(</p>;

  if (departureCity) {
    getDestinations(departureCityId);
  }

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
