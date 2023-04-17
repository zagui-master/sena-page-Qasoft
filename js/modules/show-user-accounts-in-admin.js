/** @format */

export const showUserAccountsInAdmin = () => {
  const accounts = JSON.parse(sessionStorage.getItem("account")) || [];
  const sectionAccounts = document.getElementById("section_accounts_in_admin");

  sectionAccounts.innerHTML = accounts
    .map((account) => {
      return `
      <div class="card-account">
        <div class="conten-info">
          <span class="card-account-title">Account</span>
          <span class="card-account-info email">${account.email}</span>
        </div>
        <div class="conten-info">
          <span class="card-account-title">Full name</span>
          <span class="card-account-info">${account.name} ${account.lastName}</span>
        </div>
        <div class="conten-info">
          <span class="card-account-title">Phone number</span>
          <span class="card-account-info">${account.phoneNumber}</span>
        </div>
        <div class="conten-info">
          <span class="card-account-title">Password</span>
          <span class="card-account-info">${account.password}</span>
        </div>
        <button class="btn-delete-account">Delete account</button>
      </div>
    `;
    })
    .join("");
};

showUserAccountsInAdmin();
