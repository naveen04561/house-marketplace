// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWkMHMpDUQqnue7XRbE42BplZqdPgT6bc",
  authDomain: "house-marketplace-app-n04561.firebaseapp.com",
  projectId: "house-marketplace-app-n04561",
  storageBucket: "house-marketplace-app-n04561.appspot.com",
  messagingSenderId: "525996752186",
  appId: "1:525996752186:web:e6ce341006d392549c6403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();