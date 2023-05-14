/** @format */

const searchCourse = () => {
  const searchInput = document.getElementById("search_course");

  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const cardCourse = Array.from(document.querySelectorAll(".card-course"));
    cardCourse.forEach((course) => {
      const courseText = course.textContent.toLowerCase();

      if (courseText.includes(searchValue)) {
        course.classList.remove("filter");
      } else {
        course.classList.add("filter");
      }
    });
  });
};

searchCourse();
