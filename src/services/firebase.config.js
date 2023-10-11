// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhqPxeFT_3rPLEP1ZLBBqXmRNmBp8fvFA",
  authDomain: "react-auth-by.firebaseapp.com",
  projectId: "react-auth-by",
  storageBucket: "react-auth-by.appspot.com",
  messagingSenderId: "441158526388",
  appId: "1:441158526388:web:46746126a5d5a71dcbfee1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();