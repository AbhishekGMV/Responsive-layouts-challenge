const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
