// HELPER FUNCTIONS
import { downloadImg } from "../helpers";

class navView {
  private userDropdown = <HTMLButtonElement>document.querySelector(".user-dropdown");
  private signinBtn = <HTMLButtonElement>document.querySelector(".signin-btn");
  private pfpDropdown = <HTMLImageElement>document.querySelector(".pfp-dropdown");
  private dropEmail = <HTMLButtonElement>document.querySelector(".drop-email");

  private spinner = <HTMLDivElement>document.querySelector(".spinner");
  private contentContainer = <HTMLDivElement>document.querySelector(".content-container");
  private footerContainer = <HTMLDivElement>document.querySelector(".footer-container");

  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderNav() {
    try {
      if (localStorage.getItem("log") === "true") {
        this.userDropdown.classList.remove("d-none");
        this.signinBtn.classList.add("d-none");

        const url: any = await downloadImg(`pfp/${this.userData.pfp}`);
        this.pfpDropdown.insertAdjacentHTML(
          "afterbegin",
          `<img class="nav-pfp mb-1" src="${url}" alt="pfp" style="width: 40px; border-radius: 20px"
        />`
        );
        this.dropEmail.textContent = this.userData.email;

        setTimeout(() => {
          this.spinner.classList.replace("d-flex", "d-none");
          this.contentContainer.classList.remove("d-none");
          this.footerContainer.classList.remove("d-none");
        }, 250);
      } else {
        this.userDropdown.classList.add("d-none");
        this.signinBtn.classList.remove("d-none");
      }
    } catch (err) {}
  }

  // LOGIN HANDLING
  public addLoginHandler(btn: HTMLButtonElement, evs: string[], handler: any) {
    evs.forEach((ev: any, i: number) =>
      i === 0
        ? btn.addEventListener(ev, handler)
        : document.addEventListener(ev, (e: any) => {
            e.key === "Enter" && handler();
          })
    );
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
export default new navView();
