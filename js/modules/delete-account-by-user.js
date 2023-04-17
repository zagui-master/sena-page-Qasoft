/** @format */
import { url } from "../helpers/urls.js";
import { deleteAccountForm } from "../helpers/locatores.js";

const {
  form,
  account,
  phoneNumber,
  password,
  alertEmail,
  alertPhoneNumber,
  alertPassword,
} = deleteAccountForm;

const getUserAccounts = () => {
  return JSON.parse(sessionStorage.getItem("account")) || [];
};

const getCurrentAccount = () => {
  return JSON.parse(sessionStorage.getItem("current_user"));
};

const deleteAccount = (
  account,
  phoneNumber,
  password,
  alertEmail,
  alertPhoneNumber,
  alertPassword
) => {
  const accounts = getUserAccounts();
  const currentAccount = getCurrentAccount();
  const find_account = accounts.findIndex(
    (find) => find.email === currentAccount
  );

  const associated_password = accounts[find_account].password;
  const associated_phone_number = accounts[find_account].phoneNumber;

  if (
    account.value === currentAccount &&
    phoneNumber.value === associated_phone_number &&
    password.value === associated_password
  ) {
    localStorage.removeItem(currentAccount);
    localStorage.removeItem(`purchased_${currentAccount}`);
    localStorage.removeItem(`updated_stock_${currentAccount}`);

    sessionStorage.removeItem("current_user");

    accounts.splice(find_account, 1);
    sessionStorage.setItem("account", JSON.stringify(accounts));

    form.reset();

    window.open(url.log_in, "_blank");
    window.close();
  }

  if (account.value !== currentAccount && account.value !== "") {
    alertEmail.classList.add("alert-text");
    alertEmail.innerText = "Incorrect email";
    account.classList.add("alert-input");
  }

  if (
    phoneNumber.value !== associated_phone_number &&
    phoneNumber.value !== ""
  ) {
    alertPhoneNumber.classList.add("alert-text");
    alertPhoneNumber.innerText = "Incorrect phone number";
    phoneNumber.classList.add("alert-input");
  }

  if (password.value !== associated_password && password.value !== "") {
    alertPassword.classList.add("alert-text");
    alertPassword.innerText = "Incorrect password";
    password.classList.add("alert-input");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteAccount(
    account,
    phoneNumber,
    password,
    alertEmail,
    alertPhoneNumber,
    alertPassword
  );
  console.log(phoneNumber.value);
});
