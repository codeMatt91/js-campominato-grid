console.log('JS OK!')

/*

Consegna
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100 (10x10)
con difficoltà 2 => tra 1 e 81 (9x9)
con difficoltà 3 => tra 1 e 49 (7x7)
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

1- Recupero la scelta dell'utente
2- chiaro le variabili che mi servono
2- Creo la funzione che genera numero random ( per tutti e 3 i casi)
3- Creo le 3 tipologie di griglia con una funzione
4- creo le condizioni in base alla scelta
5-riempio le condizioni per far si che si riempia alla scelta dell'utente 

*/

//* Scelta dell'utente 
const userChoice = document.getElementById('select');

//* Le mie variabili
const level1 = 100;
const level2 = 81;
const level3 = 49;