// Import the necessary modules
import fs from "fs";
import admin from "firebase-admin";
// import serviceAccount
import serviceAccount from "./firebase-admin-private-key.json" assert { type: "json" };

// Initialize the Firebase Admin SDK with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// // Add the data to the "cities" collection
// import data from "./data/CitiesFromSQL.json" assert { type: "json" };
// for (let item of data) {
//   let docData = {
//     "name": item.name,
//     "longitude": Number(item.longitude),
//     "latitude": Number(item.latitude),
//   }
  
//   admin
//     .firestore()
//     .collection("citiesNew")
//     .doc(docData, )
// }

// // Add the data to the "trips" collection
// import data from "./data/TripsFromSQL.json" assert { type: "json" };
// data.forEach((item) => {
//   admin
//     .firestore()
//     .collection("trips")
//     .add({
//       id: Number(item.id),
//       userId: item.userId,
//       podSchedule: Number(item.podSchedule),
//       statusId: Number(item.statusId),
//       dateCreated: admin.firestore.Timestamp.fromDate(
//         new Date(item.dateCreated)
//       ),
//       dateUpdated: admin.firestore.Timestamp.fromDate(
//         new Date(item.dateUpdated)
//       ),
//     });
// });

// // Add the data to the "users" collection
// data.forEach((item) => {
//   admin.firestore().collection("users").add({
//     id: item.id,
//     email: item.Email,
//     password: item.Password,
//     firstName: item.FirstName,
//     lastName: item.LastName,
//     addressLine1: item.AddressLine1,
//     addressLine2: item.AddressLine2,
//     city: item.City,
//     state: item.State,
//     zip: item.Zip,
//     phone: item.Phone,
//   });
// });

// // Add the data to the "users" collection
// data.forEach((item) => {
//   admin.firestore().collection("podSchedules").add({
//     id: Number(item.id),
//     cityFrom: Number(item.CityFrom),
//     cityTo: Number(item.CityTo),
//     departureWindow: item.DepartureWindow,
//     price: Number(item.Price),
//   });
// });

// add the data to the "users" collection
import data from "./data/UserWithTrips.json" assert { type: "json" };
import podSchedules from "./data/PodScheduleFromSQL.json" assert { type: "json" };
import cities from "./data/CitiesFromSQL.json" assert { type: "json" };

for (let item of data) {
  let docData = {
    email: item.email,
    password: item.password,
    firstName: item.firstName,
    lastName: item.lastName,
    addressLine1: item.addressLine1,
    addressLine2: item.addressLine2,
    city: item.city,
    state: item.state,
    zip: item.zip,
    phone: item.phone,
    trips: item.trips.map((trip) => ({
      tripId: Number(trip.tripId),
      podSchedule: getPodSchedule(trip.podSchedule),
      statusId: Number(trip.statusId),
      dateCreated: admin.firestore.Timestamp.fromDate(
        new Date(trip.dateCreated)
      ),
      dateUpdated: admin.firestore.Timestamp.fromDate(
        new Date(trip.dateUpdated)
      ),
    })),
  };
  // set the document
  await admin
    .firestore()
    .collection("users")
    .doc(item.userId)
    .set(docData);
}

function getPodSchedule(podScheduleId) {
  let podSchedule = podSchedules.find(
    (podSchedule) => podSchedule.id === podScheduleId
  );
  // get city names for CityFrom and CityTo from json and set those values
  podSchedule.cityFrom = cities.find(
    (city) => city.id === podSchedule.cityFrom
  ).name;
  podSchedule.cityTo = cities.find(
    (city) => city.id === podSchedule.cityTo
  ).name;
  podSchedule.price = Number(podSchedule.price);
  return podSchedule;
}
