// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7NHN-sQx95g2uuNRQSrrUSd1Ycii59nQ",
  authDomain: "journal-app-3d410.firebaseapp.com",
  projectId: "journal-app-3d410",
  storageBucket: "journal-app-3d410.appspot.com",
  messagingSenderId: "341129443324",
  appId: "1:341129443324:web:f22daa0dc19c5cfa80a479"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const AuthApp= getAuth( FirebaseApp );
export const FirebaseBD = getFirestore(FirebaseApp)