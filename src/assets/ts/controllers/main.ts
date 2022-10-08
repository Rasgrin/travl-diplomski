import "bootstrap";
import "popper.js";

import registerView from "../views/registerView";
import profileView from "../views/profileView";
import destinationsView from "../views/destinationsView";
import navView from "../views/navView";
import searchView from "../views/searchView";
import checkoutView from "../views/checkoutView";
import profileEditView from "../views/profileEditView";
import * as model from "../models/model";

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
  searchView.addReserveHandler();
};

const controlCheckout = () => {
  checkoutView.renderCheckout();
  checkoutView.addRemoveHandler();
  checkoutView.addConfirmHandler();
};

const controlEditProfile = () => {
  profileEditView.renderEdit();
  profileEditView.addImgHandler();
};

const init = () => {
  controlNav();
  controlLogin();
  if (location.href === "http://localhost:1234/register.html") controlRegister();
  if (location.href === "http://localhost:1234/profile.html") controlProfile();
  if (location.href === "http://localhost:1234/destinations.html") controlDestinations();
  if (location.href === "http://localhost:1234/index.html" || location.href === "http://localhost:1234/flights.html") controlSearch();
  if (location.href === "http://localhost:1234/checkout.html") controlCheckout();
  if (location.href === "http://localhost:1234/editProfile.html") controlEditProfile();
};
init();
