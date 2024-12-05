
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "XX",
  authDomain: "XX",
  projectId: "XX",
  storageBucket: "xx",
  messagingSenderId: "xx",
  appId: "xx",
  measurementId: "xx"
};
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
