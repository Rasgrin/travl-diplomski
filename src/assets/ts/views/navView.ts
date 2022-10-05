// HELPER FUNCTIONS
import { downloadImg } from "../helpers";

class View {
  private userDropdown = <HTMLButtonElement>document.querySelector(".user-dropdown");
  private signinBtn = <HTMLButtonElement>document.querySelector(".signin-btn");
  private pfp = <HTMLImageElement>document.querySelector(".nav-pfp");
  private dropEmail = <HTMLButtonElement>document.querySelector(".drop-email");

  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderNav() {
    try {
      if (localStorage.getItem("log") === "true") {
        this.userDropdown.classList.remove("d-none");
        this.signinBtn.classList.add("d-none");

        const url: any = await downloadImg(`pfp/${this.userData.pfp}`);
        this.pfp.setAttribute("src", url);
        this.dropEmail.textContent = this.userData.email;
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
export default new View();
