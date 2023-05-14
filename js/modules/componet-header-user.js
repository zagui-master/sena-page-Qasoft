/** @format */

const contenHeader = document.getElementById("header");

const renderHeader = () => {
  return `
    <div class="conteiner-header">

        <div class="conten-logo-user">
          <h1 class="logo">Qasoft</h1>
          <span class="conteiner-user-name" id="conteiner_user_name"></span>
        </div>
    
        <div class="conteniner-menu">

          <ul class="menu">

            <li class="item-menu">
              <div class="lateral-bar focus-bar"></div>
              <a href="#" class="link-header focus-link">Courses</a>
            </li>

            <li class="item-menu">
              <div class="lateral-bar"></div>
              <div class="conteiner-shopping-car">
                <img
                  src="../assets/icon-page/icon_shopping_car.svg"
                  alt=""
                  class="icon-header"
                />
                <span id="courses_add" class="counter-courses-add">0</span>
              </div>
            </li>
            
            <li class="item-menu">
              <div class="lateral-bar"></div>
              <div class="conten-icon-user">
                <a href="./profile.html">
                  <img
                    src="../assets/icon-page/icon_user_header.svg"
                    alt=""
                    class="icon-header"
                  />
                </a>
              </div>
            </li>
          
          </ul>
    </div>
    </div>
  `;
};

export const header = () => {
  contenHeader.innerHTML = renderHeader;
};

renderHeader();
