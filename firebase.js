// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaBghuCXLO6WnosGsYmh8ofmkXqZ0ec-0",
  authDomain: "fir-p1-62042.firebaseapp.com",
  projectId: "fir-p1-62042",
  storageBucket: "fir-p1-62042.appspot.com",
  messagingSenderId: "656195154927",
  appId: "1:656195154927:web:1cc3629d2a47495ab17c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)