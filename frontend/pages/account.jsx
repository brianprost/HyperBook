import React, { useEffect, useState } from "react";
import Cookies from "cookies";
import { Reservation } from "../components/Reservation.component";
import { getTrips, getUser } from "../services/UserService";

const AccountPage = () => {
  const [accountName, setAccountName] = useState("");
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    let id = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      .split("=")[1];
    getUser(id)
      .then((res) => {
        setAccountName(
          res.data.firstName.toUpperCase() +
            " " +
            res.data.lastName.toUpperCase()
        );
      })
      .catch((err) => {
        console.error(err);
      });
    getTrips(id)
      .then((res) => {
        const tempTrips = [];
        res.data.forEach((item) => {
          if (item.refStatus === "Booked") {
            tempTrips.push(item);
          }
        });
        setTrips(tempTrips);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="account-bookings">
      <div className="relative mx-auto h-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24 ">
        <h2 className="mb-20 text-right text-4xl font-bold text-indigo-500">
          Hi, <span className="font-extrabold text-red-500">{accountName}</span>
        </h2>
        <div className="border-b border-indigo-700 pb-5">
          <h3 className="text-xl font-bold leading-6 text-indigo-500">
            Your Trips
          </h3>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
            {
              trips.length >= 1
                ? trips.map((trip, index) => (
                    <Reservation
                      key={index}
                      departureWindow={trip.podSchedule.departureWindow}
                      pricePaid={trip.podSchedule.price}
                      departureCity={trip.podSchedule.cityFrom}
                      destinationCity={trip.podSchedule.cityTo}
                      confirmationCode={accountName.split(' ').pop() + trip.tripId}
                    />
                  ))
                : "No trips have been currently booked!"
              //Write code for when no trips are there for the user
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const cookies = Cookies(context.req, context.res);
  const isUser = cookies.get("isAuthenticated") ? true : false;
  //const isUser = localStorage.getItem("isAuthenticated");
  if (!isUser || isUser === "false") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default AccountPage;
