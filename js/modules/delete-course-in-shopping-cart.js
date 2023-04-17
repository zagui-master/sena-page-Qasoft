/** @format */
import { numberOfCoursesAdded } from "./count-number-of-courses-added.js";
import { showCoursesInShoppingCart } from "./show-courses-in-shopping-cart.js";
import { calculateFinalPriceInShoppingCart } from "./calculate-final-price-in-shopping-cart.js";

const conten_course_add = document.getElementById("conten_course_add");

const deleteCourseInShoppingCart = (id_course) => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];

  const filteredCourses = courses.filter((course) => course.id !== id_course);

  localStorage.setItem(`${current_user}`, JSON.stringify(filteredCourses));
  numberOfCoursesAdded();
  showCoursesInShoppingCart();
  calculateFinalPriceInShoppingCart();
};
conten_course_add.addEventListener("click", (e) => {
  const btn_delete = e.target.closest(".icon-delete");
  if (btn_delete) {
    const id_course = e.composedPath()[1].id;
    deleteCourseInShoppingCart(id_course);
  }
});
