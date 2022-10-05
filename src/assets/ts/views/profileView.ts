// HELPER FUNCTIONS
import { downloadImg, findDocument } from "../helpers";

class Profile {
  private profilePfp = <HTMLImageElement>document.querySelector(".profile-pfp");
  private profileName = <HTMLImageElement>document.querySelector(".profile-name");
  private profileEmail = <HTMLImageElement>document.querySelector(".profile-email");
  private allFlights = <HTMLDivElement>document.querySelector(".all-flights");

  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderProfile() {
    try {
      const pfpUrl: any = await downloadImg(`pfp/${this.userData.pfp}`);
      this.profilePfp.setAttribute("src", pfpUrl);
      this.profileName.textContent = `${this.userData.firstName} ${this.userData.lastName}`;
      this.profileEmail.textContent = this.userData.email;

      // LIST RESERVATION HISTORY
      const result = await (<any>findDocument("users", "==", "email", this.userData.email));
      result?.forEach((user: any) =>
        user.data().reservations.forEach(async (reservation: any) => {
          try {
            const airlineUrl: any = await downloadImg(`pfp/${reservation.airline}.png`);

            const html: string = `
            <div class="d-flex flex-lg-row flex-md-column flex-sm-column mb-5 w-100 py-5 bg-light shadow">
              <div class="d-flex flex-row mb-lg-0 mb-md-3 mb-sm-3">
                <img class="mx-5 img-fluid my-auto" src="${airlineUrl}" alt="airway" style="width: 100px" />
                <p class="text-center my-auto fs-4 me-lg-5 ms-lg-0 ms-md-auto ms-sm-auto">${reservation.date}</p>
                <p class="text-center my-auto fs-4 mx-5">${reservation.time}</p>
              </div>
              <div class="d-flex flex-row ms-auto mb-lg-0 mb-md-3 mb-sm-3">
                <p class="text-center my-auto fs-4 mx-5">${reservation.airports}</p>
                <p class="text-center my-auto fs-4 me-5">${reservation.seats} TICKET/S</p>
              </div>
            </div>
            `;
            this.allFlights?.insertAdjacentHTML("afterbegin", html);
          } catch (err) {}
        })
      );
    } catch (err) {}
  }
}
export default new Profile();
