const header = document.querySelector(".header");

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  header.classList.toggle("active", scrollY > 150);
}
