import "bootstrap";
import "popper.js";

import navView from "./views/navView";
import * as model from "./model";

console.log(location.href);

const controlNav = () => {
  navView.renderNav();
  navView.addLogoutHandler("click", model.logout);
};

const controlProfile = () => {
  navView.renderProfile();
};

const controlLogin = () => {
  navView.addLoginHandler(model.logBtn, ["click", "keypress"], model.login);
};

const controlRegister = () => {
  navView.addRegisterHandler(model.regBtn, ["click", "keypress"], model.register);
};

const init = () => {
  controlNav();
  controlLogin();
  if (location.href === "http://localhost:1234/register.html") controlRegister();
  if (location.href === "http://localhost:1234/profile.html") controlProfile();
};
init();
