import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "cookies";
import { Reservation } from "../../components/account/Reservation.component";
import { getTrips, getUser } from "../../services/AzureUserService";
import { firebaseApp } from "../_app";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const auth = getAuth(firebaseApp);

const AccountPage = () => {
  
  const [user, loading, error] = useAuthState(auth);
  const [accountName, setAccountName] = useState("");
  // get a list of trips for the user using react-firebase-hooks to get from firestore
  // for now, we will use a sample user id value of "25F4FFB0-2505-4C7F-93E9-D87F8BBFB5AD"
  const [userTrips, userTripsLoading, userTripsError] = useCollection(
    query(collection(getFirestore(), 'trips'), where('userId', '==', '25F4FFB0-2505-4C7F-93E9-D87F8BBFB5AD')
    )
  );


  return (
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
                {userTrips && userTrips.docs.map((doc) => (
                    // <Reservation
                    //   key={index}
                    //   departureWindow={trip.podSchedule.departureWindow}
                    //   pricePaid={trip.podSchedule.price}
                    //   departureCity={trip.podSchedule.cityFrom}
                    //   destinationCity={trip.podSchedule.cityTo}
                    //   confirmationCode={
                    //     accountName.split(" ").pop() + trip.tripId
                    //   }
                    //   tripId={trip.tripId}
                    // />
                    <div key={doc.id}>
                      {JSON.stringify(doc.data())},{' '}
                    </div>
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
