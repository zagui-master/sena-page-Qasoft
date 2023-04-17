/** @format */

import { deleteAccountByAdminForm } from "../helpers/locatores.js";
import { admin } from "../data/admins.js";
import { showUserAccountsInAdmin } from "./show-user-accounts-in-admin.js";

const {
  form,
  userAccount,
  adminAccount,
  password,
  alertUserAccount,
  alertAdminAccount,
  alertPassword,
} = deleteAccountByAdminForm;

const hideModal = () => {
  const modal = document.getElementById("modal_delete_user_account_by_admin");
  modal.classList.remove("show-modal");
};

const canceldeleteAccount = () => {
  const btn_cancel = document.getElementById("btn_cancel");
  btn_cancel.addEventListener("click", () => {
    form.reset();
    hideModal();
  });
};

const ShowModal = (userAccount) => {
  const modal = document.getElementById("modal_delete_user_account_by_admin");
  const section_accounts_in_admin = document.getElementById(
    "section_accounts_in_admin"
  );

  section_accounts_in_admin.addEventListener("click", (e) => {
    const btn_delete_account = e.target.closest(".btn-delete-account");
    if (btn_delete_account) {
      const account = e.composedPath()[1].childNodes[1].childNodes[3].innerText;
      modal.classList.add("show-modal");
      userAccount.value = account;
      return userAccount;
    }
  });
};

const getUserAccounts = () => {
  return JSON.parse(sessionStorage.getItem("account")) || [];
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("current_user")) || [];
};

const deleteUserAccount = () => {
  const accounts = getUserAccounts();

  const account = accounts.findIndex(
    (find) => find.email === userAccount.value
  );

  if (account !== -1) {
    localStorage.removeItem(userAccount.value);
    localStorage.removeItem(`updated_stock_${userAccount.value}`);
    localStorage.removeItem(`purchased_${userAccount.value}`);

    accounts.splice(account, 1);
    sessionStorage.setItem("account", JSON.stringify(accounts));

    showUserAccountsInAdmin();
    hideModal();
  } else {
    alertUserAccount.innerText = "User account not found.";
    alertUserAccount.classList.add("alert-text");
    userAccount.classList.add("alert-input");
  }
};

const validateAdmin = (
  admin,
  adminAccount,
  password,
  alertAdminAccount,
  alertPassword
) => {
  const current_user = getCurrentUser();

  if (adminAccount.value === current_user) {
    const adminAccount = admin.find((find) => find.account === current_user);
    const asociate_password = adminAccount.password;

    if (password.value === asociate_password) {
      deleteUserAccount();
    }
    if (password.value !== asociate_password) {
      alertPassword.innerText = "Wrong admin password.";
      alertPassword.classList.add("alert-text");
      password.classList.add("alert-input");
    }
  }
  if (adminAccount.value !== current_user) {
    alertAdminAccount.innerText = "Wrong admin account.";
    alertAdminAccount.classList.add("alert-text");
    adminAccount.classList.add("alert-input");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAdmin(
    admin,
    adminAccount,
    password,
    alertAdminAccount,
    alertPassword
  );
});

ShowModal(userAccount);
canceldeleteAccount();
