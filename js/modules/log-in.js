/** @format */

import { logInForm } from "../helpers/locatores.js";
import { admin } from "../data/admins.js";
import { url } from "../helpers/urls.js";

const { form, email, password, alertPassword } = logInForm;

const getUserAccount = () => {
  return JSON.parse(sessionStorage.getItem("account")) ?? [];
};

const handleIncorrectPassword = (alertPassword, password) => {
  alertPassword.classList.add("alert-text");
  alertPassword.textContent = "Incorrect password";
  password.classList.add("alert-input");
};

const login = (email, password, alertPassword, admin) => {
  const userAccount = getUserAccount().find((user) => user.email === email);

  const adminAccount = admin.find((admin) => admin.account === email);

  if (userAccount && userAccount.password === password) {
    sessionStorage.setItem("current_user", JSON.stringify(email));

    form.reset();
    window.open(url.courses, "_blank");
    window.close();
  } else if (adminAccount && adminAccount.password === password) {
    sessionStorage.setItem("current_user", JSON.stringify(email));
    window.open(url.admin, "_blank");
    window.close();
  } else {
    handleIncorrectPassword(alertPassword, password);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  login(email.value, password.value, alertPassword, admin);
});
