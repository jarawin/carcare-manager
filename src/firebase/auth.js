import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyA8MyLymkGz2hYLGModqwMdDEqU9EgkZko",
  authDomain: "booking-carcare.firebaseapp.com",
  projectId: "booking-carcare",
  storageBucket: "booking-carcare.appspot.com",
  messagingSenderId: "277236884335",
  appId: "1:277236884335:web:fb7af1f316d758fc817e9a",
  measurementId: "G-M26HZPSRWM",
});

export default firebaseConfig;
