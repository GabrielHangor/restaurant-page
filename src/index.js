import renderHomepage from "./homepage";
import renderMenu from "./menu";
import renderContact from "./contact";

const content = document.querySelector("#content");

function renderModule(e) {
  if (e.target.parentElement.classList.contains("links")) {
    content.textContent = "";
    if (e.target.classList.contains("aboutBtn")) {
      renderHomepage();
    } else if (e.target.classList.contains("menuBtn")) {
      renderMenu();
    } else if (e.target.classList.contains("contactBtn")) {
      renderContact();
    }
  }
}

content.addEventListener("click", renderModule);

renderHomepage();
