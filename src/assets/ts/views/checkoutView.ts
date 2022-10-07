import { downloadImg, findDocument, findDocumentById, findDocumentCompound, updateDocument } from "../helpers";

class checkoutView {
  private checkoutContainer = <HTMLDivElement>document.querySelector(".checkout-container");

  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderCheckout() {
    try {
      let resultUser = await findDocumentById("users", this.userData.id);
      const user = resultUser.data();

      this.checkoutContainer.innerHTML = "";

      user?.cart?.forEach(async (ticket: any) => {
        try {
          const url: any = await downloadImg(`airlines/${ticket.airline.toLowerCase()}.png`);
          const html: any = `
            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-white shadow">
                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                    <img class="mx-5 img-fluid my-auto" src="${url}" alt="" style="width: 100px" />
                    <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${ticket.date}</p>
                    <p class="text-center my-auto fs-4 mx-5">${ticket.time}</p>
                </div>
                <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                    <p class="text-center my-auto fs-4 mx-5">${ticket.airports}</p>
                    <p class="text-center my-auto fs-4 me-lg-5 me-md-auto me-sm-auto ms-lg-5 ms-md-5 ms-sm-5">${ticket.seats === undefined ? "SOLD OUT" : ticket.seats} ${ticket.seats > 1 && ticket.seats !== undefined ? "SEATS" : ""}</p>
                    <p class="text-center my-auto fs-4 mx-5">${ticket.price} x ${ticket.seats}</p>
                    
                </div>
                ${
                  ticket.seats === undefined
                    ? `<button type="button" class="btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3 px-4" disabled>SOLD</button>`
                    : `<button type="button" class="remove-btn btn btn-riot-red fs-5 ms-lg-auto me-lg-5 mx-lg-0 mx-md-5 mx-sm-5 mt-lg-0 mt-md-3 mt-sm-3" id="${ticket.id}">REMOVE</button>`
                }

            </div>
            `;
          this.checkoutContainer.insertAdjacentHTML("afterbegin", html);
        } catch (err) {}
      });
    } catch (err) {}
  }
}
export default new checkoutView();
