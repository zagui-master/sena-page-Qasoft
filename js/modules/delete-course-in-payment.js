/** @format */

import { showCoursesToPayment } from "./show-courses-to-payment.js";
import { calculateFinalPriceInPayment } from "./calculate-final-price-in-payment.js";
//import { calculateFinalPriceInShoppingCart } from "./calculate-final-price-in-shopping-cart.js";
//import { showCoursesInShoppingCart } from "./show-courses-in-shopping-cart.js";
import { numberOfCoursesAdded } from "./count-number-of-courses-added.js";

const coursesPaymentContainer = document.getElementById(
  "conten_courses_payment"
);

const deleteCourseInPayment = (id_course) => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  let courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];

  courses = courses.filter((course) => course.id !== id_course);

  localStorage.setItem(`${current_user}`, JSON.stringify(courses));

  showCoursesToPayment();
  //showCoursesInShoppingCart();
  numberOfCoursesAdded();
  calculateFinalPriceInPayment();
  //calculateFinalPriceInShoppingCart();
};

coursesPaymentContainer.addEventListener("click", (e) => {
  const btn_delete = e.target.closest(".icon-delete");
  if (btn_delete) {
    const id_course = e.composedPath()[1].id;
    deleteCourseInPayment(id_course);
  }
});
