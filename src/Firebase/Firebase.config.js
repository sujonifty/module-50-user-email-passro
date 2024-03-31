// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdygQ3U4-vaye3JyEP87-kpe32A4Ozj88",
  authDomain: "email-password-auth-proj-5f62e.firebaseapp.com",
  projectId: "email-password-auth-proj-5f62e",
  storageBucket: "email-password-auth-proj-5f62e.appspot.com",
  messagingSenderId: "223869749240",
  appId: "1:223869749240:web:7443d9ba52c8d4dc7cb80d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;