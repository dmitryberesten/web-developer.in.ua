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

  let spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  jokeContainer.classList.remove("show");

  setTimeout(() => {
    spinner.style.display = "none";
    jokeContainer.classList.add("show");
  }, 1000);
}

document.getElementById("loadJoke").addEventListener("click", function () {
  renderJoke();
});

window.addEventListener("load", renderJoke);
