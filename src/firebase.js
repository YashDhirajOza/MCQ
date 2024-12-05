// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpC4uXc-1xAGlQ0BQ9e6pzhE0S5JT1u2Q",
  authDomain: "mcq-webapp.firebaseapp.com",
  projectId: "mcq-webapp",
  storageBucket: "mcq-webapp.firebasestorage.app",
  messagingSenderId: "219388355145",
  appId: "1:219388355145:web:1d118821c1f589c37e1598",
  measurementId: "G-2WFT9WQ4X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);