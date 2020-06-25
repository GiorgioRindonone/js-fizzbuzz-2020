
var listanum = document.getElementById("listanum");

var quantitanum = parseInt(prompt("quanti numeri vuoi generare?"));
var generati = [];
for (var i = 0; i < quantitanum; i++) {
  generati.push(i+1) ;

 listanum.innerHTML = "";

  if  (i % 3 == 0 && i % 5 == 0) {
    console.log("fixbuz");
  }

  else if (i%3 == 0) {
    console.log("fix");
  }

  else if (i%5== 0) {
    console.log("buzz");
  }

  listanum.innerHTML += "<li>" generati[i] + "</li>";

  }

console.log(generati);
