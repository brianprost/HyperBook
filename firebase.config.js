// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAG8RMBNasrxayyLJz5nPf7uvuHte-RPc",
  authDomain: "hyperbook-7fe27.firebaseapp.com",
  projectId: "hyperbook-7fe27",
  storageBucket: "hyperbook-7fe27.appspot.com",
  messagingSenderId: "365688157040",
  appId: "1:365688157040:web:40763da39cd0e07bef95b5",
  measurementId: "G-WN16KB6BGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);