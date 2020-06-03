// CONSEGNA
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
//  raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia
//  il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100,
// con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

// GENERARE I NUMERI CASUALI

function generaListaBombe(quantitaNumeri, limiteMassimo){
  var arrayNumeri = [];
  while (arrayNumeri.length <= quantitaNumeri) {
  var numeroRandom =  Math.floor(Math.random() * limiteMassimo);
    if (!arrayNumeri.includes(numeroRandom)) {
      arrayNumeri.push(numeroRandom);

    }

  }
  return arrayNumeri;
}

// Numeri casuali generati dall'array
var arrayBombe = generaListaBombe(16, 100);
console.log(arrayBombe);



// VERIFICO SE IL NUMERO E' PRESENTE NELLA LISTA



var trovataBomba = false;
var arrayTentativi = [];
var numeroTentativi = 0
console.log(numeroTentativi);

while ( (arrayTentativi.length <= 84) && (trovataBomba == false ) ){
  arrayTentativi.push(numeroTentativi + 1);
  console.log(arrayTentativi);
  // CHIEDO ALL'UTENTE I NUMERI DA INSERIRE
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
  console.log(numeroUtente);

  console.log("Numero utente è "+ numeroUtente);

  // Controllo se il numero inserito è contenuto nell'arrayBombe
  if (numeroUtente == arrayBombe.length){
    trovataBomba = true;
  }

}
  // Comunico il risultato
if (trovataBomba == true) {
  console.log("Hai perso");

} else if (arrayTentativi.length == 84 && trovataBomba == false) {
  console.log("Hai vinto");
}
