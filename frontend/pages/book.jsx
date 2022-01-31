import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const BookingPage = () => {
  const router = useRouter();
  console.log(router);

  const [cities, setCities] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [departureCity, setDepartureCity] = useState(false);
  const [destinationCity, setDestinationCity] = useState(false);

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

  if (isLoading) return <p>Loading...</p>;
  if (!cities) return <p>No profile Cities</p>;

  return (
    <section id="book">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h2 className="text-6xl font-Montserrat text-black text-center">
          Destinations
        </h2>
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
      </div>
    </section>
  );
};

export default BookingPage;
