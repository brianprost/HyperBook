import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
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
  const [titleText, setTitleText] = useState("Destinations");
  const [tooltipContent, setTooltipContent] = useState("");

  const dotAvailableColor = "#c42217";
  // const dotSelectedColor = "#2b46bd";
  const dotSelectedColor = "#891810";
  const dotNotAvailableColor = "#9B8581";

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
      <div className="mt-32 flex flex-col justify-center items-center text-n">
        <img
          src="/img/hyperbook-icon.webp"
          alt="hyperbook logo spin"
          className="h-52 w-52 animate-pulse animate-infinite"
        />
        <p className="mt-12 text-4xl select-none font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-black hover:to-hyperred">
          Loading{" "}
          <span className="inline-block animate-tada animate-infinite bg-clip-text text-transparent bg-gradient-to-r from-hyperred to-black">
            ...
          </span>
        </p>
      </div>
    );
  if (!cities) return <p>No Cities :(</p>;

  return (
    <section id="book" className="flex flex-col h-5/6 justify-between">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl mb-auto">
        <h2 className="text-6xl font-bold text-black text-center">
          {titleText}
        </h2>
        <div className="-my-10">
          <div className="w-5/6 mx-auto">
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
                        stroke="#2b46bd"
                        geography={geo}
                        fill="#f2eddb"
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
                      setTitleText(`${city.city} to `);
                    } else if (!destinationCity) {
                      setDestinationCity(city.city);
                      setTitleText(`${titleText + city.city}`);
                      await delay(800);
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
        <ReactTooltip>{tooltipContent}</ReactTooltip>
      </div>
    </section>
  );
};

export default BookingPage;
