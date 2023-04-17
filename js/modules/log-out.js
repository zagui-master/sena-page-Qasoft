/** @format */
import { url } from "../helpers/urls.js";

export const logOut = () => {
  const btn_log_out = document.getElementById("btn_log_out");

  btn_log_out.addEventListener("click", () => {
    //location.replace(url.log_in);
    window.open(url.log_in, "_blank");
    window.close();
  });
};
logOut();
