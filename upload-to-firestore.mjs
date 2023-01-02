// Import the necessary modules
import fs from "fs";
import admin from "firebase-admin";
// import serviceAccount
import serviceAccount from "./firebase-admin-private-key.json" assert { type: "json" };
import data from "./data/PodScheduleFromSQL.json" assert { type: "json" };

// Initialize the Firebase Admin SDK with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// // Add the data to the "cities" collection
// data.forEach((item) => {
//   admin.firestore().collection("cities").add({
//     id: item.id,
//     name: item.name,
//     longitude: item.longitude,
//     latitude: item.latitude,
//   });
// });

// // Add the data to the "trips" collection
// data.forEach((item) => {
//   admin.firestore().collection("trips").add({
//     id: item.id,
//     userId: item.userId,
//     podSchedule: item.podSchedule,
//     statusId: item.statusId,
//     dateCreated: admin.firestore.Timestamp.fromDate(new Date(item.dateCreated)),
//     dateUpdated: admin.firestore.Timestamp.fromDate(new Date(item.dateUpdated)),
//   });
// });

// // Add the data to the "trips" collection
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

// Add the data to the "users" collection
data.forEach((item) => {
  admin.firestore().collection("podSchedules").add({
    id: Number(item.id),
    cityFrom: Number(item.CityFrom),
    cityTo: Number(item.CityTo),
    departureWindow: item.DepartureWindow,
    price: Number(item.Price),
  });
});
