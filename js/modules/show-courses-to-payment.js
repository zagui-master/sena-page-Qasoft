/** @format */
export const showCoursesToPayment = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = JSON.parse(localStorage.getItem(`${currentUser}`)) || [];
  const courseContainer = document.getElementById("conten_courses_payment");

  const courseHtml = courses
    .map((course) => {
      return `
      <div class="cart-course-payment" id="${course.id}">
        <div class="cart-info-course-payment">
          <img src="${course.course_img}" alt="" />
          <div class="info-course-payment">
            <span>${course.course_name}</span>
            <span>${course.course_creator}</span>
          </div>
        </div>
        <img src="../assets/icon-page/icon_delete.svg" alt="" class="icon-delete"/>
      </div>
    `;
    })
    .join("");

  courseContainer.innerHTML = courseHtml;
};

showCoursesToPayment();
