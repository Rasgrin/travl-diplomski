class Register {
  // REGISTER HANDLING
  public addRegisterHandler(btn: HTMLButtonElement, evs: string[], handler: any) {
    evs.forEach((ev: any, i: number) => {
      i === 0
        ? btn.addEventListener(ev, handler)
        : document.addEventListener(ev, (e: any) => {
            e.key === "Enter" && handler();
          });
    });
  }
}
export default new Register();
