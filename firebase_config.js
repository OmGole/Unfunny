import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA11zojt5-skk7GkzMOewermfeiFKyYNQg",
  authDomain: "unfunny-ac09c.firebaseapp.com",
  projectId: "unfunny-ac09c",
  storageBucket: "unfunny-ac09c.appspot.com",
  messagingSenderId: "539687919981",
  appId: "1:539687919981:web:09ef80aca00da36598fa64",
  measurementId: "G-G64RXXEFZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);