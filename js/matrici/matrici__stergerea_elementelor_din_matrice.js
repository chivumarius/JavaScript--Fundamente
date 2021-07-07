/* =============================================================
   MATRICI:
   STERGEREA  ELEMENTELOR  DIN  MATRICE
============================================================= */

/*
    REAMINTIRE - 'ADAUGARE ELEMENT'!

    (#) METODA 'PUSH()' = PT. 'ADAUGARE ELEMENTE' LA 'SFARSITUL MATRICEI'.
            matrice.push();

    (#) METODA 'UNSHIFT()' = PT. 'ADAUGARE ELEMENTE' LA 'INCEPUTUL MATRICEI'.
            matrice.unshift();

    (#) METODA 'SPLICE()' = PT. 'ADAUGARE ELEMENTE' LA 'MIJLOCUL  MATRICEI'.
            matrice.splice();
*/


/*
    NB! - 'STERGERE ELEMENT'!

    (#) METODA 'POP()' = PT. 'STERGEREA  ULTIMULUI ELEMENT' AL 'MATRICEI'.
            matrice.pop();

    (#) METODA 'SHIFT()' = PT. 'STERGEREA  PRIMULUI ELEMENT' AL 'MATRICEI'.
            matrice.shift();

    (#) METODA 'SPLICE(INDEX_ELEM, NR_DE_ELEM_STERSE)' = = PT. 'STERGEREA  ELEMENTULUI' DIN 'MIJLOC' AL 'MATRICEI'.
            matrice.splice(2, 1);
*/


console.log('________________________________');

//============================================= ================
//   MATRICEA 'NUMERE' 
//=============================================================
const numere1 = [1, 2, 3, 4]
const numere2 = [1, 2, 3, 4]
const numere3 = [1, 2, 3, 4]




//=============================================================
//   (1.1) METODA 'POP()' 
//   (PT. 'STERGEREA  ULTIMULUI ELEMENT' AL 'MATRICEI')
//=============================================================
const ultimulul = numere1.pop();


//=============================================================
//  (1.2) AFISARE 'NUMERE1' 
//=============================================================
console.log(numere1);


//=============================================================
//   (1.3) AFISARE 'ULTIMUL' 
//=============================================================
console.log(ultimulul);
console.log('________________________________');






//=============================================================
//   (2.1) METODA 'SHIFT()' 
//   (PT. 'STERGEREA  PRIMULUI ELEMENT' AL 'MATRICEI')
//=============================================================
const primul = numere2.shift();


//=============================================================
//  (2.2) AFISARE 'NUMERE2' 
//=============================================================
console.log(numere2);



//=============================================================
//   (2.3) AFISARE 'PRIMUL' 
//=============================================================
console.log(primul);
console.log('________________________________');







//=============================================================
//   (3.1) METODA 'SPLICE(INDEX, NR_DE_ELEMENTE)' 
//   (PT. 'STERGEREA  ELEMENTULUI' DIN 'MIJLOC' AL 'MATRICEI')
//=============================================================
// const mijlocul = numere3.splice(2, 1);
const mijlocul = numere3.splice(1, 2);



//=============================================================
//  (3.2) AFISARE 'NUMERE3' 
//=============================================================
console.log(numere3);



//=============================================================
//   (3.3) AFISARE 'PRIMUL' 
//=============================================================
console.log(mijlocul);
console.log('________________________________');