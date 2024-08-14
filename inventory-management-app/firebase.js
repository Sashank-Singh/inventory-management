// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADNH9BwWy5zj-VFP2ly5hYnWM6bUTTYUI",
  authDomain: "inventory-management-44943.firebaseapp.com",
  projectId: "inventory-management-44943",
  storageBucket: "inventory-management-44943.appspot.com",
  messagingSenderId: "328153224420",
  appId: "1:328153224420:web:b823b2c7614b528cc688f1",
  measurementId: "G-6DZEX5LFPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}