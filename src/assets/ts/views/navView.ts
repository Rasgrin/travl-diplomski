import * as store from "firebase/storage";
import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";

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
const storage = store.getStorage(app);
const db = firestore.getFirestore(app);

export class Navbar {
  private userDropdown = <HTMLButtonElement>document.querySelector(".user-dropdown");
  private signinBtn = <HTMLButtonElement>document.querySelector(".signin-btn");
  private pfp = <HTMLImageElement>document.querySelector(".nav-pfp");
  private dropEmail = <HTMLButtonElement>document.querySelector(".drop-email");
  private profilePfp = <HTMLImageElement>document.querySelector(".profile-pfp");
  private profileName = <HTMLImageElement>document.querySelector(".profile-name");
  private profileEmail = <HTMLImageElement>document.querySelector(".profile-email");

  public renderNav() {
    const userData = <any>JSON.parse(<any>localStorage.getItem("loggedUser"));
    if (localStorage.getItem("log") === "true") {
      this.userDropdown.classList.remove("d-none");
      this.signinBtn.classList.add("d-none");
      this.dropEmail.textContent = userData.email;

      const storage = store.getStorage();
      store
        .getDownloadURL(store.ref(storage, `pfp/${userData.pfp}`))
        .then((url) => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            const blob = xhr.response;
          };
          xhr.open("GET", url);
          xhr.send();

          this.pfp?.setAttribute("src", url);
          this.pfp.style.borderRadius = "20px";
        })
        .catch((error) => {
          // Handle any errors
        });
    } else {
      this.userDropdown.classList.add("d-none");
      this.signinBtn.classList.remove("d-none");
    }
  }

  public renderProfile() {
    let userData = <any>JSON.parse(<any>localStorage.getItem("loggedUser"));
    let reservationsMod = userData.reservations;
    let newReservations = [];
    const storage = store.getStorage();
    store
      .getDownloadURL(store.ref(storage, `pfp/${userData.pfp}`))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        this.profilePfp?.setAttribute("src", url);
        this.profilePfp.style.borderRadius = "100px";

        this.profileName.textContent = `${userData.firstName} ${userData.lastName}`;
        this.profileEmail.textContent = userData.email;
      })
      .then(() => {
        const q = firestore.query(firestore.collection(db, "users"), firestore.where("email", "==", userData.email));
        return firestore.getDocs(q);
      })
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          localStorage.setItem("loggedUser", JSON.stringify(doc.data()));
        });
      })
      .then(() => {
        const storage = store.getStorage();
        let html;
        userData.reservations.forEach((reservation, i) => {
          store.getDownloadURL(store.ref(storage, `pfp/${reservation.airline}.png`)).then((url) => {
            console.log(reservation);
            const xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open("GET", url);
            xhr.send();

            html = `
            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-light shadow">
              <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                <img class="mx-5 img-fluid my-auto" src="${url}" alt="airway" style="width: 100px" />
                <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${reservation.date}</p>
                <p class="text-center my-auto fs-4 mx-5">${reservation.time}</p>
              </div>
              <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                <p class="text-center my-auto fs-4 mx-5">${reservation.airports}</p>
                <p class="text-center my-auto fs-4 me-lg-5 me-md-auto me-sm-auto ms-lg-5 ms-md-5 ms-sm-5">${reservation.seats} TICKET/S</p>
              </div>
              <button type="button" id="${i}" class="btn refund-btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3">REFUND</button>
            </div>
            `;

            document.querySelector(".all-flights")?.insertAdjacentHTML("afterbegin", html);
            document.querySelectorAll(".refund-btn").forEach((btn) => {
              btn.addEventListener("click", (e: any) => {
                const id = e.target.id;
                reservationsMod = userData.reservations;
                newReservations = reservationsMod.splice(id, 1);

                userData.reservations = newReservations;
                localStorage.setItem("loggedUser", JSON.stringify(userData));
              });
            });
          });
        });
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  // LOGIN HANDLING
  public addLoginHandler(btn: HTMLButtonElement, evs: string[], handler: any) {
    evs.forEach((ev: any, i: number) => {
      i === 0
        ? btn.addEventListener(ev, handler)
        : document.addEventListener(ev, (e: any) => {
            e.key === "Enter" && handler();
          });
    });
  }

  // REGISTER HANDLING
  public addRegisterHandler(btn: HTMLButtonElement, evs: string[], handler: any) {
    evs.forEach((ev: any, i: number) => {
      i === 0
        ? btn.addEventListener(ev, handler)
        : document.addEventListener(ev, (e: any) => {
            e.key === "Enter" && handler();
          });
    });
  }

  // LOGOUT HANDLING
  public addLogoutHandler(ev: any, handler: any) {
    document.addEventListener(ev, (e: any) => {
      const btn = <HTMLButtonElement>e.target;
      if (btn.classList.contains("logout-btn")) {
        handler();
      }
    });
  }
}

export default new Navbar();
