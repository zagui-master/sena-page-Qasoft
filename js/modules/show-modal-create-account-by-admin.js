/** @format */
import { signUpForm } from "../helpers/locatores.js";

const showModal = () => {
  const btn_create_accout = document.getElementById("btn_create_accout");
  const modal = document.getElementById("modal_create_account");
  btn_create_accout.addEventListener("click", () => {
    modal.classList.add("show-modal");
    signUpForm.form.reset();
  });
};

export const hideModal = () => {
  const modal = document.getElementById("modal_create_account");
  modal.classList.remove("show-modal");
};
const cancelCreateAccount = () => {
  const modal = document.getElementById("modal_create_account");
  const btn_cancel = document.getElementById("btn_cancel_create_account");
  btn_cancel.addEventListener("click", () => {
    modal.classList.remove("show-modal");
  });
};

hideModal();
showModal();
cancelCreateAccount();
