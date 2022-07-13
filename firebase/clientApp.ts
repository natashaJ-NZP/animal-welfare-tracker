import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyDQqMbfGJULRYbz75Czr-10my9AoBj5P_s",
  authDomain: "animal-welfare-tracker.firebaseapp.com",
  projectId: "animal-welfare-tracker",
  storageBucket: "animal-welfare-tracker.appspot.com",
  messagingSenderId: "899385075966",
  appId: "1:899385075966:web:6c83c5f2e02ba0ff6a5daf"
});

const firestore = getFirestore();

export {firestore};