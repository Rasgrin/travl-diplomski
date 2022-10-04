import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyClKsQ0RqE67VEGi0ly_cK2tHKmtQpNC08",
  authDomain: "diplomski-risuio.firebaseapp.com",
  projectId: "diplomski-risuio",
  storageBucket: "diplomski-risuio.appspot.com",
  messagingSenderId: "880031557579",
  appId: "1:880031557579:web:d283e5b95f01059c72384e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// CREDENTIALS - LOGIN
const logEmailIn: any = document.querySelector(".log-email");
const logPasswordIn: any = document.querySelector(".log-password");

// CREDETIALS - REGISTER
const regEmailIn: any = document.querySelector(".reg-email");
const regPasswordIn: any = document.querySelector(".reg-password");
const regCPasswordIn: any = document.querySelector(".reg-cpassword");

// BUTTONS
export const logBtn = document.querySelector(`.log-btn`);
export const regBtn = document.querySelector(`.log-btn`);

export const login = () => {
  const email = logEmailIn?.value;
  const password = logPasswordIn?.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
      console.log({ success: `User logged succesfuly.` });
      localStorage.setItem("log", "true");
      location.href = "./index.html";
    })
    .catch((err) => {
      console.log({ error: err.message });
      console.log(err.code);
    });
};

export const register = () => {
  const email = regEmailIn?.value;
  const password = regPasswordIn?.value;
  const cPassword = regCPasswordIn?.value;

  if (password === cPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        console.log({ success: `User registered succesfuly.` });
      })
      .catch((err) => {
        console.log({ error: err.message });
        console.log(err.code);
      });
  }
};

export const logout = () => {
  localStorage.setItem("log", "false");
  location.href = "./index.html";
};
