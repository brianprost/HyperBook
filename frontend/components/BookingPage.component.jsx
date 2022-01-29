import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CityOption } from "./CityOption.component";

export const BookingPage = () => {
  const [cities, setCities] = useState(null);
  const [isLoading, setLoading] = useState(false);

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
        <h2 className="text-6xl font-Montserrat text-black text-center mb-20">
          Destinations
        </h2>
        <div className="grid w-full gap-12 mx-auto lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              href={"/#route-choices"}
              key={city.longitude + city.longitude}
            >
              <a>
                <CityOption
                  city={city.city}
                  key={city.longitude + city.longitude}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
