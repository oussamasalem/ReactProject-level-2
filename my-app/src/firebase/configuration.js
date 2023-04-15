// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCupmqcrnDVWCk2aZgippd2wwQb-l_nStY",
  authDomain: "react-lvl2.firebaseapp.com",
  projectId: "react-lvl2",
  storageBucket: "react-lvl2.appspot.com",
  messagingSenderId: "636243910386",
  appId: "1:636243910386:web:8c7e1538a14bb5e4c8fa6b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);