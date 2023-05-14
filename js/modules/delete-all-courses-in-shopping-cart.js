/** @format */

import { showCoursesInShoppingCart } from "./show-courses-in-shopping-cart.js";
//import { showCoursesToPayment } from "./show-courses-to-payment.js";
import { calculateFinalPriceInShoppingCart } from "./calculate-final-price-in-shopping-cart.js";
import { numberOfCoursesAdded } from "./count-number-of-courses-added.js";

const btnClearCart = document.getElementById("btn_clear_cart_course");

const clearShoppingCart = () => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user")) ?? [];
  localStorage.removeItem(current_user);
};

const handleClearCartClick = () => {
  clearShoppingCart();
  showCoursesInShoppingCart();
  //showCoursesToPayment();
  calculateFinalPriceInShoppingCart();
  numberOfCoursesAdded();
};

btnClearCart.addEventListener("click", handleClearCartClick);
