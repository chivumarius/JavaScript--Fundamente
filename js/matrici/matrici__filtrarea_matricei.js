/* =============================================================
   MATRICI:
   FILTRAREA  MATRICEI
============================================================= */



console.log('________________________________');

//=============================================================
//   (1) METODA 'FILTER(CALLBACK FUNCTION(VAL, INDEX, MATRICE))' 
//   (PT. 'AFISAREA' - 'VALORILOR POZITIVE' ALE 'MATRICEI')
//=============================================================

// MATRICEA 
const numere = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6];

// METODA 'FILTER( CALLBACKFN(VAL, INDEX, MATRICE) )'
const filtrat = numere.filter(nr => nr >= 0);

// AFISARE:
console.log(filtrat);