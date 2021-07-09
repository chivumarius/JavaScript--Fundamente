/* =============================================================
   MATRICI:
   METODA 'REDUCE()' PT. OBTINEREA 'SUMEI VALORILOR' UNEI 'MATRICE'
============================================================= */

/*
  (*) SA SE 'CALCULEZE' - 'VALOAREA' FIECARUI 'NUMAR'
      AL 'MATRICEI' DATE.

  (*) ACEASTA VA VI 'SIMILARA' CU:
      CALCULAREA 'PRETULUI TOTAL' AL 'TUTUROR ARTICOLELOR'
      AL UNUI 'COS DE CUMPARATURI'.    
  (*) FIECARE 'NUMAR' VA 'REPREZENTA' 
         => 'PRETUL' UNUI 'ARTICOL' DIN 'COSUL DE CUMPARATURI'
*/


/*
    METODA 'REDUCE(CALLBACK FN)':

        => 'REDUCEREA' TUTUROR 'ELEMENTELOR' DINTR-O 'MATRICE' 
        => INTR-O SINGURA 'VALOARE'.



    SINTAXA:

     matrice.reduce( function (acumulator, valoareaCurenta) => {

     }, initializareAcumulator );
*/



//=============================================================
// MATRICEA
const numere = [1, -1, 2, 3];



//=============================================================
// (1) SOLUTIA 1
// ALGORITMUL DE CALCULARE A SUMEI TOTALE:
//=============================================================

//=============================================================
// INITIALIZAM VARIABILA:
let suma = 0;


//=============================================================
// ITERAM ASUPRA MATRICEI SI ADAUGAM NUMERE IN SUMA:
for (let nr of numere)
//  suma =sum + nr;
    suma += nr;


//=============================================================
// AFISARE:
console.log(suma);




//=============================================================
// (2) SOLUTIA 2  - METODA 'REDUCE()'
//=============================================================

// SUMA = 0,   VAL_CURENTA = 1   =>   SUMA = 1
// SUMA = 1,   VAL_CURENTA =-1   =>   SUMA = 0
// SUMA = 0,   VAL_CURENTA = 2   =>   SUMA = 2
// SUMA = 2,   VAL_CURENTA = 3   =>   SUMA = 5

//=============================================================
// METODA 'REDUCE()'
const suma2 = numere.reduce((sumaAcumulata, valoareCurenta) => {
    return sumaAcumulata + valoareCurenta;
}, 0);



//=============================================================
// AFISARE:
console.log(suma2);






//=============================================================
// (3.1) SOLUTIA 2  - FORMA SCURTA 'REDUCE()' (1)
//=============================================================

// SUMA = 1,   VAL_CURENTA =-1   =>   SUMA = 0
// SUMA = 0,   VAL_CURENTA = 2   =>   SUMA = 2
// SUMA = 2,   VAL_CURENTA = 3   =>   SUMA = 5

//=============================================================
// METODA 'REDUCE()'
const suma3 = numere.reduce((sumaAcumulata, valoareCurenta) => {
    return sumaAcumulata + valoareCurenta;
});



//=============================================================
// AFISARE:
console.log(suma3);





//=============================================================
// (3.2) SOLUTIA 2  - FORMA SCURTA 'REDUCE()' (2) <= RECOMANDATA
//=============================================================

//=============================================================
// METODA 'REDUCE()'
const suma4 = numere.reduce(
    (sumaAcumulata, valoareCurenta) => sumaAcumulata + valoareCurenta
);


//=============================================================
// AFISARE:
console.log(suma4);