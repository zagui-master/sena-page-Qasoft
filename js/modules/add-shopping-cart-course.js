/** @format */

/*
import { numberOfCoursesAdded } from "./count-number-of-courses-added.js";
import { showCoursesInShoppingCart } from "./show-courses-in-shopping-cart.js";
import { calculateFinalPriceInShoppingCart } from "./calculate-final-price-in-shopping-cart.js";
const conten_courses = document.getElementById("conten_courses");

const current_user = JSON.parse(sessionStorage.getItem("current_user"));

let course_add = [];

const getData = (id, course_img, course_name, course_creator, course_price) => {
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];
  const data = {
    id,
    course_img,
    course_name,
    course_creator,
    course_price,
  };
  let repeat = courses.some((find) => find.id === id);
  if (!repeat) {
    saveData(data);
  }
  return data;
};

const saveData = (data) => {
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];
  course_add = [];

  course_add = course_add.concat(courses);
  course_add.push(data);
};

const sendData = () => {
  localStorage.setItem(`${current_user}`, JSON.stringify(course_add));
  showCoursesInShoppingCart();
};

conten_courses.addEventListener("click", (e) => {
  if (e.target.innerText === "Add") {
    const course_id = e.composedPath()[1].id;
    const course_img =
      e.composedPath()[1].childNodes[1].childNodes[1].attributes[0].nodeValue;
    const course_name =
      e.composedPath()[1].childNodes[1].childNodes[3].childNodes[1].innerText;
    const course_creator =
      e.composedPath()[1].childNodes[1].childNodes[3].childNodes[3].innerText;

    const course_price =
      e.composedPath()[1].childNodes[1].childNodes[3].childNodes[5]
        .childNodes[3].innerText;

    getData(course_id, course_img, course_name, course_creator, course_price);
    sendData();
    calculateFinalPriceInShoppingCart();
    numberOfCoursesAdded();
  }
});
/*********************************************************************************************** */
import { numberOfCoursesAdded } from "./count-number-of-courses-added.js";
import { showCoursesInShoppingCart } from "./show-courses-in-shopping-cart.js";
import { calculateFinalPriceInShoppingCart } from "./calculate-final-price-in-shopping-cart.js";

const conten_courses = document.getElementById("conten_courses");

const current_user = JSON.parse(sessionStorage.getItem("current_user")) || "";

const getCourses = () => {
  return JSON.parse(localStorage.getItem(current_user)) || [];
};

const addCourse = (course) => {
  let courses = getCourses();
  const repeat = courses.some((find) => find.id === course.id);
  if (!repeat) {
    const updatedCourses = [...courses, course];
    localStorage.setItem(current_user, JSON.stringify(updatedCourses));
    showCoursesInShoppingCart();
    calculateFinalPriceInShoppingCart();
    numberOfCoursesAdded();
  }
};

conten_courses.addEventListener("click", (e) => {
  if (e.target.innerText === "Add") {
    const courseElement = e.target.closest(".card-course");
    const course_id = courseElement.id;
    const course_img = courseElement
      .querySelector(".course-image")
      ?.getAttribute("src");
    const course_name = courseElement.querySelector(".course-name")?.innerText;
    const course_creator =
      courseElement.querySelector(".course-creator")?.innerText;
    const course_price =
      courseElement.querySelector(".course-price")?.innerText;

    const course = {
      id: course_id,
      course_img: course_img || "",
      course_name: course_name || "",
      course_creator: course_creator || "",
      course_price: course_price || "",
    };

    addCourse(course);
  }
});
