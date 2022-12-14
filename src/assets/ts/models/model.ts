// FIREBASE - FIRESTORE - AUTHENTICATION - STORAGE
import { firebaseConfig, app, db, firebase, firestore, store, authentication, auth } from "../config";

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

// INPUTS
export const from = <NodeList>document.querySelectorAll(".from-input");
export const to = <NodeList>document.querySelectorAll(".to-input");

//
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
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        localStorage.setItem("loggedUser", JSON.stringify(data));
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
  localStorage.removeItem("loggedUser");
  location.href = "./index.html";
};
