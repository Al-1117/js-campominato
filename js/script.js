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

// ELEMENTI HTML


// GENERARE I NUMERI CASUALI


// Funzione per generare array bombe
// Inserire quantità di bombe desiderata ed il limite massimo di numeri
function generaListaBombe(quantitaNumeri, limiteMassimo){
  var arrayNumeri = [];
  while (arrayNumeri.length <= (quantitaNumeri - 1)) {
  var numeroRandom =  Math.floor(Math.random() * limiteMassimo);
    // Verifica se il numero è incluso o meno prima di aggiungerlo all'array in
    // in modo da non aggiungere numeri doppi
    if (!arrayNumeri.includes(numeroRandom)) {
      arrayNumeri.push(numeroRandom);

    }

  }
  return arrayNumeri;
}
// Funzione per controllare se un elemento si trova in array o meno
// Inserire l'elemento e la lista array
// torna un booleano, vero o falso
function controllareElementoArray(elemento, array){
  var inArray = false;
  for (var i = 0; i < array.length; i++) {
    if (elemento == array[i]) {
      inArray = true;
    }
  }
  return inArray;
}

// OPZIONI DI GIOCO
// Scelta difficolta

var difficolta = parseInt(prompt("Scegli il livello da 0 a 2"));

switch (difficolta) {
  case 0:
    difficolta = 100;

    break;
    case 1:
    difficolta = 80;

    break;

    case 2:
    difficolta = 50;
    break;

  default:
  difficolta = 100;

}
console.log(difficolta);

// Numero Bombe
var numeroBombe = 16;

// Array Bombe
var arrayBombe = generaListaBombe(numeroBombe, difficolta);
console.log(arrayBombe);
// Numero di tentativi massimi che cambia in base alla difficolta
var numeroMassimoTentativi = difficolta - numeroBombe ;
console.log("il numero di tentativi massimi è " + numeroMassimoTentativi);
var punteggio = 0;
var bombaTrovata = false;

// Chiedo all'utente di inserire numeri con ciclo while
while ((punteggio < numeroMassimoTentativi) && (bombaTrovata == false) ) {


  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a " + difficolta));


  // Creo l'array dei numeri che inserisce l'utente ai fini della validazione
  // appendendo ogni numero che inserisce l'utente all'array
  var arrayInputUtente = [''];
  for (var i = 0; i < punteggio; i++) {
    

    arrayInputUtente.push(numeroUtente);
    console.log("Questo è arrayInputUtente" + arrayInputUtente);
    console.log("Questo è l'altro numero utente" + numeroUtente);
  }


  // Controllo che l'utente abbia inserito il numero valido
  while ( (numeroUtente.length == 0) || (numeroUtente > difficolta) || (isNaN(numeroUtente)) || (numeroUtente == arrayInputUtente[i]) ) {
    var numeroUtente = parseInt(prompt(" Errore, numero non valido. Inserisci un numero da 1 a " + difficolta));
  }
  // console.log(numeroUtente);


  // il ciclo va avanti finche non trova il numero bomba

  if (controllareElementoArray(numeroUtente, arrayBombe) == true ) {
    bombaTrovata = true;

  }
  punteggio++

}

// Comunico il risultato ed il relativo punteggio
if (bombaTrovata) {
  console.log("Hai preso la bomba! Hai perso");

}
else {
  console.log("Bravo hai vinto");
}
console.log("Questo è il punteggio " + punteggio);
