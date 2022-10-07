import "bootstrap";
import "popper.js";

import View from "../views/navView";
import registerView from "../views/registerView";
import profileVIew from "../views/profileView";
import destinationsView from "../views/destinationsView";
import * as model from "../models/model";

const controlNav = () => {
  window.addEventListener("load", () => {
    View.renderNav();
    View.addLogoutHandler("click", model.logout);
  });
};

const controlLogin = () => {
  View.addLoginHandler(model.logBtn, ["click", "keypress"], model.login);
};

const controlRegister = () => {
  registerView.addRegisterHandler(model.regBtn, ["click", "keypress"], model.register);
};

const controlProfile = () => {
  profileVIew.renderProfile();
};

const controlDestinations = () => {
  destinationsView.renderDestinations();
};

const init = () => {
  controlNav();
  controlLogin();
  if (location.href === "http://localhost:1234/register.html") controlRegister();
  if (location.href === "http://localhost:1234/profile.html") controlProfile();
  if (location.href === "http://localhost:1234/destinations.html") controlDestinations();
};
init();
