import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// temporarily including map on page instead of component
// import { Map } from "../components/Map.component";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const BookingPage = () => {
  const [cities, setCities] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [departureCity, setDepartureCity] = useState(false);
  const [destinationCity, setDestinationCity] = useState(false);

  const router = useRouter();

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
      <div className="mt-32 flex flex-col justify-center items-center">
        <img
          src="/img/hyperbook-icon.webp"
          alt="hyperbook logo spin"
          className="h-52 w-52 animate-pulse animate-infinite"
        />
        <p className="mt-12 text-4xl select-none font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-black hover:to-hyperred">Loading <span className="inline-block animate-tada animate-infinite bg-clip-text text-transparent bg-gradient-to-r from-hyperred to-black">...</span></p>
      </div>
    );
  if (!cities) return <p>No Cities</p>;

  return (
    <section id="book" className="flex flex-col h-5/6 justify-between">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl mb-auto">
        <h2 className="text-6xl font-bold text-black text-center">
          Destinations
        </h2>
        <div className="-my-10">
          <div className="w-5/6 mx-auto">
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
                  onClick={async () => {
                    // there's probably a better place for this
                    if (destinationCity && departureCity) {
                      console.log("cities have already been selected");
                    } else if (!departureCity) {
                      setDepartureCity(city.city);
                      console.log(`departureCity set to: ${city.city}`);
                    } else if (!destinationCity) {
                      setDestinationCity(city.city);
                      await delay(1000);
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
                      fontFamily: "MontserratVariable",
                      fontWeight: "700",
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
      </div>
      <div className="flex items-center justify-evenly h-auto bg-hyperred p-2 w-3/4 mx-auto rounded-xl">
        <div className="bg-hypertan bg-opacity-20 text-hypertan text-2xl px-4 rounded-xl font-bold">
          From: <span className="text-white">{departureCity}</span>
        </div>
        <div className="bg-hypertan bg-opacity-20 text-hypertan text-2xl px-4 rounded-xl font-bold">
          To: <span className="text-white">{destinationCity}</span>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
