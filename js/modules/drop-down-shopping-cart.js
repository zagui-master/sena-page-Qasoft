/** @format */

export const dropDownShoppingCart = () => {
  const shopping_cart_icon = document.querySelector(".conteiner-shopping-car");
  const icon_up_shopp = document.querySelector(".conten-icon-up-shopp");
  const cart_shopping_cart = document.querySelector(".cart-shopping-cart");

  shopping_cart_icon.addEventListener("click", () => {
    cart_shopping_cart.classList.add("show");
  });

  icon_up_shopp.addEventListener("click", () => {
    cart_shopping_cart.classList.remove("show");
  });
};

dropDownShoppingCart();
