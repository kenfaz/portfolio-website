const burger = document.querySelector(".burger");
const navLinks = document.getElementById("nav-links");
const navDiv = document.querySelector("nav");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navDiv.classList.toggle("show-borders");
});
