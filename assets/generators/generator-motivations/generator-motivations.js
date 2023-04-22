function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

function renderQuote() {
  let quotes = getRandomQuote();
  let quoteContainer = document.getElementById("quote-box");
  let quoteString = `<p class="quote"><b>${quotes.quote}</b></p><p class="source">${quotes.source}`;

  quoteContainer.innerHTML = quoteString;

  let spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  quoteContainer.classList.remove("show");

  setTimeout(() => {
    spinner.style.display = "none";
    quoteContainer.classList.add("show");
  }, 1000);
}

document.getElementById("loadQuote").addEventListener("click", function () {
  renderQuote();
});

window.addEventListener("load", renderQuote);
