/** @format */
/*
export const numberOfCoursesAdded = () => {
  const conten_counter_courses_add = document.getElementById("courses_add");
  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];
  conten_counter_courses_add.innerText = courses.length;
};
numberOfCoursesAdded();
*/

export const numberOfCoursesAdded = () => {
  const counterCoursesAddElement = document.getElementById("courses_add");
  const courses = getCoursesForCurrentUser();
  counterCoursesAddElement.innerText = courses.length;

  function getCoursesForCurrentUser() {
    const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
    const courseKey = `${currentUser}`;
    return JSON.parse(localStorage.getItem(courseKey)) || [];
  }
};

numberOfCoursesAdded();
