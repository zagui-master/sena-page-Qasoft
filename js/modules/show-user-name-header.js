/** @format */

export const showUserNameInheader = () => {
  const location_user_name = document.getElementById("conteiner_user_name");

  const user_account = JSON.parse(sessionStorage.getItem("current_user"));
  const accounts = JSON.parse(sessionStorage.getItem("account")) || [];
  const { name, lastName } = accounts.find(
    (find) => find.email === user_account
  );

  const userInformation = `Welcom ${name} ${lastName}`;

  location_user_name.innerText = userInformation;
};

showUserNameInheader();
