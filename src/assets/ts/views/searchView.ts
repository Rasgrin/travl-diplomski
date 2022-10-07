// HELPER FUNCTIONS
import { downloadImg, findDocumentById, findDocumentCompound, updateDocument } from "../helpers";

class searchView {
  private from = <HTMLInputElement>document.querySelector(".from-input");
  private to = <HTMLInputElement>document.querySelector(".to-input");
  private searchContainer = <HTMLDivElement>document.querySelector(".search-container");
  private searchHash = <HTMLDivElement>document.querySelector(".search-hash");

  private searchInputs = JSON.parse(<any>localStorage.getItem("search"));
  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderSearchResults() {
    try {
      this.from.setAttribute("value", this.searchInputs.from);
      this.to.setAttribute("value", this.searchInputs.to);

      if (location.href === "http://localhost:1234/flights.html") {
        let result = await findDocumentCompound("flights", "==", "from", this.searchInputs.from.toLowerCase(), "==", "to", this.searchInputs.to.toLowerCase());

        this.searchHash.textContent = `${this.searchInputs.from.toUpperCase()} - ${this.searchInputs.to.toUpperCase()}`;
        this.searchContainer.innerHTML = "";

        result?.forEach(async (flight: any) => {
          try {
            const url: any = await downloadImg(`airlines/${flight.data().airline.toLowerCase()}.png`);
            const html: any = `
            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-white shadow">
                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                    <img class="mx-5 img-fluid my-auto" src="${url}" alt="" style="width: 100px" />
                    <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${flight.data().date}</p>
                    <p class="text-center my-auto fs-4 mx-5">${flight.data().time}</p>
                </div>
                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                    <p class="text-center my-auto fs-4 mx-5">${flight.data().airports}</p>
                    <p class="text-center my-auto fs-4 me-lg-5 me-md-auto me-sm-auto ms-lg-5 ms-md-5 ms-sm-5">${flight.data().seats === undefined ? "SOLD OUT" : flight.data().seats} ${
              flight.data().seats > 1 && flight.data().seats !== undefined ? "SEATS" : ""
            }</p>
                    <p class="text-center my-auto fs-4 mx-5">${flight.data().price}</p>
                    
                </div>
                <input type="number" class="ticket-quantity text-center mx-5 my-auto" value="1" style="width:50px; height:40px"/>
                ${
                  flight.data().seats === undefined
                    ? `<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3 px-4" disabled>SOLD</button>`
                    : `<button type="button" class="reserve-btn btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3" id="${flight.id}">RESERVE</button>`
                }

            </div>
            `;
            this.searchContainer.insertAdjacentHTML("afterbegin", html);
          } catch (err) {}
        });
      }
    } catch (err) {}
  }

  public addSearchHandler(inputs: any, ev: string) {
    inputs.forEach((input: HTMLInputElement, i: number) =>
      input.addEventListener(ev, () => {
        if (i == 0) this.searchInputs.from = input.value;
        if (i == 1) this.searchInputs.to = input.value;

        localStorage.setItem("search", JSON.stringify(this.searchInputs));
        this.searchContainer = <HTMLDivElement>document.querySelector(".search-container");
        if (location.href === "http://localhost:1234/flights.html") this.renderSearchResults();
      })
    );
  }

  public async addReserveHandler() {
    try {
      const cartArr = [];
      let exists = false;
      const resultUser: any = await findDocumentById("users", this.userData.id);
      const user = resultUser.data();

      user.cart.forEach((reservation: never) => {
        cartArr.push(reservation);
      });

      document.addEventListener("click", async (e: any) => {
        const btn = <HTMLButtonElement>e.target;
        const quantity = Number((<any>btn.previousElementSibling)?.value);
        if (btn.classList.contains("reserve-btn")) {
          const resultRes = await findDocumentById("flights", e.target.id);
          const res: any = { ...resultRes.data(), id: resultRes.id };
          console.log(res);
          cartArr.map((reservation: any) => {
            if (reservation.id === res.id) {
              reservation.seats = String(Number(reservation.seats) + quantity);
              exists = true;
            }
          });

          if (exists === false) {
            res.seats = quantity;
            cartArr.push(<never>res);
          }

          updateDocument("users", resultUser.id, {
            cart: cartArr,
          });
          this.userData.cart = cartArr;
          localStorage.setItem("loggedUser", JSON.stringify(this.userData));
        }
      });
    } catch (err) {}
  }
}
export default new searchView();
