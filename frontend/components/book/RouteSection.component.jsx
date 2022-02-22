import React from "react";
import { RouteOptionCard } from "../components/book/RouteOptionCard.component";
import { getSchedules } from "../services/UserService";

const RouteSection = (props) => {
  const depCityId = props.depCityId;
  const desCityId = props.desCityId;
  //console.log(props);
  // getSchedules(depCity, desCity)
  // .then((res) => {
  //     if(res.status == 200 && res.statusText === 'OK') {
  //         setCookies("isAuthenticated", "true");
  //         setCookies("userId", res.data.userId);
  //         router.push("/book");
  //     }
  // })
  // .catch((err) => {
  //     setIsError(true);
  //     console.error(err);
  // })

  const routeOptions = [
    {
      tripID: "abc123",
      timeOfDay: "Morning",
      earliestPod: "05:00",
      latestPod: "10:25",
      tripPrice: "$25.00",
    },
    {
      tripID: "def456",
      timeOfDay: "Midday",
      earliestPod: "10:30",
      latestPod: "15:30",
      tripPrice: "$10.00",
    },
    {
      tripID: "ghi789",
      timeOfDay: "Evening",
      earliestPod: "14:00",
      latestPod: "21:30",
      tripPrice: "$15.00",
    },
  ];

  return (
    <section id="route-choices">
      {/* TODO center this instead of a large margin top. flex box be flexing weird rn... */}
      <div className="relative mx-auto mt-20 flex max-w-7xl items-center justify-evenly md:px-12 lg:px-16">
        <div className="relative space-y-12 overflow-hidden rounded-xl p-10 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {routeOptions.map((option, index) => (
            <RouteOptionCard
              key={option.tripID}
              timeOfDay={option.timeOfDay}
              earliestPod={option.earliestPod}
              latestPod={option.latestPod}
              tripPrice={option.tripPrice}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
