/** @format */

// Grupo de elementos del formulario de registro
export const signUpForm = {
  form: document.getElementById("form_sign_up"),
  name: document.getElementById("user_name"),
  lastName: document.getElementById("user_last_name"),
  email: document.getElementById("user_email"),
  phoneNumber: document.getElementById("user_phone_number"),
  password: document.getElementById("user_password"),
  alertName: document.getElementById("alert_name"),
  alertLastName: document.getElementById("alert_last_name"),
  alertEmail: document.getElementById("alert_email"),
  alertPhoneNumber: document.getElementById("alert_phone_number"),
  alertPassword: document.getElementById("alert_password"),
};

// Grupo de elementos del formulario de inicio de sesión
export const logInForm = {
  form: document.getElementById("form_log_in"),
  email: document.getElementById("user_email_login"),
  password: document.getElementById("user_password_login"),
  alertAccount: document.getElementById("alert_email_login"),
  alertPassword: document.getElementById("alert_password_login"),
};

// Grupo de elementos del formulario de pago
export const paymentForm = {
  form: document.getElementById("form_payment"),
  cardNumber: document.getElementById("card_number"),
  cardholderName: document.getElementById("cardholder_name"),
  cardYear: document.getElementById("card_year"),
  cardMonth: document.getElementById("card_month"),
  securityCode: document.getElementById("security_code"),
  contenInputMonthYear: document.querySelector(".conten-input-month-year"),
  alertCardNumber: document.getElementById("alert_card_number"),
  alertCardholderName: document.getElementById("alert_cardholder_name"),
  alertMonthYear: document.getElementById("alert_month_year"),
  alertSecurityCode: document.getElementById("alert_security_code"),
};

// Grupo de elementos del formulario de eliminación de cuenta
export const deleteAccountForm = {
  form: document.getElementById("form_delete_account"),
  account: document.getElementById("user_email_delete_account"),
  phoneNumber: document.getElementById("user_phone_number_delete_account"),
  password: document.getElementById("user_password_delete_account"),
  alertAccount: document.getElementById("alert_user_email"),
  alertPhoneNumber: document.getElementById("alert_user_phone_number"),
  alertPassword: document.getElementById("alert_user_password"),
};

// Grupo de elementos del formulario de eliminación de cuenta por parte del administrador
export const deleteAccountByAdminForm = {
  form: document.getElementById("form_delete_account_by_admin"),
  userAccount: document.getElementById("user_account"),
  adminAccount: document.getElementById("admin_account"),
  password: document.getElementById("admin_password"),
  alertUserAccount: document.getElementById("alert_user_account_by_admin"),
  alertAdminAccount: document.getElementById("alert_admin_account_by_admin"),
  alertPassword: document.getElementById("alert_password_by_admin"),
};

const {
  form,
  email,
  phoneNumber,
  password,
  alertEmail,
  alertPhoneNumber,
  alertPassword,
} = deleteAccountForm;
