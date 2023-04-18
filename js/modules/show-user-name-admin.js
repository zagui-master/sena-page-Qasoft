/** @format */
import { admin } from "../data/admins.js";

export const showUserNameAdminInheader = () => {
  const location_user_name = document.getElementById("conteiner_user_name");

  const user_account = JSON.parse(sessionStorage.getItem("current_user"));

  const { role, full_name } = admin.find(
    (find) => find.account === user_account
  );

  const adminInformation = `Welcome ${role} ${full_name}`;

  location_user_name.innerText = adminInformation;
};

showUserNameAdminInheader();
