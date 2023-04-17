/** @format */
/**
       <img src="../assets/icon-page/icon_delete.svg" alt="" />
 
 */

export const showPurchasedCoursesByUser = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
  const courses =
    JSON.parse(localStorage.getItem(`purchased_${currentUser}`)) || [];
  const purchasedCoursesContainer =
    document.getElementById("purchased_courses");

  purchasedCoursesContainer.innerHTML = courses
    .map((course) => {
      return `
      <div class="cart-course-purchased" id="${course.id}">
        <div class="cart-info-course-purchased">
          <img src="${course.course_img}" alt="" />
          <div class="info-course-purchased">
            <span>${course.course_name}</span>
            <span>${course.course_creator}</span>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
};

showPurchasedCoursesByUser();
