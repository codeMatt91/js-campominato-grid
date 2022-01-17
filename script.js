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
2- Creo la funzione che genera numero random 
3- Creo le 3 tipologie di griglia con una funzione
4- creo le condizioni in base alla scelta
5-riempio le condizioni per far si che si riempia alla scelta dell'utente 

*/

//! ***********************************  FUNCTION    ************************************

// * Funzione che mi genera un numero random 
function getRandomNum(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// * Funzione che mi crea le celle e le mette in tabella con numero random 
function generateCells(number,min,max){
   for(let i = 0; i < number; i++){
      const element = document.createElement('div');
      grid.appendChild(element);
      element.className = 'cell';

      element.append(getRandomNum(min,max));
   }
}


//! ****************************************  LOGIC    ****************************************

//* Recupero elementi in pagina 
const userChoice = document.getElementById('select');
const grid = document.getElementById('grid');
const generate = document.getElementById('generate');

//* Le mie variabili
const level1 = 100;
const level2 = 81;
const level3 = 49;




// * Al click genero la tabella 
generate.addEventListener('click', function(){
   
   const levelChoise = userChoice.value;

   if (levelChoise === 'level1'){

      generateCells(level1,1,100);
      grid.style.width = '400px';
      
   }else if (levelChoise === 'level2'){
      generateCells(level2,1,81);
      grid.style.width = '360px'

      
   } else {
      generateCells(level3,1,49);
      grid.style.width = '280px';
      
   }

})
