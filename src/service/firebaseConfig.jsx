// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFNHjshd9gM31smaK27hAqbNojDmgpJ1Y",
  authDomain: "aitrip-77811.firebaseapp.com",
  projectId: "aitrip-77811",
  storageBucket: "aitrip-77811.firebasestorage.app",
  messagingSenderId: "118665343481",
  appId: "1:118665343481:web:013e8ce7e606d2e19fcd28",
  measurementId: "G-RVKXBDFDMW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);