function getRandomMeme() {
  let randomNumber = Math.floor(Math.random() * memes.length);
  let randomMeme = memes[randomNumber];
  return randomMeme;
}

function renderMeme() {
  let memes = getRandomMeme();
  let memeContainer = document.getElementById("meme-box");
  let memeString = `<img src="${memes.src}">`;

  memeContainer.innerHTML = memeString;
}

document.getElementById("loadMeme").addEventListener("click", renderMeme);
