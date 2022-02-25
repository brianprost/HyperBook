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

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapSection = () => {
  const [cities, setCities] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [departureCity, setDepartureCity] = useState(false);
  const [destinationCity, setDestinationCity] = useState(false);
  const [departureCityId, setDepartureCityId] = useState(false);
  const [destinationCityId, setDestinationCityId] = useState(false);
  const [titleText, setTitleText] = useState("Destinations");
  const [tooltipContent, setTooltipContent] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://hyperbookappapi.azurewebsites.net/api/HyperBook/GetCitiesWithInfo"
    )
      .then((res) => res.json())
      .then((Cities) => {
        setCities(Cities);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="mt-32 flex flex-col items-center justify-center">
        <img
          src="/img/hyperbook-icon.webp"
          alt="hyperbook logo spin"
          className="h-52 w-52 animate-pulse animate-infinite"
        />
        <p className="mt-12 select-none text-4xl font-bold hover:bg-gradient-to-r hover:from-black-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent">
          Loading{" "}
          <span className="inline-block animate-tada bg-gradient-to-r from-red-500 to-black-500 bg-clip-text text-transparent animate-infinite">
            ...
          </span>
        </p>
      </div>
    );
  if (!cities) return <p>No Cities :(</p>;

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
      <div className="-my-10">
        <div className="mx-auto w-5/6">
          <ComposableMap
            data-tip=""
            projection="geoAlbersUsa"
            style={{
              default: { outline: "none" },
              hover: { outline: "none" },
              pressed: { outline: "none" },
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) => (
                <>
                  {geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#30475e"
                      geography={geo}
                      fill="#e8e8e8"
                    />
                  ))}
                </>
              )}
            </Geographies>
            {cities.map((city) => (
              <Marker
                key={city.name}
                coordinates={[city.longitude, city.latitude]}
                onMouseEnter={() => {
                  setTooltipContent(`${city.name}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick={async () => {
                  // there's probably a better place for this
                  if (!departureCity) {
                    setDepartureCity(city.name);
                    setDepartureCityId(city.Id);
                    setTitleText(`${city.name} to `);
                  } else if (!destinationCity) {
                    setDestinationCity(city.name);
                    setDestinationCityId(city.Id);
                    setTitleText(`${titleText + city.name}`);
                  }
                }}
              >
                <MapMarker
                  city={city}
                  departureCity={departureCity}
                  destinationCity={destinationCity}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
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
