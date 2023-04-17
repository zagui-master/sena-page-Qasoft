/** @format */

export const changeStateCourse = () => {
  const current_user = JSON.parse(sessionStorage.getItem("current_user")) || [];

  let purchased_course =
    JSON.parse(localStorage.getItem(`purchased_${current_user}`)) || [];

  let stock = JSON.parse(localStorage.getItem("stock"));

  for (const el of purchased_course) {
    let find_id_stock = stock.findIndex((find) => find.id == el.id);
    if (find_id_stock !== -1) {
      stock[find_id_stock].state = "Purchased";
    }
  }

  localStorage.setItem(`updated_stock_${current_user}`, JSON.stringify(stock));
};
