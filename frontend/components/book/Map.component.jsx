import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export const Map = ({ cities, departureCity, destinationCity }) => {
  return (
    <div className="mx-auto w-5/6">
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
        {cities.map((city) => (
          <Marker
            key={city.city}
            coordinates={[city.longitude, city.latitude]}
            onClick={() => {
              // there's probably a better place for this
              if (destinationCity && departureCity) {
                console.log("cities have already been selected");
              } else if (!departureCity) {
                setDepartureCity(city.city);
                console.log(`departureCity set to: ${city.city}`);
              } else if (!destinationCity) {
                setDestinationCity(city.city);
                console.log(`destinationCity set to: ${city.city}`);
                router.push("/route-choices");
              }
            }}
          >
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
              {city.city}
            </text>
          </Marker>
        ))}
        {/* eventually a line will go here: */}
      </ComposableMap>
    </div>
  );
};
