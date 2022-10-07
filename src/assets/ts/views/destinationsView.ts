// HELPER FUNCTIONS
import { DEFAULT_LOCATION } from "../config";
import { downloadImg, findCollection } from "../helpers";

class destinationsView {
  private destinationsContainer = <HTMLDivElement>document.querySelector(".destinations-container");
  private searchInputs = JSON.parse(<any>localStorage.getItem("search"));

  public async renderDestinations() {
    const collectionSnapshot = await findCollection("destinations");

    collectionSnapshot.forEach(async (doc) => {
      let url: any = await downloadImg(`destinations/${doc.data().place.toLowerCase()}.jpg`);

      if (!url) {
        url = await downloadImg("destinations/default.jpg");
      }
      console.log(doc.data().place);
      const html = `
        <div class="col-lg-3 col-md-5 col-sm-6 d-flex flex-column mb-5">
            <img class="destination-card img-fluid" src="${url}" alt=""  style="cursor: pointer"  id="${doc.data().place}" />
            <div class="d-flex flex-column">
                <p class="fs-2 fw-normal mt-3 m-0">${doc.data().place}</p>
                <p class="fs-4 fw-lighter mt-1 mb-0">${doc.data().country}</p>
            </div>
        </div>
    `;
      this.destinationsContainer.insertAdjacentHTML("afterbegin", html);
    });
    document.addEventListener("click", (e: any) => {
      const card = <HTMLButtonElement>e.target;
      if (card.classList.contains("destination-card")) {
        this.searchInputs.from = DEFAULT_LOCATION;
        this.searchInputs.to = e.target.id;
        console.log(e.target.id);

        localStorage.setItem("search", JSON.stringify(this.searchInputs));

        location.href = "http://localhost:1234/flights.html";
      }
    });
  }
}
export default new destinationsView();
