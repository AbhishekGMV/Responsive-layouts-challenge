const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-toggle");
let navList = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navList.style.display 
    = navList.style.display === "block" ? "none" : "block";
});
