const burger = document.querySelector(".burger");
const navLinks = document.getElementById("nav-links");
const navDiv = document.querySelector("nav");
const homeLink = document.querySelector("#home-link");
const skillsLink = document.querySelector("#skills-link");
const educationLink = document.querySelector("#education-link");
const projectsLink = document.querySelector("#projects-link");
const aboutMeLink = document.querySelector("#about-me-link");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navDiv.classList.toggle("show-borders");
});

// Check which section the user is


window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let current;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section.id;
    }
  });
  switch (current) {
    case "home":
      homeLink.classList.add("cycle");
      skillsLink.classList.remove("cycle");
      educationLink.classList.remove("cycle");
      projectsLink.classList.remove("cycle");
      aboutMeLink.classList.remove("cycle");
      break;
    case "skills":
      skillsLink.classList.add("cycle");
      homeLink.classList.remove("cycle");
      educationLink.classList.remove("cycle");
      projectsLink.classList.remove("cycle");
      aboutMeLink.classList.remove("cycle");
      break;

    case "education":
      educationLink.classList.add("cycle");
      homeLink.classList.remove("cycle");
      skillsLink.classList.remove("cycle");
      projectsLink.classList.remove("cycle");
      aboutMeLink.classList.remove("cycle");
      break;

    case "projects":
      projectsLink.classList.add("cycle");
      homeLink.classList.remove("cycle");
      skillsLink.classList.remove("cycle");
      educationLink.classList.remove("cycle");
      aboutMeLink.classList.remove("cycle");
      break;

    case "about-me":
      aboutMeLink.classList.add("cycle");
      homeLink.classList.remove("cycle");
      skillsLink.classList.remove("cycle");
      educationLink.classList.remove("cycle");
      projectsLink.classList.remove("cycle");
      break;

    default:
      break;
  }
});
