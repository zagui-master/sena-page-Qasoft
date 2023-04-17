/** @format */
/*
import { showCoursesToPayment } from "./show-courses-to-payment.js";
import { calculateFinalPriceInPayment } from "./calculate-final-price-in-payment.js";

const conten_courses_payment = document.getElementById(
  "conten_courses_payment"
);

const deleteCourseInPayment = (id_course) => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];
  const find_course = courses.findIndex((find) => find.id === id_course);

  if (find_course !== -1) {
    courses.splice(find_course, 1);
  }
  localStorage.setItem(`${current_user}`, JSON.stringify(courses));

  showCoursesToPayment();
  calculateFinalPriceInPayment();
};
conten_courses_payment.addEventListener("click", (e) => {
  const id_course = e.composedPath()[1].id;
  const img = e.composedPath()[0].nodeName;

  if (img === "IMG") {
    deleteCourseInPayment(id_course);
  }
});
*/
import { showCoursesToPayment } from "./show-courses-to-payment.js";
import { calculateFinalPriceInPayment } from "./calculate-final-price-in-payment.js";

const coursesPaymentContainer = document.getElementById(
  "conten_courses_payment"
);

const deleteCourseInPayment = (id_course) => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  let courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];

  courses = courses.filter((course) => course.id !== id_course);

  localStorage.setItem(`${current_user}`, JSON.stringify(courses));

  showCoursesToPayment();
  calculateFinalPriceInPayment();
};

coursesPaymentContainer.addEventListener("click", (e) => {
  const btn_delete = e.target.closest(".icon-delete");
  if (btn_delete) {
    const id_course = e.composedPath()[1].id;
    deleteCourseInPayment(id_course);
  }
});
