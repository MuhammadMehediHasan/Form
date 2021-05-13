const main = document.querySelector("main");
/**
 * Add Card to body
 * @param {[{name:String, version: String, link: String}]} data card config
 */
function register(data) {
  data.forEach((config) => main.appendChild(createCard(config)));

  document.querySelectorAll(".card-wrapper").forEach((elem, index) => {
    let position = index + 1;
    // if( position % 5 === 0) position = 1;
    gsap.to(elem, {
      scrollTrigger: elem,
      translateX: "0%",
      opacity: 1,
      duration: position * 0.15,
      // delay: 2
    });
  });
}

/**
 * Add Card to Body
 * @param {{name:String, version: String, link: String}} data card Config
 */
function createCard(data) {
  //? Low Level Data
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = data.name;
  ///
  const version = document.createElement("div");
  version.classList.add("version");
  version.textContent = data.version;
  /// Icon
  const button_wrapper = document.createElement("div");
  button_wrapper.classList.add("btn_wrapper");

  const icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-external-link-alt");

  button_wrapper.appendChild(icon);

  // ? Higher Element
  const link = document.createElement("a");
  link.href = data.link;

  link.appendChild(title);
  link.appendChild(version);
  link.appendChild(button_wrapper);

  /// main card
  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(link);

  // Main wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("card-wrapper");
  wrapper.appendChild(card);

  return wrapper;
}

/////////////////////////////
/////////////////////////////

register([
  {
    name: "Basic My Form",
    version: "0.0.1",
    link: "/view/form.html",
  },
  {
    name: "Basic Sign Up Form",
    version: "0.0.1",
    link: "/view/form.html",
  },

  // Dummy
  {
    name: "Advanced Login Form",
    version: "0.0.1",
    link: "/view/form.html",
  },
  {
    name: "Basic Sign Up Form",
    version: "0.0.1",
    link: "/view/form.html",
  },
  {
    name: "Basic Login Form",
    version: "0.0.1",
    link: "/view/form.html",
  },
  {
    name: "Basic Sign Up Form",
    version: "0.0.1",
    link: "/view/form.html",
  },
  {
    name: "Basic Login Form",
    version: "0.0.1",
    link: "/view/form.html",
  }
]);
