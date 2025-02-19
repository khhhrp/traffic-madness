import "./gsap-animations";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__menu");

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

  toggleClassOnClick(burgerBtn, menu, "burger-btn--active");
  removeClassOnResize(burgerBtn, menu);
});
