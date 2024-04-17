// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6c6f5.firebaseapp.com",
  projectId: "real-estate-6c6f5",
  storageBucket: "real-estate-6c6f5.appspot.com",
  messagingSenderId: "471778768546",
  appId: "1:471778768546:web:076dccdf92e024238e49fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);