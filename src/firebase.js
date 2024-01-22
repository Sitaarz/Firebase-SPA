// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1_f_hytg1D3pPjBAsdTKKvbI1zOvNLw8",
  authDomain: "sklep-z-wycieczkami.firebaseapp.com",
  projectId: "sklep-z-wycieczkami",
  storageBucket: "sklep-z-wycieczkami.appspot.com",
  messagingSenderId: "282782838851",
  appId: "1:282782838851:web:b71f022ab7b5240b4ea4f6",
  measurementId: "G-16QTQPK7BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);