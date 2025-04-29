// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcawpcm2pcQBQ9Fc66vObSVB7Pv2mDm5Q",
  authDomain: "jianzin-70e07.firebaseapp.com",
  projectId: "jianzin-70e07",
  storageBucket: "jianzin-70e07.firebasestorage.app",
  messagingSenderId: "87103482263",
  appId: "1:87103482263:web:d890fe15ee7471cee1bcd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);