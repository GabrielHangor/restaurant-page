function renderContact() {
  const mainContainer = document.querySelector("#content");
  const nav = defineElement("nav");
  const links = defineElement("div", "links");
  const about = defineElement("p", null, "About");
  const menu = defineElement("p", null, "Menu");
  const contact = defineElement("p", null, "Contact");
  contact.classList.toggle("toggled");

  links.append(about, menu, contact);
  nav.appendChild(links);

  const address = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima at hic, tempora, vitae, laboriosam id repudiandae assumenda placeat dolorum neque nam qui a voluptatibus quidem obcaecati esse! Fuga, tempore.'
  const contactContainer = defineElement("div", "contact");
  const map = defineElement("div", "map");
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15396.641726000951!2d-45.44095513898358!3d61.15950542080109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4eabe1a5a82ad921%3A0x50f11a07e274158d!2sNarsarsuaq%2C%20Greenland!5e0!3m2!1sen!2sru!4v1612713931222!5m2!1sen!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  const contactInfo = defineElement("div", "contact-info", address);
  contactContainer.append(map, contactInfo);

  mainContainer.append(nav, contactContainer);
}

function defineElement(definition, className, innerContent, source) {
  const element = document.createElement(definition);
  element.className = className;
  element.textContent = innerContent;
  element.src = source;

  return element;
}

export default renderContact;
