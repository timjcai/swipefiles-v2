// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from '@firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZRWQB-2gkR5Q2Ni8H-Aoli_PmFCdm2eQ",
  authDomain: "swipefiles-4efde.firebaseapp.com",
  projectId: "swipefiles-4efde",
  storageBucket: "swipefiles-4efde.appspot.com",
  messagingSenderId: "401831916609",
  appId: "1:401831916609:web:8f7fc48196922ea22602c0",
  measurementId: "G-LY5TSJ41EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})