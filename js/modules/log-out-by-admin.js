/** @format */
import { url } from "../helpers/urls.js";

const logOutAdmin = () => {
  const btn_log_out = document.getElementById("btn_log_out");
  btn_log_out.addEventListener("click", () => {
    window.open(url.log_in, "_blank");
    window.close();
  });
};

logOutAdmin();
