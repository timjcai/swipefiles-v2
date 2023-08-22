// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from '@firebase/firestore'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebase_APIKey,
  authDomain: import.meta.env.VITE_firebase_AuthDomain,
  projectId: import.meta.env.VITE_firebase_ProjectId,
  storageBucket: import.meta.env.VITE_firebase_StorageBucket,
  messagingSenderId: import.meta.env.VITE_firebase_MessagingSenderId,
  appId: import.meta.env.VITE_firebase_AppId,
  measurementId: import.meta.env.VITE_firebase_MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

// Initialise Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const providerGoogle = new GoogleAuthProvider();

export const providerFacebook = new FacebookAuthProvider();