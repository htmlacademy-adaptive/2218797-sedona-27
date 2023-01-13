let navMain = document.querySelector(".main-navigation");
let navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--openned");
  } else {
    navMain.classList.remove("main-navigation--openned");
    navMain.classList.add("main-navigation--closed");
  }
});
