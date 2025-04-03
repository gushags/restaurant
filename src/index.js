/* index.js */
import "./css-reset-josh.css";
import "./styles.css";
import "./menu.css";
import "./about.css";

import { createHomepage } from "./homepage.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
  clearContent();
  createHomepage();
});

menuButton.addEventListener("click", () => {
  clearContent();
  createMenu();
});

aboutButton.addEventListener("click", () => {
  clearContent();
  createAbout();
});

function clearContent() {
  const content = document.querySelector("#id");
  // remove all children of #content
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

// Initial page write
createHomepage();
