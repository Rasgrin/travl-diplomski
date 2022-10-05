// FIREBASE
import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import * as store from "firebase/storage";
import * as authentication from "firebase/auth";

export { firebase, firestore, store, authentication };

export const firebaseConfig: object = {
  apiKey: "AIzaSyClKsQ0RqE67VEGi0ly_cK2tHKmtQpNC08",
  authDomain: "diplomski-risuio.firebaseapp.com",
  projectId: "diplomski-risuio",
  storageBucket: "diplomski-risuio.appspot.com",
  messagingSenderId: "880031557579",
  appId: "1:880031557579:web:d283e5b95f01059c72384e",
};

export const app: any = firebase.initializeApp(firebaseConfig);
export const db: any = firestore.getFirestore(app);
export const auth: any = authentication.getAuth(app);

// DEFAULTS
if (localStorage.getItem("log") === null) localStorage.setItem("log", "false");
if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
if (localStorage.getItem("language") === null) localStorage.setItem("language", "EN");
