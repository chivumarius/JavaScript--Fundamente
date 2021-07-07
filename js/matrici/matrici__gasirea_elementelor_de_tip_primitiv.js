/* =============================================================
   MATRICI:
   ASIREA  'ELEMENTELOR'  DE  TIP  'PRIMITIV'
============================================================= */

/*
    NB!
    'GASIREA ELEMENTELOR' INTR-O 'MARTOICE' 
        => 'DEPINDE' DE 'TIPUL DATEI' ELEMENTULUI CAUTAT
    
    > CAND 'ELEMENTUL NU EXISTA' IN 'MATRICE'
        => SE 'AFISEAZA' VALOAREA '-1'.
*/

//============================================= ================
//   (1.1) MATRICEA 'NUMERE'
//=============================================================
const numere = [1, 2, 3, 4];


//=============================================================
//   (1.2) METODA 'INDEXOF()' 
//   (PT. IDENTIFICAREA 'INDEXULUI' ELEMENTULUI IN 'MATRICE')
//=============================================================
console.log(numere.indexOf('a'));

// LINIE IN CONSOLA
console.log('_________________');

console.log(numere.indexOf(1));
console.log(numere.indexOf(2));
console.log(numere.indexOf(3));
console.log(numere.indexOf(4));



// LINIE IN CONSOLA
console.log('_________________');


//============================================= ================
//   (2.1) MATRICEA 'NUMERE'
//=============================================================
const numere2 = [1, 2, 3, 1, 4];


//=============================================================
//   (2.2) METODA 'LASTINDEXOF()' 
//   (PT. IDENTIFICAREA 'ULTIMULUI  INDEX' 
//     -> AL UNUI 'ELEMENT' AL 'MATRICEI')
//=============================================================
console.log(numere2.lastIndexOf(1));




// LINIE IN CONSOLA
console.log('_________________');


//=============================================================
//   (3.1) METODA 'INDEXOF() !== -1'  (TRUE/FALSE)
//  'VERIFICAREA EXISTENTEI' UNUI 'NUMAR' IN 'MATRICI'
//=============================================================
console.log(numere.indexOf(1) !== -1);



// LINIE IN CONSOLA
console.log('_________________');


//=============================================================
//   (3.2) METODA 'INCLUDES()'  (TRUE/FALSE)
//  'VERIFICAREA EXISTENTEI' UNUI 'NUMAR' IN 'MATRICI'
//=============================================================
console.log(numere.includes(1));



// LINIE IN CONSOLA
console.log('_________________');


//=============================================================
//   (4) METODA 'INDEXOF(NR_CAUTAT, FROM_INDEX) 
//  'GASIREA' UNUI 'NUMAR' IN 'MATRICI'
//     => CAUTAT DIN POZITIA DE START ('FROMINDEX')
//=============================================================
console.log(numere2.indexOf(1, 2));