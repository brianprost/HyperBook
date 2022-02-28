import React, { useEffect, useState } from "react";
import Cookies from "cookies";
import { Reservation } from "../components/Reservation.component";
import { getTrips, getUser } from "../services/UserService";

const AccountPage = () => {
  const [accountName, setAccountName] = useState("");
  const [pods, setPods] = useState([]);
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
        const tempPods = [];
        res.data.forEach(item => {
          if(item.refStatus === "Booked") {
            tempPods.push(item.podSchedule);
          }
        });
        setPods(tempPods);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="account-bookings">
      <div className="relative mx-auto h-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24 ">
        <h2 className="mb-20 text-right text-4xl font-bold">
          Hi, <span className="font-extrabold text-red-500">{accountName}</span>
        </h2>
        <div className="border-b border-neutral-900 pb-5">
          <h3 className="text-xl font-bold leading-6 text-neutral-900">
            Your Trips
          </h3>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
            {
              pods.length >= 1 ?
                pods.map((item, index) => 
                  <Reservation
                    key={index}
                    date={item.departureWindow}
                    pricePaid={item.price}
                    departureCity={item.cityFrom}
                    finalDestination={item.cityTo}
                    confirmationCode="FF9OUG"
                    displayImage="./img/CHI-BNA.webp"
                  />
                )
              :
                "No trips have been currently booked!"
                //Write code for when no trips are there for the user
            }  
            {/* <Reservation
              date="Jun 08, 2021"
              pricePaid="$15"
              departureCity="New York"
              finalDestination="Philadelphia"
              confirmationCode="WFYC38"
              displayImage="./img/NYC-PHL.webp"
            />
            <Reservation
              date="Dec 24, 2020"
              pricePaid="$30"
              departureCity="Seattle"
              finalDestination="San Francisco"
              confirmationCode="6PDQBF"
              displayImage="./img/SEA-SFO.webp"
            /> */}
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
        destination: '/login',
        permanent: false,
      },
    };
  }else {
    return {
      props: {}, // will be passed to the page component as props
    }
  }  
}

export default AccountPage;
