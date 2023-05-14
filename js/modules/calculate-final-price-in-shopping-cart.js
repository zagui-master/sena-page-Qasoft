/** @format */
export const calculateFinalPriceInShoppingCart = () => {
  const cartTotalElement = document.getElementById("conten_final_price_cart");
  const courses = getCoursesForCurrentUser();

  const totalPrice = calculateTotalPrice(courses);

  cartTotalElement.innerText = `Total $ ${Math.round(totalPrice * 100) / 100}`;

  function getCoursesForCurrentUser() {
    const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
    const courseKey = `${currentUser}`;
    return JSON.parse(localStorage.getItem(courseKey)) || [];
  }

  function calculateTotalPrice(courses) {
    return courses.reduce((total, course) => {
      const coursePrice = parseFloat(course.course_price);
      return total + coursePrice;
    }, 0);
  }
};

calculateFinalPriceInShoppingCart();
