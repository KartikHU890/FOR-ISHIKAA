const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

function playMusic() {
  music.play().catch(() => {});
}

function clear() {
  app.innerHTML = "";
  app.style.animation = "none";
  app.offsetHeight;
  app.style.animation = null;
}

function pageOne() {
  playMusic();
  clear();
  app.innerHTML = `
    <img src="ishika.jpeg"> style="width:150px; border-radius:12px;">
    <h1>HELLOOO ISHIKAA 💗</h1>
    <p>I made something special…<br>Just for you 🌸</p>
    <button onclick="pageTwo()">Okay…????</button>
  `;
}

function pageTwo() {
  clear();
  app.innerHTML = `
    <img src="ishika2.jpeg" style="width:180px">
    <h1>BEFORE THATT-</h1>
    <p>Do you know you are my favorite person? 💕</p>
    <p>Do you know you look extra good when you're with me? 👀</p>
    <p>Do you know I feel happiest around you? 🌷</p>
    <button onclick="pageThree()">OFCCCC</button>
  `;
}

function pageThree() {
  clear();
  app.innerHTML = `
    <img src="ishika4.jpeg" style="width:185px">
    <h1>UK Why You’re Special? 🌸</h1>
    <p>
      You’re special because you’re just… you.<br><br>
      You don’t pretend.<br>
      You don’t change.<br><br>
      And I love you a lot for being exactly the way you are 💗
    </p>
    <button onclick="pageFour()">Heart to heart 💌</button>
  `;
}

function pageFour() {
  clear();
  app.innerHTML = `
    <img src="ishika33.jpeg" style="width:200px">
    <p>
      I am forever grateful to September 🌙<br>
      Because September gave me youuu ofc.<br><br>
      I feel the happiest with you &lt;3.<br><br>
      So… is it a yes ISHIKAAA??? 💗
    </p>
    <button onclick="pageFive()">YESSSS 💕</button>
  `;
}

function pageFive() {
  clear();
  app.innerHTML = `
    <img src="bhondu.jpg" style="width:180px">
    <h1>FOREVER MY LUCKY CHARM &lt;33</h1>
    <p>ISHIKAAA… 🌸<br>I love you so much.</p>
    <button onclick="alert('You made my heart smile 💗')">
      I love you too 🥹
    </button>
  `;
}

pageOne();

