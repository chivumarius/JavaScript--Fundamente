/* =============================================================
   MATRICI:
   METODELE 'EVERY()' & 'SOME()' (PT. TESTAREA  ELEM.  MATRICEI)
============================================================= */

/*
    METODA 'EVERY()':
        => 'VERIFICA' DACA 'TOATE ELEMENTELE MATRICEI' SE 'POTRIVESC' 
        => CU 'CRITERIILE DATE'.
    
    SINTAXA:
        EVERY(
            FUNCTION (VALOARE, INDEXUL_VALORI, MATRICEA){

            });
    
    METODA 'SOME()':
        => 'VERIFICA' DACA 'CEL PUTIN 1 ELEMENT' AL 'MATRICEI' SE 'POTRIVESTE' 
        => CU 'CRITERIILE DATE'.

    NB! ACESTEA SUNT 'METODE NOI' IN 'JAVASCRIPT'
            => SI 'NU SUNT SUPORTATE' DE 'BROWSERELE VECHI'.
*/



console.log('________________________________');

//=============================================================
//   (1) METODA 'EVERY(CALLBACK FUNCTION)' 
//   (PT. 'VERIFICAREA' DACA 'TOATE NR. MATRICEI' SUNT 'POZITIVE')
//=============================================================

// MATRICEA 
// const numere = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numere = [1, -2, 2, 3, 4, 5, 6, 7, 8, 9];

// METODA 'EVERY(CALLBACKFN)'
const toateNrPozitive = numere.every(
    function(valoare) {
        // 'VERIFICAM' DACA 'NR' SUNT 'POZITIVE'
        return valoare >= 0;
    }
);

// AFISARE:
console.log(toateNrPozitive);



//=============================================================
//   (2) METODA 'SOME(CALLBACK FUNCTION)' 
// (PT. 'VERIFICAREA' DACA 'CEL PUTIN UN NR. POZITIV EXISTA IN MATRICEI' SUNT 'POZITIVE')
//=============================================================

// MATRICEA 
const numere2 = [1, -2, 2, 3, 4, 5, 6, 7, 8, 9];

// METODA 'EVERY(CALLBACKFN)'
const celPutinUnNrPozitiv = numere.some(
    function(valoare) {
        // 'VERIFICAM' DACA 'NR' SUNT 'POZITIVE'
        return valoare >= 0;
    }
);

// AFISARE:
console.log(celPutinUnNrPozitiv);


console.log('________________________________');