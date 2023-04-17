/** @format */

import { url } from "../helpers/urls.js";

const btn_to_pay_courses = document.getElementById("btn_pay_all");

const goToPayCourses = () => {
  location.replace(url.payment);
};

btn_to_pay_courses.addEventListener("click", () => {
  goToPayCourses();
});
