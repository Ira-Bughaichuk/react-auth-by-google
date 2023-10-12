
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhqPxeFT_3rPLEP1ZLBBqXmRNmBp8fvFA",
  authDomain: "react-auth-by.firebaseapp.com",
  projectId: "react-auth-by",
  storageBucket: "react-auth-by.appspot.com",
  messagingSenderId: "441158526388",
  appId: "1:441158526388:web:46746126a5d5a71dcbfee1"
};

//for auth and login by email and password
// const firebaseConfig = {
//   apiKey: "AIzaSyBoyY7uARoFGczkzi1CyRJpcBWUwJevhsI",
//   authDomain: "newmobile-app.firebaseapp.com",
//   projectId: "newmobile-app",
//   storageBucket: "newmobile-app.appspot.com",
//   messagingSenderId: "210701285737",
//   appId: "1:210701285737:web:d9544856aac0129d01a5f8"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();






