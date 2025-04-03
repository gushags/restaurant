// menu.js

// import images
import pArugala from "./img/pizza-arugala.jpg";
import pPepperoni from "./img/pizza-pepperoni.jpg";
import pTomato from "./img/pizza-tomato.jpg";
import oGravy from "./img/omelette-gravy.jpg";
import oPeppers from "./img/omelette-peppers.jpg";
import oSalmon from "./img/omelette-salmon.jpg";
import pairsWith from "./img/pairs.png";

/*<div id="menu-headline">
        <h1>Me<span>nu</span></h1>
      </div>
      <div id="menu-content">
        <div class="paired">
          <div class="p-card">
            <img
              src="./img/pizza-arugala.jpg"
              class="food"
              alt="Arugala Pizza"
            />
            <h3 class="menu-item">The Shepherd</h3>
            <p>
              Arugala and goat cheese play nicely with hand-raised heirloom
              tomatoes. Crust infused with essence of basil. By the slice.
            </p>
            <h4>$12</h4>
          </div>
          <div class="pair-png"><img src="/src/img/pairs.png" alt="" /></div>
          <div class="o-card">
            <img src="./img/omlette-salmon.jpg" alt="Salmon Omelette" />
            <h3 class="menu-item">Lox of Love</h3>
            <p>
              Transport yourself to Paris with a little lox and eggs. Perfectly
              seasoned, perfectly portioned, basically perfect. Definitely not a
              pizza. No substitutions.
            </p>
            <h4>$18</h4>
          </div>
        </div>
        <div class="paired">
          <div class="p-card">
            <img src="./img/pizza-tomato.jpg" class="food" alt="Tomato Pizza" />
            <h3 class="menu-item">Cairo Noon</h3>
            <p>
              It may look like a tomato pizza, but it's riddled with North
              African spices that will make you forget you ever heard the
              pedestrian word, "egg." Enjoy by the slice.
            </p>
            <h4>$11</h4>
          </div>
          <div class="pair-png"><img src="/src/img/pairs.png" alt="" /></div>
          <div class="o-card">
            <img src="./img/omlette-peppers.jpg" alt="Pepper omelet" />
            <h3 class="menu-item">Pepper Palate Cleanser</h3>
            <p>
              Certainly a pizza has its place; but when you've finished rinsing
              the grease off your fingers, please enjoy this light, delicious
              dish which will have you raising your champagne glass in
              acknowledgement of the mighty chicken. No substitutions.
            </p>
            <h4>$15</h4>
          </div>
        </div>
        <div class="paired">
          <div class="p-card">
            <img
              src="./img/pizza-pepperoni.jpg"
              class="food"
              alt="Pepperoni Pizza"
            />
            <h3 class="menu-item">The Homerun</h3>
            <p>
              There's a reason the pepperoni pizza is the most popular of all
              time: it's delicious. Try my take on the icon. And pour your glass
              of champagne on your eggs while enjoying a perfect beer. By the
              slice.
            </p>
            <h4>$13</h4>
          </div>
          <div class="pair-png"><img src="/src/img/pairs.png" alt="" /></div>
          <div class="o-card">
            <img src="./img/omlette-gravy.jpg" alt="Gravy Omelette" />
            <h3 class="menu-item">Hardened Arteries</h3>
            <p>
              Oh now we're just putting processed meats on the menu?! Fine,
              please wash down your cancer-meats with this vat of gravy and
              eggs. No doggie bags. No substitutions.
            </p>
            <h4>$25</h4>
          </div>
        { </div>
      </div> */
