/** @format */

export const dropDownShoppingCart = () => {
  const modal_shopping_cart = document.querySelector(".modal-shopping-cart");
  const shopping_cart_icon = document.querySelector(".conteiner-shopping-car");
  const cart_shopping_cart = document.querySelector(".cart-shopping-cart");
  const icon_up_shopp = document.querySelector(".conten-icon-up-shopp");
  const header = document.querySelector("#header");

  shopping_cart_icon.addEventListener("click", () => {
    modal_shopping_cart.classList.add("show");
    cart_shopping_cart.classList.add("show");
  });

  modal_shopping_cart.addEventListener("click", () => {
    modal_shopping_cart.classList.remove("show");
    cart_shopping_cart.classList.remove("show");
  });

  header.addEventListener("click", () => {
    modal_shopping_cart.classList.remove("show");
    cart_shopping_cart.classList.remove("show");
  });

  icon_up_shopp.addEventListener("click", () => {
    modal_shopping_cart.classList.remove("show");
    cart_shopping_cart.classList.remove("show");
  });
};

dropDownShoppingCart();
