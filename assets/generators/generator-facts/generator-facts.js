function getRandomFacts() {
  let randomNumber = Math.floor(Math.random() * facts.length);
  let randomFact = facts[randomNumber];
  return randomFact;
}

function renderFact() {
  let facts = getRandomFacts();
  let factContainer = document.getElementById("fact-box");
  let factString = `<p class="fact"><b>${facts.fact}</b></p><p class="source">${facts.source}`;

  factContainer.innerHTML = factString;
}

document.getElementById("loadFact").addEventListener("click", renderFact);
