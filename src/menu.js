function renderMenu() {
  // create nav el
  const mainContainer = document.querySelector("#content");
  const nav = defineElement("nav");
  const links = defineElement("div", "links");
  const about = defineElement("p", 'aboutBtn', "About");
  const menu = defineElement("p", 'menuBtn', "Menu");
  const contact = defineElement("p", 'contactBtn', "Contact");
  menu.classList.toggle('toggled');

  links.append(about, menu, contact);
  nav.appendChild(links);

  // create menu el
  const menuContainer = defineElement("div", "menu");
  const mealPicturesArray = [
    "./meals/001-hot-dog.svg",
    "./meals/002-hot-dog-1.svg",
    "./meals/003-pizza.svg",
    "./meals/004-fast-food.svg",
    "./meals/005-hamburger.svg",
    "./meals/006-burger.svg",
  ];

  mealPicturesArray.forEach((picture) => {
    const textInfo =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde qui accusamus est culpa tempore dignissimos, earum voluptates sed exercitationem sapiente, autem beatae, iure commodi maxime tempora laboriosam nostrum magnam?";
  const meal = defineElement("div", "meal");
  const mealPictureContainer = defineElement("div", "meal-picture");
  const mealPicture = defineElement("img", null, null, picture);
  const description = defineElement("div", "description", textInfo);

  mealPictureContainer.appendChild(mealPicture);
  meal.append(mealPictureContainer, description);
  menuContainer.appendChild(meal);
  })

  mainContainer.append(nav, menuContainer);
}

function defineElement(definition, className, innerContent, source) {
  const element = document.createElement(definition);
  element.className = className;
  element.textContent = innerContent;
  element.src = source;

  return element;
}

export default renderMenu;
