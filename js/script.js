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

function generaNumeriCasuali(quantitaNumeri, limiteMassimo){
  var arrayNumeri = [];
  for (var i = 0; i < quantitaNumeri; i++) {
  var numeroRandom =  Math.floor(Math.random() * limiteMassimo) + 1;
    arrayNumeri.push(numeroRandom);
  }
  return arrayNumeri;
}

// Numeri casuali generati dall'array
var numeriCasuali = generaNumeriCasuali(16, 100);
console.log(numeriCasuali);

// CHIEDO ALL'UTENTE I NUMERI DA INSERIRE
var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
console.log(numeroUtente);

// // VERIFICO SE IL NUMERO E' PRESENTE NELLA LISTA
switch (numeroUtente) {
  case numeriCasuali.length == numeroUtente:
  console.log("errore");
    break;
  default:

}



// // VERIFICO SE IL NUMERO E' PRESENTE NELLA LISTA
// var verifica = false;
// var i = 0;
// while ( (i < 84) && (verifica == false) && (numeroUtente != numeriCasuali.length) ) {
//   var nuovoNumero = parseInt(prompt("Inserisci un altro numero compreso tra 1 e 100"));
//   console.log(nuovoNumero);
//
//   if (numeroUtente == numeriCasuali.length) {
//     verifica = true;
//   }
//
//   if (verifica) {
//     console.log("Hai perso");
//
//   }
//
//   i++;
//
//
//
// }
