/** @format */
/*
import { showUserAccountsInAdmin } from "./show-user-accounts-in-admin.js";
import { hideModal } from "./show-modal-create-account-by-admin.js";
*/
import {
  form_sign_up,
  user_name,
  user_last_name,
  user_email,
  user_phone_number,
  user_password,
  alert_name,
  alert_last_name,
  alert_email,
  alert_phone_number,
  alert_password,
} from "../helpers/locatores.js";
import { url } from "../helpers/urls.js";
import { regex } from "../helpers/regex.js";

const regexName = regex.user;
const regexLastName = regex.user;
const regexEmail = regex.email;
const regexPhonNumber = regex.phone_number;
const regexPassword = regex.password;

let state = {
  name: false,
  last_name: false,
  email: false,
  phone_number: false,
  password: false,
  verifyExistingAccount: false,
};

let accounts = JSON.parse(sessionStorage.getItem("account")) || [];
let account_data = [];

const updateFieldValidationState = (field, regex, alert) => {
  if (!regex.test(field.value)) {
    alert.classList.add("alert-text");
    alert.textContent = `Invalid ${field.name}`;
    field.classList.add("alert-input");
    return false;
  } else {
    alert.classList.remove("alert-text");
    alert.textContent = "";
    field.classList.remove("alert-input");
    return true;
  }
};

const validateName = () => {
  user_name.addEventListener("input", () => {
    state.name = updateFieldValidationState(user_name, regexName, alert_name);
  });
};

const validateLastName = () => {
  user_last_name.addEventListener("input", () => {
    state.last_name = updateFieldValidationState(
      user_last_name,
      regexLastName,
      alert_last_name
    );
  });
};

const validateEmail = () => {
  user_email.addEventListener("input", () => {
    state.email = updateFieldValidationState(
      user_email,
      regexEmail,
      alert_email
    );
    const findAccount = accounts.findIndex(
      (find) => find.email === user_email.value
    );
    if (findAccount !== -1) {
      alert_email.classList.add("alert-text");
      alert_email.textContent = "Email associated with an existing account";
      user_email.classList.add("alert-input");
    } else {
      state.verifyExistingAccount = true;
    }
  });
};
const validatePhoneNumber = () => {
  user_phone_number.addEventListener("input", () => {
    state.phone_number = updateFieldValidationState(
      user_phone_number,
      regexPhonNumber,
      alert_phone_number
    );
  });
};

const validatePassword = () => {
  user_password.addEventListener("input", () => {
    state.password = updateFieldValidationState(
      user_password,
      regexPassword,
      alert_password
    );
  });
};

const getData = (name, last_name, email, phone_number, password) => {
  const data = {
    name,
    last_name,
    email,
    phone_number,
    password,
  };
  safeData(data);
};

const safeData = (data) => {
  let existing_accounts = JSON.parse(sessionStorage.getItem("account")) || [];
  account_data = [];
  account_data = account_data.concat(existing_accounts);
  account_data.push(data);
};

const sendData = () => {
  sessionStorage.setItem("account", JSON.stringify(account_data));
};

form_sign_up.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(state);
  if (
    state.name &&
    state.last_name &&
    state.email &&
    state.phone_number &&
    state.password &&
    state.verifyExistingAccount
  ) {
    getData(
      user_name.value,
      user_last_name.value,
      user_email.value.toLowerCase(),
      user_phone_number.value,
      user_password.value
    );
    sendData();
    form_sign_up.reset();

    //showUserAccountsInAdmin();
    //  hideModal();
    window.open(url.log_in, "_blank");
    window.close();
  }
});

validateName();
validateLastName();
validateEmail();
validatePhoneNumber();
validatePassword();
