var kmPercorsi = Math.abs((prompt("quanti Km deve percorrere?")));
var etaPasseggero = Math.abs((prompt("Quanti anni ha?")));
var prezzoIntero = (kmPercorsi * 0.21).toFixed(2);
var prezzoOver65 = (prezzoIntero - (prezzoIntero * 0.4)).toFixed(2);
var prezzoUnder18 = (prezzoIntero - (prezzoIntero * 0.2)).toFixed(2);

if (isNaN(kmPercorsi)  || isNaN(etaPasseggero)) {
  alert("ERRORE! Km percorsi o eta' Non sono stati inseriti correttamente.");
  alert("RICARICARE LA PAGINA");
} else  {
  if (etaPasseggero > 0 && etaPasseggero < 18 ) {
    document.getElementById('stamp').innerHTML = ("il prezzo del suo biglietto è: " + prezzoUnder18 + "€");
    console.log("prezzo Minorenne");
  } else if (etaPasseggero >= 65) {
    document.getElementById('stamp').innerHTML = ("il prezzo del suo biglietto è: " + prezzoOver65 + "€");
    console.log("prezzo Over65");
  } else {
    document.getElementById('stamp').innerHTML = ("il prezzo del suo biglietto è: " + prezzoIntero + "€");
    console.log("prezzo Intero");
  }
}
