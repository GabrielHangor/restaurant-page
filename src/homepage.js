function renderHomepage() {
  // create nav el
  const mainContainer = document.querySelector("#content");
  const nav = defineElement("nav");
  const links = defineElement("div", "links");
  const about = defineElement("p", null, "About");
  const menu = defineElement("p", null, "Menu");
  const contact = defineElement("p", null, "Contact");

  links.append(about, menu, contact);
  nav.appendChild(links);

  // create main el
  const infoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio sint similique soluta reiciendis adipisci! Vero et, dolor eum a quam autem nostrum, accusamus, incidunt sint ratione fuga possimus laborum.";
  const infoText1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate voluptatem inventore, totam laboriosam recusandae, ipsam, harum nulla repellat fugiat commodi culpa. Impedit laborum est animi modi eos voluptatibus eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem a expedita veritatis. Amet cupiditate tenetur numquam laudantium iure dignissimos vel repudiandae fugiat doloribus omnis, ullam aspernatur assumenda accusamus impedit?";

  const main = defineElement("main");
  const info = defineElement("div", "info", infoText);
  const info1 = defineElement("div", "info1", infoText1);
  const picture = defineElement("div", "picture");
  const img = defineElement("img", null, null, "burger.svg");

  picture.appendChild(img);
  main.append(info, info1, picture);
  mainContainer.append(nav, main);
}

function defineElement(definition, className, innerContent, source) {
  const element = document.createElement(definition);
  element.className = className;
  element.textContent = innerContent;
  element.src = source;

  return element;
}

export default renderHomepage;
