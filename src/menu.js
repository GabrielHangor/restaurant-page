function renderMenu() {
  // create nav el
  const mainContainer = document.querySelector("#content");
  const nav = defineElement("nav");
  const links = defineElement("div", "links");
  const about = defineElement("p", null, "About");
  const menu = defineElement("p", null, "Menu");
  const contact = defineElement("p", null, "Contact");

  links.append(about, menu, contact);
  nav.appendChild(links);

  // create menu el
  const textInfo = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde qui accusamus est culpa tempore dignissimos, earum voluptates sed exercitationem sapiente, autem beatae, iure commodi maxime tempora laboriosam nostrum magnam?';
  const menuContainer = defineElement('div', 'menu')
  const meal1 = defineElement('div', 'meal')
  const mealPictureContainer = defineElement('div', 'meal-picture')
  const mealPicture = defineElement('img', null, null, "./meals/001-hot-dog.svg" )
  const description = defineElement('div', 'description', textInfo);


  mealPictureContainer.appendChild(mealPicture);
  meal1.append(mealPictureContainer, description);
  menuContainer.appendChild(meal1);
  
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
