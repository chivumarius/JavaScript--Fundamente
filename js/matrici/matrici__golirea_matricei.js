/* =============================================================
   MATRICI:
   GOLIREA  MATRICEI
============================================================= */



console.log('________________________________');

//============================================= ================
//  (1.1) MATRICEA 'NUMERE1' 
//=============================================================
let numere1 = [1, 2, 3, 4];



//=============================================================
//   (12) SOLUTIA 1 - '[]'  <= 'RECOMANDATA'
//   'FUNCTIONEAZA' DACA 'NU EXISTA REFERINTE' CATRE 'MATRICE'
//   (PT. 'STERGEREA'  TUTUROR 'ELEMENTELOR MATRICEI')
//=============================================================
numere1 = [];



//=============================================================
// (1.3) AFISARE 'NUMERE1' 
//=============================================================
console.log(numere1);
console.log('________________________________');






console.log('________________________________');

//============================================= ================
//  (2.1) MATRICEA 'NUMERE2' 
//=============================================================
let numere2 = [1, 2, 3, 4];
let alteNumere = numere2;



//=============================================================
//   (2.2) SOLUTIA 2 - PRIN PROP. 'LENGTH()'   <= 'RECOMANDATA'
//   'FUNCTIONEAZA' DACA 'EXISTA REFERINTE' CATRE 'MATRICE'
//   (PT. 'STERGEREA'  TUTUROR 'ELEMENTELOR MATRICEI')
//=============================================================
numere2.length = 0;



//=============================================================
// (2.3) AFISARE 'NUMERE1' 
//=============================================================
console.log(numere2);
console.log(alteNumere);

console.log('________________________________');







//============================================= ================
//  (3.1) MATRICEA 'NUMERE2' 
//=============================================================
let numere3 = [1, 2, 3, 4];
let alteNumere2 = numere3;



//=============================================================
//   (3.2) SOLUTIA 3 - PRIN METODA 'SPLICE()'
//   'FUNCTIONEAZA' DACA 'EXISTA REFERINTE' CATRE 'MATRICE'
//   (PT. 'STERGEREA'  TUTUROR 'ELEMENTELOR MATRICEI')
//=============================================================
numere3.splice(0, numere3.length);



//=============================================================
// (3.3) AFISARE 'NUMERE3' 
//=============================================================
console.log(numere3);
console.log(alteNumere2);




console.log('________________________________');

//============================================= ================
//  (4.1) MATRICEA 'NUMERE2' 
//=============================================================
let numere4 = [1, 2, 3, 4];
let alteNumere3 = numere4;



//=============================================================
//   (4.2) SOLUTIA 4 - PRIN METODA 'POP()' <= 'NU ESTE RECOMANDATA'
//   'FUNCTIONEAZA' DACA 'EXISTA REFERINTE' CATRE 'MATRICE'
//   (PT. 'STERGEREA'  TUTUROR 'ELEMENTELOR MATRICEI')
//=============================================================
while (numere4.length > 0)
    numere4.pop();



//=============================================================
// (4.3) AFISARE 'NUMERE3' 
//=============================================================
console.log(numere4);
console.log(alteNumere3);

console.log('________________________________');