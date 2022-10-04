import "bootstrap";
import "popper.js";

import navView from "./views/navView";
import * as model from "./model";

const controllNav = async () => {
  try {
    navView.renderNav();
    navView.addLogoutHandler("click", model.logout);
  } catch (err) {
    console.log(err);
  }
};

const controllLogin = async () => {
  try {
    navView.addLoginHandler(model.logBtn, ["click", "keypress"], model.login);
  } catch (err) {
    console.log(err);
  }
};

const controllRegister = async () => {
  try {
    model.regBtn?.addEventListener("click", model.register);
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  controllNav();
  controllLogin();
  controllRegister();
};
init();
