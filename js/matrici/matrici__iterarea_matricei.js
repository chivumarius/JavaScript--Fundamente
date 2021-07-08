/* =============================================================
   MATRICI:
   ITERAREA  MATRICEI
============================================================= */


console.log('________________________________');
//============================================= ================
//  MATRICI: 
//=============================================================
let numere = [1, 2, 3];


//=============================================================
//   (1) BUCLA 'FOR .. OF' PT. 'ITERAREA MATRICEI'
//=============================================================
for (let numar of numere)
    console.log(numar);


console.log('________________________________');


//=============================================================
//   (2.1) METODA'FOREACH(CALLBACK FUNC)' PT. 'ITERAREA MATRICEI'
//=============================================================
numere.forEach(function(numar) {
    console.log(numar);
});


console.log('________________________________');


//=============================================================
//   (2.2) METODA'FOREACH(CALLBACK FUNC)' PT. 'ITERAREA MATRICEI'
//         UTILIZAND SINTAXA 'FUNCTIEI SAGEATA'
//=============================================================
numere.forEach(numar => console.log(numar));


console.log('________________________________');


//=============================================================
//   (3) METODA'FOREACH(CALLBACK FUNC)' PT. 'ITERAREA MATRICEI'
//         UTIL. SINTAXA 'FUNCTIEI SAGEATA' CU 2 ARGUMENTE
//=============================================================
numere.forEach((numar, index) => console.log(index, numar));


console.log('________________________________');