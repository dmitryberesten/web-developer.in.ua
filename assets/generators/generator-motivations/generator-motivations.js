document.getElementById("next-quote").addEventListener("click", function() {
   
    let quote = quotes[ Math.floor( Math.random() * quotes.length ) ];
    let phrase = document.querySelector("#phrase");
    let author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];  
});