// HELPER FUNCTIONS
import { downloadImg, findDocumentById, updateDocument } from "../helpers";
import { authentication, auth, store } from "../config";

class profileEditView {
  private profilePfp = <HTMLImageElement>document.querySelector(".profile-pfp");
  private editName = <HTMLInputElement>document.querySelector(".edit-name");
  private resetPassword = <HTMLLinkElement>document.querySelector(".reset-password-link");
  private confirmChangeBtn = <HTMLLinkElement>document.querySelector(".confirm-change-btn");
  private uploadImg = <HTMLInputElement>document.querySelector(".upload-img");

  private userData = <any>JSON.parse(<string>localStorage.getItem("loggedUser"));

  public async renderEdit() {
    try {
      const pfpUrl: any = await downloadImg(`pfp/${this.userData.pfp}`);
      this.profilePfp.setAttribute("src", pfpUrl);

      // LIST RESERVATION HISTORY
      const result: any = await findDocumentById("users", this.userData.id);

      this.editName.value = `${result?.data().firstName} ${result?.data().lastName}`;

      this.confirmChangeBtn.addEventListener("click", async () => {
        try {
          const fullName = this.editName.value.split(" ");

          updateDocument("users", this.userData.id, {
            firstName: fullName[0],
            lastName: fullName[1],
          });

          this.userData.firstName = fullName[0];
          this.userData.lastName = fullName[1];
          localStorage.setItem("loggedUser", JSON.stringify(this.userData));

          setTimeout(() => {
            location.href = "http://localhost:1234/profile.html";
          }, 500);
        } catch (err) {}
      });

      this.resetPassword.addEventListener("click", () => {
        console.log("click");
        const email = this.userData.email;
        authentication
          .sendPasswordResetEmail(auth, email)
          .then(() => {
            console.log("email sent");
          })
          .catch((error) => {});
      });
    } catch (err) {}
  }

  public async addImgHandler() {
    this.uploadImg.addEventListener("change", async (e: any) => {
      try {
        const storage = store.getStorage();
        const pfpName = String(this.uploadImg.value).split(`\\`)[2];

        const storageRef = store.ref(storage, `pfp/${pfpName}`);

        await store.uploadBytes(storageRef, e.target.files[0]);

        const pfpUrl: any = await downloadImg(`pfp/${pfpName}`);
        this.profilePfp.setAttribute("src", pfpUrl);

        this.userData.pfp = pfpName;
        localStorage.setItem("loggedUser", JSON.stringify(this.userData));

        updateDocument("users", this.userData.id, {
          pfp: pfpName,
        });

        console.log(this.userData.id);
      } catch (err) {}
    });
  }
}
export default new profileEditView();
