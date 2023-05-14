/** @format */

export const calculateFinalPriceInPayment = () => {
  const paymentTotalElement = document.getElementById("total_payment");

  const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = getCoursesForCurrentUser(currentUser);

  const totalPrice = calculateTotalPrice(courses);

  paymentTotalElement.innerText = `Total $ ${
    Math.round(totalPrice * 100) / 100
  }`;

  function getCoursesForCurrentUser(user) {
    const courseKey = `${user}`;
    return JSON.parse(localStorage.getItem(courseKey)) || [];
  }

  function calculateTotalPrice(courses) {
    return courses.reduce((total, course) => {
      const coursePrice = parseFloat(course.course_price);
      return total + coursePrice;
    }, 0);
  }
};

calculateFinalPriceInPayment();
