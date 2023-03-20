import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC23BeeDNEB9ul12usBf-Ih2e-8D0lWDZc",
  authDomain: "hotel-dashboard-bb754.firebaseapp.com",
  projectId: "hotel-dashboard-bb754",
  storageBucket: "hotel-dashboard-bb754.appspot.com",
  messagingSenderId: "399938185851",
  appId: "1:399938185851:web:ce12ff5c42e3fb22fcd0de",
  measurementId: "G-XF2QFY4J2M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);