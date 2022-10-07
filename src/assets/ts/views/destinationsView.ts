// HELPER FUNCTIONS
import { downloadImg, findCollection } from "../helpers";

class destinationsView {
  private destinationsContainer = <HTMLDivElement>document.querySelector(".destinations-container");

  public async renderDestinations() {
    const collectionSnapshot = await findCollection("destinations");
    collectionSnapshot.forEach(async (doc) => {
      let url: any = await downloadImg(`destinations/${doc.data().place.toLowerCase()}.jpg`);

      if (!url) {
        url = await downloadImg("destinations/default.jpg");
      }

      const html = `
        <div class="col-lg-3 col-md-5 col-sm-6 d-flex flex-column mb-5">
            <a href="#"><img class="img-fluid" src="${url}" alt="" /></a>
            <div class="d-flex flex-column">
                <p class="fs-2 fw-normal mt-3 m-0">${doc.data().place}</p>
                <p class="fs-4 fw-lighter mt-1 mb-0">${doc.data().country}</p>
            </div>
        </div>
    `;
      this.destinationsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}
export default new destinationsView();
