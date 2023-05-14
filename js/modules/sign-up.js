/** @format */

import { signUpForm } from "../helpers/locatores.js";
import { url } from "../helpers/urls.js";
import { regex } from "../helpers/regex.js";

const msgAlert = {
  nameLastNameAlert: "The name must contains 4 characters",
  emailAlert: "Invalid email",
  phoneNumberAlet: "Invalid phone number",
  passwordAlert:
    "The password must contains uppercase, lowercases, numbers and at least 8 charaters",
};
const {
  form,
  name,
  lastName,
  email,
  phoneNumber,
  password,
  alertName,
  alertLastName,
  alertEmail,
  alertPhoneNumber,
  alertPassword,
} = signUpForm;

const regexName = regex.user;
const regexLastName = regex.user;
const regexEmail = regex.email;
const regexPhonNumber = regex.phone_number;
const regexPassword = regex.password;

let state = {
  name: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  password: false,
  verifyExistingAccount: false,
};

const getUserAccounts = () => {
  return JSON.parse(sessionStorage.getItem("account")) || [];
};

const updateFieldValidationState = (field, regex, alert, msg) => {
  if (field.value.length === 0) {
    alert.classList.remove("alert-text");
    alert.textContent = "";
    field.classList.remove("alert-input");
    return false;
  }
  if (!regex.test(field.value)) {
    alert.classList.add("alert-text");
    alert.textContent = msg;
    field.classList.add("alert-input");
    return false;
  } else {
    alert.classList.remove("alert-text");
    alert.textContent = "";
    field.classList.remove("alert-input");
    return true;
  }
};

const validateName = (name, regexName, alertName) => {
  name.addEventListener("input", () => {
    state.name = updateFieldValidationState(
      name,
      regexName,
      alertName,
      msgAlert.nameLastNameAlert
    );
  });
};

const validateLastName = (lastName, regexLastName, alertLastName) => {
  lastName.addEventListener("input", () => {
    state.lastName = updateFieldValidationState(
      lastName,
      regexLastName,
      alertLastName,
      msgAlert.nameLastNameAlert
    );
  });
};

const validateEmail = (email, regexEmail, alertEmail) => {
  email.addEventListener("input", () => {
    const accounts = getUserAccounts();
    state.email = updateFieldValidationState(
      email,
      regexEmail,
      alertEmail,
      msgAlert.emailAlert
    );
    const findAccount = accounts.findIndex(
      (find) => find.email === user_email.value
    );
    if (findAccount !== -1) {
      alertEmail.classList.add("alert-text");
      alertEmail.textContent = "Email associated with an existing account";
      userEmail.classList.add("alert-input");
    } else {
      state.verifyExistingAccount = true;
    }
  });
};

const validatePhoneNumber = (
  phoneNumber,
  regexPhonNumber,
  alertPhoneNumber
) => {
  phoneNumber.addEventListener("input", () => {
    state.phoneNumber = updateFieldValidationState(
      phoneNumber,
      regexPhonNumber,
      alertPhoneNumber,
      msgAlert.phoneNumberAlet
    );
  });
};

const validatePassword = (password, regexPassword) => {
  password.addEventListener("input", () => {
    state.password = updateFieldValidationState(
      password,
      regexPassword,
      alertPassword,
      msgAlert.passwordAlert
    );
  });
};

const getData = (name, lastName, email, phoneNumber, password) => {
  const data = {
    name,
    lastName,
    email,
    phoneNumber,
    password,
  };

  const accounts = getUserAccounts();
  accounts.push(data);
  sendData(accounts);
  return data;
};

const sendData = (accounts) => {
  sessionStorage.setItem("account", JSON.stringify(accounts));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    state.name &&
    state.lastName &&
    state.email &&
    state.phoneNumber &&
    state.password &&
    state.verifyExistingAccount
  ) {
    getData(
      name.value,
      lastName.value,
      email.value.toLowerCase(),
      phoneNumber.value,
      password.value
    );

    form.reset();
    window.open(url.log_in, "_blank");
    window.close();
  }
});
validateName(name, regexName, alertName);
validateLastName(lastName, regexLastName, alertLastName);
validateEmail(email, regexEmail, alertEmail);
validatePhoneNumber(phoneNumber, regexPhonNumber, alertPhoneNumber);
validatePassword(password, regexPassword, alertPassword);
