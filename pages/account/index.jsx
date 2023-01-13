import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "cookies";
import { Reservation } from "../../components/account/Reservation.component";
import { getTrips, getUser } from "../../services/AzureUserService";
import { firebaseApp } from "../_app";
import { getFirestore, collection, query, where, getDocs, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection, useDocument, useDocumentData } from 'react-firebase-hooks/firestore';
import Loading from "../../components/Loading.component.jsx"

const auth = getAuth(firebaseApp);

const AccountPage = () => {
  // for now, we will use a sample user id value of "D7A45952-E911-4892-A0C2-C424A43EB270"
  
  const [user, loading, error] = useAuthState(auth);
  const [accountName, setAccountName] = useState("");
  const [userAccount, userAccountLoading, userAccountError] = 
    useDocumentData(
      doc(
        getFirestore(firebaseApp),
        "users",
        "D7A45952-E911-4892-A0C2-C424A43EB270"
      ),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }

    );

  if (userAccountLoading) {
    return <Loading />
  }

  return (
    console.log(userAccount),
    <section id="account-bookings">
      <div className="relative mx-auto h-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24 ">
        <h2 className="mb-4 text-right text-4xl font-bold text-indigo-500">
          Hi, <span className="font-extrabold text-red-500">{user && user.email}</span>
        </h2>
        <Link href={`/account/edit`}>
          <a>
            <h3 className="mb-16 text-right font-bold text-indigo-500 underline transition duration-100 ease-in-out hover:text-red-500">
              Edit account information
            </h3>
          </a>
        </Link>

        <div className="border-b border-indigo-700 pb-5">
          <h3 className="text-xl font-bold leading-6 text-indigo-500">
            Your Trips
          </h3>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {/* {userAccount && JSON.stringify(userAccount.trips, null, 4)} */}
                {userAccount && userAccount.trips.map((trip, index) => (
                    <Reservation
                      key={index}
                      departureWindow={trip.podSchedule.departureWindow}
                      pricePaid={trip.podSchedule.price}
                      departureCity={trip.podSchedule.cityFrom}
                      destinationCity={trip.podSchedule.cityTo}
                      confirmationCode={
                        "hyper" + trip.tripId
                      }
                      // confirmationCode={
                      //   accountName.split(" ").pop() + trip.tripId
                      // }
                      tripId={trip.tripId}
                    />
                ))
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
  // if (!isUser || isUser === "false") {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default AccountPage;
