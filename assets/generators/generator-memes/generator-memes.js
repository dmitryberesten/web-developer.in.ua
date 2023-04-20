function getRandomMeme() {
  let randomNumber = Math.floor(Math.random() * memes.length);
  let randomMeme = memes[randomNumber];
  return randomMeme;
}

function renderMeme() {
  let memes = getRandomMeme();
  let memeContainer = document.getElementById("meme-box");
  let memeImg = document.getElementById("meme-img");
  memeImg.src = memes.src;

  let spinner = document.getElementById("spinner");
  spinner.style.display = "none";

  setTimeout(() => {
    memeImg.classList.add("show");
  }, 1000);
}

document.getElementById("loadMeme").addEventListener("click", function () {
  let spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  let memeImg = document.getElementById("meme-img");
  memeImg.classList.remove("show");

  setTimeout(renderMeme, 1000);
});

window.addEventListener("load", renderMeme);
