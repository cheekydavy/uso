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
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.navbar-menu a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor click behavior

      const targetId = this.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Simulate a page load - you can replace this alert with your loading logic
        console.log(`Loading content for ${targetId}`);
        
        // Use setTimeout to simulate a loading time if needed
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Smooth scrolling to the section
          });
        }, 500); // Change this delay as per your requirement
      }
    });
  });
});
