

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

function renderQuote() {
  let quotes = getRandomQuote();
  let quoteContainer = document.getElementById("quote-box");
  let quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;

  quoteContainer.innerHTML = quoteString;
}

document
  .getElementById("loadQuote")
  .addEventListener("click", renderQuote);
