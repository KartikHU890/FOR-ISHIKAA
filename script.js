const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

function playMusic() {
  if (music) {
    music.play().catch(() => {});
  }
}

function clearApp() {
  app.innerHTML = "";
}

/* PAGE 1 */
function pageOne() {
  playMusic();
  clearApp();

  app.innerHTML = `
    <img src="ishika.jpeg" class="main-img">
    <h1>HELLOOO ISHIKAA 💗</h1>
    <p>I made something special...<br>Just for you 🌸</p>
    <button onclick="pageTwo()">Okay...????</button>
  `;
}

/* PAGE 2 */
function pageTwo() {
  clearApp();

  app.innerHTML = `
    <img src="ishika2.jpeg" class="small-img">
    <h1>BEFORE THAT-</h1>
    <p>Do you know you are my favorite person? 💕</p>
    <p>Do you know you look extra good when you're with me 🥺</p>
    <p>Do you know I feel happiest around you 💗</p>
    <button onclick="pageThree()">OFCCCC</button>
  `;
}

/* PAGE 3 */
function pageThree() {
  clearApp();

  app.innerHTML = `
    <h1>Just one thing 💖</h1>
    <p>This little website is just a reminder…</p>
    <p>You matter to me. A lot 🫶</p>
    <p>Always will 🌙</p>
  `;
}

/* load first page automatically */
pageOne();









