/** @format */

const showUserInformationInProfile = () => {
  const location_user_name = document.getElementById("full_name_user");

  const user_account = JSON.parse(sessionStorage.getItem("current_user"));
  const accounts = JSON.parse(sessionStorage.getItem("account")) || [];
  const { name, lastName } = accounts.find(
    (account) => account.email === user_account
  );

  const userInformation = `${name} ${lastName}`;

  location_user_name.innerText = userInformation;
};

showUserInformationInProfile();
