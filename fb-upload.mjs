import { initializeApp } from "firebase/app";

// Read the JSON data from a file or fetch it from an API
const data = require("/Users/brian/Code/HyperBook/data/CitiesFromSQL.json");

firebase.initializeApp({
  apiKey: "AIzaSyAAG8RMBNasrxayyLJz5nPf7uvuHte-RPc",
  authDomain: "hyperbook-7fe27.firebaseapp.com",
  projectId: "hyperbook-7fe27",
  storageBucket: "hyperbook-7fe27.appspot.com",
  messagingSenderId: "365688157040",
  appId: "1:365688157040:web:40763da39cd0e07bef95b5",
  measurementId: "G-WN16KB6BGK",
});

// Initialize the Cloud Firestore API
const firestore = firebase.firestore();

// Add the data to the "cities" collection
data.forEach(async (item) => {
  await firestore.collection("cities").add({
    id: item.id,
    name: item.name,
    longitude: item.longitude,
    latitude: item.latitude,
  });
});
