import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuW4wKQw1-Oku-3uwwFNXA1TG5YMu2QMY",
  authDomain: "idea-hub-15e71.firebaseapp.com",
  projectId: "idea-hub-15e71",
  storageBucket: "idea-hub-15e71.appspot.com",
  messagingSenderId: "808624141509",
  appId: "1:808624141509:web:02ebbfac0e7ea5d6bc6cac",
  measurementId: "G-Z4NR03RJ3J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});

export { app, auth };
