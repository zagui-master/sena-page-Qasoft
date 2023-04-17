/** @format */

/*
const searchAccount = () => {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#search_account")) {
      document.querySelectorAll(".card-account").forEach((user_account) => {
        user_account.textContent
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
        ? user_account.classList.remove("filter")
        : user_account.classList.add("filter");
      });
    }
  });
};
searchAccount();

*/

const searchAccount = () => {
  const searchInput = document.getElementById("search_account");

  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const userAccounts = Array.from(document.querySelectorAll(".card-account"));

    userAccounts.forEach((userAccount) => {
      const userAccountText = userAccount.textContent.toLowerCase();

      if (userAccountText.includes(searchValue)) {
        userAccount.classList.remove("filter");
      } else {
        userAccount.classList.add("filter");
      }
    });
  });
};

searchAccount();
