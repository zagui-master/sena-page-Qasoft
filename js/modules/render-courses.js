/** @format */

import { courses_information } from "../data/data-courses.js";

const currentUser = JSON.parse(sessionStorage.getItem("current_user")) ?? [];
const courseContainer = document.getElementById("conten_courses");

localStorage.setItem("stock", JSON.stringify(courses_information));

const courseStock = JSON.parse(localStorage.getItem("stock"));

const updatedCourseStock = JSON.parse(
  localStorage.getItem(`updated_stock_${currentUser}`)
);

const renderCourse = (course) => {
  return `
    <div class="card-course" id="${course.id}">
      <div class="conteiner-card-info">
        <img src="${course.course_img}" alt="" class="course-image" />
        <div class="container-info">
          <span class="course-name">${course.course_name}</span>
          <span class="course-creator">${course.course_creator}</span>
          <div class="conteniner-price">
            <span>$</span>
            <span class="course-price">${course.course_price}</span>
          </div>
        </div>
      </div>
      <button class="button-course">${course.state}</button>
    </div>
  `;
};

export const renderCourses = () => {
  const courses = updatedCourseStock ?? courseStock;
  const coursesHtml = courses.map((course) => renderCourse(course)).join("");
  courseContainer.innerHTML = coursesHtml;
};

renderCourses();
