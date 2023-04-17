/** @format */
import { paymentForm } from "../helpers/locatores.js";
import { changeStateCourse } from "./change-state-course.js";
import { paymentGatewayData } from "../data/credit-card-data.js";
import { showCoursesToPayment } from "./show-courses-to-payment.js";
import { calculateFinalPriceInPayment } from "./calculate-final-price-in-payment.js";

const {
  form,
  cardNumber,
  cardholderName,
  cardYear,
  cardMonth,
  securityCode,
  alertCardNumber,
  alertCardholderName,
  contenInputMonthYear,
  alertMonthYear,
  alertSecurityCode,
} = paymentForm;

const {
  data_card_number,
  data_cardholder_name,
  data_card_month,
  data_card_year,
  data_security_code,
} = paymentGatewayData;

let state = {
  card_number: false,
  cardholder_name: false,
  card_year: false,
  card_month: false,
  security_code: false,
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("current_user")) || [];
};

const getCoursesToPay = (currentUser) => {
  return JSON.parse(localStorage.getItem(`${currentUser}`)) || [];
};

const getPurchasedCourse = (currentUser) => {
  return JSON.parse(localStorage.getItem(`purchased_${currentUser}`)) || [];
};

const buyCourse = () => {
  const currentUser = getCurrentUser();
  const purchasedCourse = getPurchasedCourse(currentUser);
  const coursesToPay = getCoursesToPay(currentUser);
  const updatedPurchasedCourse = [...purchasedCourse, ...coursesToPay];

  localStorage.setItem(
    `purchased_${currentUser}`,
    JSON.stringify(updatedPurchasedCourse)
  );

  localStorage.removeItem(currentUser);
  showCoursesToPayment();
  calculateFinalPriceInPayment();
  changeStateCourse();
};

const validateCardNumber = (
  cardNumber,
  alertCardNumber,
  data_card_number,
  state
) => {
  if (parseInt(cardNumber.value) === data_card_number) {
    state.card_number = true;
    alertCardNumber.innerText = "";
    alertCardNumber.classList.remove("alert-text");
    cardNumber.classList.remove("alert-input");
  } else {
    alertCardNumber.innerText = "Incorret number";
    alertCardNumber.classList.add("alert-text");
    cardNumber.classList.add("alert-input");
  }
};

const validateCardholderName = (
  cardholderName,
  alertCardholderName,
  data_cardholder_name,
  state
) => {
  if (cardholderName.value === data_cardholder_name) {
    state.cardholder_name = true;
    alertCardholderName.innerText = "";
    alertCardholderName.classList.remove("alert-text");
    cardholderName.classList.remove("alert-input");
  } else {
    alertCardholderName.innerText = "Incorret cardholder name";
    alertCardholderName.classList.add("alert-text");
    cardholderName.classList.add("alert-input");
  }
};

const validateCardMonthYear = (
  cardMonth,
  cardYear,
  alertMonthYear,
  contenInputMonthYear,
  data_card_month,
  data_card_year,
  state
) => {
  if (
    parseInt(cardMonth.value) === data_card_month &&
    parseInt(cardYear.value) === data_card_year
  ) {
    alertMonthYear.innerText = "";
    alertMonthYear.classList.remove("alert-text");
    contenInputMonthYear.classList.remove("alert-input");
    state.card_year = true;
    state.card_month = true;
  } else {
    alertMonthYear.innerText = "Incorret month or year";
    alertMonthYear.classList.add("alert-text");
    contenInputMonthYear.classList.add("alert-input");
  }
};

const validateSecurityCode = (
  securityCode,
  alertSecurityCode,
  data_security_code,
  state
) => {
  if (parseInt(securityCode.value) === data_security_code) {
    state.security_code = true;
    alertSecurityCode.innerText = "";
    alertSecurityCode.classList.remove("alert-text");
    securityCode.classList.remove("alert-input");
  } else {
    alertSecurityCode.innerText = "Incorret security code";
    alertSecurityCode.classList.add("alert-text");
    securityCode.classList.add("alert-input");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateCardNumber(cardNumber, alertCardNumber, data_card_number, state);
  validateCardholderName(
    cardholderName,
    alertCardholderName,
    data_cardholder_name,
    state
  );
  validateCardMonthYear(
    cardMonth,
    cardYear,
    alertMonthYear,
    contenInputMonthYear,
    data_card_month,
    data_card_year,
    state
  );

  validateSecurityCode(
    securityCode,
    alertSecurityCode,
    data_security_code,
    state
  );
  if (
    state.card_number &&
    state.cardholder_name &&
    state.card_month &&
    state.card_year &&
    state.security_code
  ) {
    buyCourse();
    form_payment.reset();
  }
});
