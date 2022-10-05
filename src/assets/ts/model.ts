import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import * as authentication from "firebase/auth";

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyClKsQ0RqE67VEGi0ly_cK2tHKmtQpNC08",
  authDomain: "diplomski-risuio.firebaseapp.com",
  projectId: "diplomski-risuio",
  storageBucket: "diplomski-risuio.appspot.com",
  messagingSenderId: "880031557579",
  appId: "1:880031557579:web:d283e5b95f01059c72384e",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);
const auth = authentication.getAuth(app);

// CREDENTIALS - LOGIN
const logEmailIn = <HTMLInputElement>document.querySelector(".log-email");
const logPasswordIn = <HTMLInputElement>document.querySelector(".log-password");

// CREDETIALS - REGISTER
const regEmailIn = <HTMLInputElement>document.querySelector(".reg-email");
const regPasswordIn = <HTMLInputElement>document.querySelector(".reg-password");
const regCPasswordIn = <HTMLInputElement>document.querySelector(".reg-cpassword");

// BUTTONS
export const logBtn = <HTMLButtonElement>document.querySelector(`.log-btn`);
export const regBtn = <HTMLButtonElement>document.querySelector(`.reg-btn`);

export const login = async () => {
  const email = logEmailIn?.value;
  const password = logPasswordIn?.value;

  authentication
    .signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
      console.log({ success: `User logged succesfuly.` });
      localStorage.setItem("log", "true");
    })
    .then(() => {
      const q = firestore.query(firestore.collection(db, "users"), firestore.where("email", "==", email));
      return firestore.getDocs(q);
    })
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        localStorage.setItem("loggedUser", JSON.stringify(doc.data()));
      });
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
    authentication
      .createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        console.log({ success: `User registered succesfuly.` });
      })
      .then(() => {
        const data = {
          firstName: "",
          lastName: "",
          email: email,
          pfp: "default-pfp.png",
          cart: [],
          reservations: [],
        };

        const newUser = firestore.doc(firestore.collection(db, "users"));
        firestore.setDoc(newUser, data);
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
