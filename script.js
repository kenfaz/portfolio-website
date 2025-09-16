const burger = document.querySelector(".burger");
const navLinks = document.getElementById("nav-links");
const navDiv = document.querySelector("nav");
const homeLink = document.querySelector("#home-link");
const burgerMenu = document.querySelector("nav.show-borders");
const skillsLink = document.querySelector("#skills-link");
const educationLink = document.querySelector("#education-link");
const projectsLink = document.querySelector("#projects-link");
const aboutMeLink = document.querySelector("#about-me-link");

// Burger menu
burger.addEventListener("click", () => {
    if (navLinks.classList.contains("hide-links")) {
      navLinks.classList.remove("hide-links");
    }
    if (navDiv.classList.contains("hide-burger")) {
      navDiv.classList.remove("hide-burger");
    }
  navLinks.classList.toggle("show-links");
  navDiv.classList.toggle("show-burger");
});

// Close the burger menu
document.addEventListener("click", (e) => {
  if (e.target != burger && e.target != navDiv && e.target != educationLink) {
    if (navLinks.classList.contains("show-links")) {
      console.log("asdf");
      navLinks.classList.remove("show-links");
    }
    if (navDiv.classList.contains("show-burger")) {
      navDiv.classList.remove("show-burger");
    }
    navLinks.classList.toggle("hide-links");
    navDiv.classList.toggle("hide-burger");
  }
});

// Highlight the section the user is
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
      homeLink.classList.add("cycle-links");
      skillsLink.classList.remove("cycle-links");
      educationLink.classList.remove("cycle-links");
      projectsLink.classList.remove("cycle-links");
      aboutMeLink.classList.remove("cycle-links");
      break;
    case "skills":
      skillsLink.classList.add("cycle-links");
      homeLink.classList.remove("cycle-links");
      educationLink.classList.remove("cycle-links");
      projectsLink.classList.remove("cycle-links");
      aboutMeLink.classList.remove("cycle-links");
      break;

    case "education":
      educationLink.classList.add("cycle-links");
      homeLink.classList.remove("cycle-links");
      skillsLink.classList.remove("cycle-links");
      projectsLink.classList.remove("cycle-links");
      aboutMeLink.classList.remove("cycle-links");
      break;

    case "projects":
      projectsLink.classList.add("cycle-links");
      homeLink.classList.remove("cycle-links");
      skillsLink.classList.remove("cycle-links");
      educationLink.classList.remove("cycle-links");
      aboutMeLink.classList.remove("cycle-links");
      break;

    case "about-me":
      aboutMeLink.classList.add("cycle-links");
      homeLink.classList.remove("cycle-links");
      skillsLink.classList.remove("cycle-links");
      educationLink.classList.remove("cycle-links");
      projectsLink.classList.remove("cycle-links");
      break;

    default:
      break;
  }
});

// Wallpaper showcase
document
  .getElementById("wallpaper-engine")
  .addEventListener("click", function () {
    window.location.href = "src/extras/wallpaper_showcases/index.html";
  });
