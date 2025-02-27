const toggleBtn = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
let lastScrollY = window.scrollY;

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !toggleBtn.contains(event.target) &&
    !menu.contains(event.target) &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
  }
});
