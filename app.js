import RouteHandler from "./router.js";
import "./store.js";

window.onhashchange = () => {
  setActiveLink();
};

function setActiveLink() {
  const links = document.querySelectorAll(".header-link");

  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const currentPath = window.location.hash;

    linkPath === currentPath
      ? link.classList.add("active")
      : link.classList.remove("active");
  });
}

class App {
  constructor() {
    new RouteHandler();
  }
}

new App();
