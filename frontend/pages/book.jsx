import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import { setCookies } from "cookies-next";
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
  const [departureCityId, setDepartureCityId] = useState(false);
  const [destinationCityId, setDestinationCityId] = useState(false);
  const [titleText, setTitleText] = useState("Destinations");
  const [tooltipContent, setTooltipContent] = useState("");

  // TODO eventually don't hard code this right here
  const dotAvailableColor = "#f05454";
  const dotSelectedColor = "#c04343";
  const dotNotAvailableColor = "#7a7e83";

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

  return (
    <section id="book" className="flex h-5/6 flex-col justify-between">
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
                  key={city.city}
                  coordinates={[city.longitude, city.latitude]}
                  onMouseEnter={() => {
                    setTooltipContent(`${city.city}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={async () => {
                    // there's probably a better place for this
                    if (destinationCity && departureCity) {
                      console.log("cities have already been selected");
                    } else if (!departureCity) {
                      setDepartureCity(city.city);
                      setDepartureCityId(city.id);
                      setTitleText(`${city.city} to `);
                    } else if (!destinationCity) {
                      setDestinationCityId(city.id);
                      setDestinationCity(city.city);
                      setTitleText(`${titleText + city.city}`);
                      await delay(1000);
                      console.log(`destinationCity set to: ${city.city}`);
                      console.log(city.id);
                      console.log(destinationCityId);
                      setCookies("departureCityId", departureCityId);
                      setCookies("destinationCityId", destinationCityId);
                      router.push("/route-choices");
                    }
                  }}
                  style={{
                    default: {
                      fill: dotAvailableColor,
                      outline: "none",
                    },
                    hover: {
                      fill: dotSelectedColor,
                      outline: "none",
                    },
                    pressed: {
                      fill: dotSelectedColor,
                      outline: "none",
                    },
                    // TODO can't get button to stay the selected color
                    active: {
                      fill: dotSelectedColor,
                      outline: "none",
                    },
                  }}
                >
                  <circle r={6} strokeWidth={4} />
                </Marker>
              ))}
              {/* eventually a line will go here: */}
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
    </section>
  );
};

export default BookingPage;
