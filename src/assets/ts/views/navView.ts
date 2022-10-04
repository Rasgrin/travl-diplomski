export class Navbar {
  private nav = document.querySelector(".navbar-right-list");

  private generateNavMarkup() {
    if (localStorage.getItem("log") === "true") {
      return `
      <!-- IF USER IS LOGGED IN HIDE BUTTON AN SHOW ACCOUNT OPTIONS -->
      <li class="nav-item dropdown fs-2">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img class="mb-1" src="./assets/img/pfp/default-pfp.png" alt="pfp" style="width: 40px" /></a>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-light fs-3">
          <li><p class="dropdown-item-text my-auto">Stefanrogic95@gmail.com</p></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="./admin.html">Admin</a></li>
          <li><a class="dropdown-item" href="./profile.html">Profile</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><button type="button" class="logout-btn dropdown-item my-auto">Logout</button></li>
        </ul>
      </li>
      `;
    } else {
      return `
      <button type="button" class="btn btn-riot-red fs-4 px-7 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">SIGN IN</button>
      `;
    }
  }

  public renderNav() {
    const html = this.generateNavMarkup();
    this.nav?.insertAdjacentHTML("beforeend", html);
  }

  // LOGIN
  public addLoginHandler(btn, handlers, f) {
    btn.addEventListener(handlers[0], f);
    document.addEventListener(handlers[1], (e) => {
      if (e.key === "Enter") f();
    });
  }

  // LOGOUT
  public addLogoutHandler(handler, f) {
    document.addEventListener(handler, (e) => {
      const btn = <HTMLButtonElement>e.target;
      if (btn.classList.contains("logout-btn")) {
        f();
      }
    });
  }
}

export default new Navbar();
