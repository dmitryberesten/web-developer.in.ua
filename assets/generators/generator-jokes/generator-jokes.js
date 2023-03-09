function getRandomJoke() {
  let randomNumber = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomNumber];
  return randomJoke;
}

function renderJoke() {
  let jokes = getRandomJoke();
  let jokeContainer = document.getElementById("joke-box");
  let jokeString = `<p class="joke"><b>${jokes.joke}</b></p>`;

  jokeContainer.innerHTML = jokeString;
}

document.getElementById("loadJoke").addEventListener("click", renderJoke);
