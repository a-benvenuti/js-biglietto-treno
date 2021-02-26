var kmPercorsi = prompt("quanti Km deve percorrere?");
var etaPasseggero = prompt("Quanti anni ha?");
var prezzoIntero = (kmPercorsi * 0.21).toFixed(2);
var prezzoOver65 = (prezzoIntero - (prezzoIntero * 0.4)).toFixed(2);
var prezzoUnder18 = (prezzoIntero - (prezzoIntero * 0.2)).toFixed(2);

if (isNaN(kmPercorsi)  || isNaN(etaPasseggero)) {
  alert("ERRORE! Km percorsi o eta' Non sono stati inseriti correttamente.");
  kmPercorsi = prompt("quanti Km deve percorrere?");
  etaPasseggero = prompt("Quanti anni ha?");
} else  {
  console.log(prezzoIntero);
  console.log(prezzoOver65);
  console.log(prezzoUnder18);
}
