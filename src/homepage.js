// homepage.js

function createHomepage() {
  // main section
  const content = document.getElementById("content");

  // hero section
  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.appendChild(hero);

  const divided = document.createElement("div");
  divided.id = "divided";
  content.appendChild(divided);

  // The pizza side
  const pizza = document.createElement("div");
  pizza.id = "pizza";
  divided.appendChild(pizza);
  const chefs = document.createElement("h3");
  chefs.textContent = "TWO WORLD CLASS CHEFS.";
  pizza.appendChild(chefs);
  const incredible = document.createElement("h4");
  incredible.textContent = "One incredible";
  pizza.appendChild(incredible);
  const welcome = document.createElement("h5");
  welcome.textContent = "Welcome";
  pizza.appendChild(welcome);
  const house = document.createElement("h1");
  house.textContent = "A HOUSE";
  pizza.appendChild(house);

  // Omelette side
  const omelette = document.createElement("div");
  omelette.id = "omelette";
  divided.appendChild(omelette);
  const dishes = document.createElement("h3");
  dishes.textContent = "Two favorite dishes.";
  omelette.appendChild(dishes);
  const dining = document.createElement("h4");
  dining.textContent = "dining experience";
  omelette.appendChild(dining);
  const to = document.createElement("h5");
  to.textContent = "to...";
  omelette.appendChild(to);
  const divide = document.createElement("h1");
  divide.textContent = "Divided";
  omelette.appendChild(divide);
}

export { createHomepage };
