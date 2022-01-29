import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

import allStates from "../data/allStates.json";
import cities from "../data/cities.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-73.9249, 40.6943] },
];

export const Map = () => {
  return (
    <div className="container mx-auto">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#2b46bd"
                  geography={geo}
                  fill="#f2eddb"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))}
            </>
          )}
        </Geographies>
        {cities.map(({ city, longitude, latitude }) => (
          <Marker key={city} coordinates={[longitude, latitude]}>
            <circle
              r={6}
              fill="#c42217"
              stroke="#fff"
              strokeWidth={1}
              style={{
                default: { outline: "none" },
                hover: { outline: "#fff solid 20px" },
                pressed: { outline: "none" },
              }}
            />
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "Montserrat",
                fill: "#000",
                fontSize: "0.6rem",
              }}
            >
              {city}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};
