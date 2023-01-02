import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
useRouter;
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import MapMarker from "./MapMarker.component";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export const Map = ({
  cities,
  titleText,
  setTitleText,
  departureCity,
  setDepartureCity,
  setDepartureCityId,
  setTooltipContent,
  destinationCity,
  setDestinationCity,
  setDestinationCityId,
}) => {
  // if a departure city has been selected, filter out the departure city from the list of cities
  if (departureCity) {
    cities = cities.filter((city) => city.name !== departureCity);
  }
  return (
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
                  setDepartureCityId(city.id);
                  setTitleText(`${city.name} to `);
                  // filterCities(city.id)
                } else if (!destinationCity) {
                  setDestinationCity(city.name);
                  setDestinationCityId(city.id);
                  setTitleText(`${titleText + city.name}`);
                }
              }}
            >
              <MapMarker
                city={city}
                // departureCity={departureCity}
                // destinationCity={destinationCity}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};
