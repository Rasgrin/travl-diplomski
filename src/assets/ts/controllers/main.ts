import "bootstrap";
import "popper.js";

import registerView from "../views/registerView";
import profileView from "../views/profileView";
import destinationsView from "../views/destinationsView";
import * as model from "../models/model";
import navView from "../views/navView";
import searchView from "../views/searchView";

const controlNav = () => {
  navView.renderNav();
  navView.addLogoutHandler("click", model.logout);
};

const controlLogin = () => {
  navView.addLoginHandler(model.logBtn, ["click", "keypress"], model.login);
};

const controlRegister = () => {
  registerView.addRegisterHandler(model.regBtn, ["click", "keypress"], model.register);
};

const controlProfile = () => {
  profileView.renderProfile();
};

const controlDestinations = () => {
  destinationsView.renderDestinations();
};

const controlSearch = () => {
  searchView.renderSearchResults();
  searchView.addSearchHandler([...model.from, ...model.to], "keyup");
};

const init = () => {
  controlNav();
  controlLogin();
  if (location.href === "http://localhost:1234/register.html") controlRegister();
  if (location.href === "http://localhost:1234/profile.html") controlProfile();
  if (location.href === "http://localhost:1234/destinations.html") controlDestinations();
  if (location.href === "http://localhost:1234/index.html" || location.href === "http://localhost:1234/flights.html") controlSearch();
};
init();
