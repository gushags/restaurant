/* about.js */

import monica from "./img/monica.jpg";
import chandler from "./img/chandler.jpg";

function createAbout() {}
const content = document.getElementById("content");

// Headline
const h1 = document.createElement("h1");
h1.id = "about-title";
h1.innerHTML = `A House <span>Divided</span>`;
content.appendChild(h1);

// Chefs container
const chefs = document.createElement("div");
chefs.id = "chefs";
content.appendChild(chefs);

// Chef Monica
let div = document.createElement("div");
div.id = "pizza-chef";
chefs.appendChild(div);
let h3 = document.createElement("h3");
h3.textContent = "Chef Monica";
div.appendChild(h3);
let img = document.createElement("img");
img.src = monica;
img.alt = "Chef Monica";
div.appendChild(img);
let p = document.createElement("p");
p.textContent = `You think pizza isn't haute cuisine? Then you and I might have a very big problem. I double-dog dare you to take one bite of my Cairo Noon pizza and not declare it the greatest slice you've ever experienced. Pizza is not just for games anymore; not the way I make it. But if you're in the mood for something that came out of a chicken's butt, by all means, check out my husband's creations...`;
div.appendChild(p);

// Chef Chandler
div = document.createElement("div");
div.id = "omelette-chef";
chefs.appendChild(div);
h3 = document.createElement("h3");
h3.textContent = "Chef Chandler";
div.appendChild(h3);
img = document.createElement("img");
img.src = chandler;
img.alt = "Chef Chandler";
div.appendChild(img);
p = document.createElement("p");
p.innerHTML = `You know <em>I know</em> that she knows how to use that knife, so I'll just say this: an omelette in the hands of a master is not simply eggs and ingredients. It is an experience that can transport you back in time, to your mother's kitchen, or throw you completely off balance, and make you think you've teleported to Paris. I invite you to experience that today, on the omelette side of A House Divided. (No substitutions.)`;
div.appendChild(p);

export { createAbout };
/*
<h1 id="about-title">A House <span>Divided</span></h1>
      <div id="chefs">
        <div id="pizza-chef">
          <h3>Chef Monica</h3>
          <img src="./img/monica.jpg" alt="Chef Monica" />
          <p>
            You think pizza isn't haute cuisine? Then you and I might have a
            very big problem. I double-dog dare you to take one bite of my Cairo
            Noon pizza and not declare it the greatest slice you've ever
            experienced. Pizza is not just for games anymore; not the way I make
            it. But if you're in the mood for something that came out of a
            chicken's butt, by all means, check out my husband's creations...
          </p>
        </div>
        <div id="omelette-chef">
          <h3>Chef Chandler</h3>
          <img src="./img/chandler.jpg" alt="" />
          <p>
            You know <em>I know</em> that she knows how to use that knife, so
            I'll just say this: an omelette in the hands of a master is not
            simply eggs and ingredients. It is an experience that can transport
            you back in time, to your mother's kitchen, or throw you completely
            off balance, and make you think you've teleported to Paris. I invite
            you to experience that today, on the omelette side of A House
            Divided. (No substitutions.)
          </p>
        </div>
      </div> */
