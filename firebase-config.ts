// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";



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

// const firebaseConfig = {
//   apiKey: import.meta.env.firebase_APIKey,
//   authDomain: import.meta.env.firebase_AuthDomain,
//   projectId: import.meta.env.firebase_ProjectId,
//   storageBucket: import.meta.env.firebase_StorageBucket,
//   messagingSenderId: import.meta.env.firebase_MessagingSenderId,
//   appId: import.meta.env.firebase_AppId,
//   measurementId: import.meta.env.firebase_MeasurementId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

// Initialise Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const providerGoogle = new GoogleAuthProvider();