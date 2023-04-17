/** @format */
/*
export const calculateFinalPriceInShoppingCart = () => {
  const conten_final_price_cart = document.getElementById(
    "conten_final_price_cart"
  );

  const current_user = JSON.parse(sessionStorage.getItem("current_user"));
  const courses = JSON.parse(localStorage.getItem(`${current_user}`)) || [];

  const total = courses.reduce(
    (acc, el) => acc + parseFloat(el.course_price),
    0
  );

  conten_final_price_cart.innerText = `Total $  ${
    Math.round(total * 100) / 100
  }`;
};

calculateFinalPriceInShoppingCart();
*/
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
