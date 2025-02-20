import "./gsap-animations";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__menu");
  const tabBtns = document.querySelectorAll(".tariffs__tab-btn");
  const headerNavLinks = document.querySelectorAll(".header__link");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((button) =>
        button.classList.remove("tariffs__tab-btn--active")
      );

      btn.classList.add("tariffs__tab-btn--active");
    });
  });

  function toggleClassOnClick(element, target, className) {
    element.addEventListener("click", () => {
      element.classList.toggle(className);
      target.classList.toggle("header__menu--active");
    });
  }

  function removeClassOnResize(...elements) {
    window.addEventListener("resize", () => {
      elements.forEach((el) =>
        el.classList.remove("burger-btn--active", "header__menu--active")
      );
    });
  }

  headerNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("header__menu--active");
      burgerBtn.classList.remove("burger-btn--active");
    });
  });

  toggleClassOnClick(burgerBtn, menu, "burger-btn--active");

  removeClassOnResize(burgerBtn, menu);
});
