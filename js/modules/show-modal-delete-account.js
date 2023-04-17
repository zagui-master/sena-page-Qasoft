/** @format */
import { deleteAccountForm } from "../helpers/locatores.js";

const {
  form,
  account,
  phoneNumber,
  password,
  alertAccount,
  alertPhoneNumber,
  alertPassword,
} = deleteAccountForm;

const showModal = (
  form,
  account,
  phoneNumber,
  password,
  alertAccount,
  alertPhoneNumber,
  alertPassword
) => {
  const btn_delete_profile = document.getElementById("btn_delete_profile");
  const btn_cancel = document.getElementById("cancel");
  const modal = document.querySelector(".modal-delete-account");
  btn_delete_profile.addEventListener("click", () => {
    modal.classList.add("show-modal");

    alertAccount.innerText = "";
    alertAccount.classList.remove("alert-text");
    account.classList.remove("alert-input");

    alertPhoneNumber.innerText = "";
    alertPhoneNumber.classList.remove("alert-text");
    phoneNumber.classList.remove("alert-input");

    alertPassword.innerText = "";
    alertPassword.classList.remove("alert-text");
    password.classList.remove("alert-input");

    form.reset();
  });

  btn_cancel.addEventListener("click", () => {
    modal.classList.remove("show-modal");
  });
};

showModal(
  form,
  account,
  phoneNumber,
  password,
  alertAccount,
  alertPhoneNumber,
  alertPassword
);
