// HELPER FUNCTIONS
import { downloadImg, findDocument, findDocumentCompound } from "../helpers";

class searchView {
  private from = <HTMLInputElement>document.querySelector(".from-input");
  private to = <HTMLInputElement>document.querySelector(".to-input");
  private searchContainer = <HTMLDivElement>document.querySelector(".search-container");

  private searchInputs = JSON.parse(<any>localStorage.getItem("search"));

  public async renderSearchResults() {
    try {
      this.from.setAttribute("value", this.searchInputs.from);
      this.to.setAttribute("value", this.searchInputs.to);

      if (location.href === "http://localhost:1234/flights.html") {
        let result = await findDocumentCompound("flights", "==", "from", this.searchInputs.from.toLowerCase(), "==", "to", this.searchInputs.to.toLowerCase());

        // if (!result) {
        //   result = await findDocument("flights", "==", "to", this.to.value.toLowerCase());
        // }

        this.searchContainer.innerHTML = "";

        result?.forEach(async (flight: any) => {
          try {
            const url: any = await downloadImg(`airlines/${flight.data().airline.toLowerCase()}.png`);
            const html: any = `
            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-light shadow">
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
                ${
                  flight.data().seats === undefined
                    ? `<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3 px-4" disabled>SOLD</button>`
                    : `<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3">RESERVE</button>`
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
}
export default new searchView();