function createMenu() {
  const content = document.getElementById("content");

  // Top line
  const menuHead = document.createElement("div");
  menuHead.id = "menu-headline";
  content.appendChild(menuHead);
  const menuH1 = document.createElement("h1");
  menuH1.innerHTML = "Me<span>nu</span>";
  menuHead.appendChild(menuH1);

  // Create cards
  // Pizza side
  let paired = document.createElement("div");
  paired.classList.add("paired");
  content.appendChild(paired);

  let pCard = document.createElement("div");
  pCard.classList.add("p-card");
  paired.appendChild(pCard);
  let img = document.createElement("img");
  img.src = pArugala;
  img.alt = "Arugala Pizza";
  img.classList.add("food");
  pCard.appendChild(img);

  let h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "The Shepherd";
  pCard.appendChild(h3);

  let p = document.createElement("p");
  p.innerText = `Arugala and goat cheese play nicely with hand-raised heirloom tomatoes. Crust infused with essence of basil. By the slice.`;
  pCard.appendChild(p);

  let h4 = document.createElement("h4");
  h4.innerText = "$12";
  pCard.appendChild(h4);

  // Pairs with icon
  let div = document.createElement("div");
  div.classList.add("pair-png");
  paired.appendChild(div);
  let pairsImg = document.createElement("img");
  pairsImg.src = pairsWith;
  div.appendChild(pairsImg);

  // Omelette side
  let oCard = document.createElement("div");
  oCard.classList.add("o-card");
  paired.appendChild(oCard);
  img = document.createElement("img");
  img.src = oSalmon;
  img.alt = "Salmon Omelette";
  img.classList.add("food");
  oCard.appendChild(img);

  h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "Lox of Love";
  oCard.appendChild(h3);

  p = document.createElement("p");
  p.innerText = `Transport yourself to Paris with a little lox and eggs. Perfectly seasoned, perfectly portioned, basically perfect. Definitely not a pizza. No substitutions.`;
  oCard.appendChild(p);

  h4 = document.createElement("h4");
  h4.innerText = "$18";
  oCard.appendChild(h4);

  // Create cards 2nd row
  // Pizza side
  paired = document.createElement("div");
  paired.classList.add("paired");
  content.appendChild(paired);

  pCard = document.createElement("div");
  pCard.classList.add("p-card");
  paired.appendChild(pCard);
  img = document.createElement("img");
  img.src = pTomato;
  img.alt = "Tomato Pizza";
  img.classList.add("food");
  pCard.appendChild(img);

  h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "Cairo Noon";
  pCard.appendChild(h3);

  p = document.createElement("p");
  p.innerText = `It may look like a tomato pizza, but it's riddled with North African spices that will make you forget you ever heard the pedestrian word, "egg." Enjoy by the slice.`;
  pCard.appendChild(p);

  h4 = document.createElement("h4");
  h4.innerText = "$11";
  pCard.appendChild(h4);

  // Pairs with icon
  div = document.createElement("div");
  div.classList.add("pair-png");
  paired.appendChild(div);
  pairsImg = document.createElement("img");
  pairsImg.src = pairsWith;
  div.appendChild(pairsImg);

  // Omelette side
  oCard = document.createElement("div");
  oCard.classList.add("o-card");
  paired.appendChild(oCard);
  img = document.createElement("img");
  img.src = oPeppers;
  img.alt = "Pepper Omelette";
  img.classList.add("food");
  oCard.appendChild(img);

  h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "Pepper Palate Cleanser";
  oCard.appendChild(h3);

  p = document.createElement("p");
  p.innerText = `Certainly a pizza has its place; but when you've finished rinsing the grease off your fingers, please enjoy this light, delicious dish which will have you raising your champagne glass in acknowledgement of the mighty chicken. No substitutions.`;
  oCard.appendChild(p);

  h4 = document.createElement("h4");
  h4.innerText = "$15";
  oCard.appendChild(h4);

  // Create cards 3rd row
  // Pizza side
  paired = document.createElement("div");
  paired.classList.add("paired");
  content.appendChild(paired);

  pCard = document.createElement("div");
  pCard.classList.add("p-card");
  paired.appendChild(pCard);
  img = document.createElement("img");
  img.src = pPepperoni;
  img.alt = "Pepperoni Pizza";
  img.classList.add("food");
  pCard.appendChild(img);

  h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "The Homerun";
  pCard.appendChild(h3);

  p = document.createElement("p");
  p.innerText = `There's a reason the pepperoni pizza is the most popular of all time: it's delicious. Try my take on the icon. And pour your glass of champagne on your eggs while enjoying a perfect beer. By the slice.`;
  pCard.appendChild(p);

  h4 = document.createElement("h4");
  h4.innerText = "$13";
  pCard.appendChild(h4);

  // Pairs with icon
  div = document.createElement("div");
  div.classList.add("pair-png");
  paired.appendChild(div);
  pairsImg = document.createElement("img");
  pairsImg.src = pairsWith;
  div.appendChild(pairsImg);

  // Omelette side
  oCard = document.createElement("div");
  oCard.classList.add("o-card");
  paired.appendChild(oCard);
  img = document.createElement("img");
  img.src = oGravy;
  img.alt = "Gravy Omelette";
  img.classList.add("food");
  oCard.appendChild(img);

  h3 = document.createElement("h3");
  h3.classList.add("menu-item");
  h3.innerText = "Hardened Arteries";
  oCard.appendChild(h3);

  p = document.createElement("p");
  p.innerText = `Oh now we're just putting processed meats on the menu?! Fine, please wash down your cancer-meats with this vat of gravy and eggs. No doggie bags. No substitutions.`;
  oCard.appendChild(p);

  h4 = document.createElement("h4");
  h4.innerText = "$25";
  oCard.appendChild(h4);
}

export { createMenu };
