const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

// play background music
function playMusic() {
  music.volume = 0.5;
  music.play().catch(() => {
    console.log("Autoplay blocked, will play after click");
  });
}

// clear screen
function clear() {
  app.innerHTML = "";
  app.style.animation = "fadeIn 1.2s ease";
}

// PAGE 1
function pageOne() {
  playMusic();
  clear();
  app.innerHTML = `
    <img src="ishika.jpeg" style="width:260px; border-radius:20px;" />
    <h1>HELLOOO ISHIKAA 💗</h1>
    <p>I made something special…<br>Just for you 🌸</p>
    <button onclick="pageTwo()">Okay...????</button>
  `;
}

// PAGE 2
function pageTwo() {
  clear();
  app.innerHTML = `
    <img src="ishika2.jpeg" style="width:200px; border-radius:20px;" />
    <h1>BEFORE THAT-</h1>
    <p>Do you know you are my favorite person? 💕</p>
    <p>Do you know you look extra good when you're with me? 🖤</p>
    <button onclick="pageThree()">Hmm?</button>
  `;
}

// PAGE 3
function pageThree() {
  clear();
  app.innerHTML = `
    <h1>ONE LAST THING 💖</h1>
    <p>
      I don’t know how to say this perfectly,<br>
      but having you in my life makes everything softer,<br>
      calmer… and happier 🌷
    </p>
    <p>
      This little website is just a reminder<br>
      that you matter to me. A lot. 💗
    </p>
    <h2>— Yours 🤍</h2>
  `;
}

// start
pageOne();







