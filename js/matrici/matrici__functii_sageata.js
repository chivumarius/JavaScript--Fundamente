/* =============================================================
   MATRICI:
   FUNCTII 'SAGEATA' 
============================================================= */

/*
    NB!
    SINTAXEI 'FUNCTIEI  SAGEATA':
        => SE 'RECOMANDA' A SE 'UTILIZAREA' ATUNCI CAND
        => O 'FUNCTIE' ESTE  'TRECUTA'  CA  SI  'ARGUMENT'  AL UNEI  'METODE'.
    

    SINTAXEI 'FUNCTIEI  SAGEATA':~
        () => { EXPRESIE }

    SAU:
        PARAMETRU => EXPRESIE


        
    EX.
        (curs) => {
            return curs.nume === 'Frontend';
        }
    
    PT. '1 SINGUR PARAMETRU' & '1 SINGURA INSTRUCTIUNE':
        curs => curs.nume === 'Frontend';
       
*/

//============================================= ================
//   (1.1) MATRICEA 'CURSURI' CU '2 OBIECTE'
//=============================================================
const cursuri = [
    { id: 1, nume: 'Frontend' },
    { id: 2, nume: 'Backend' }
];


//=============================================================
//   (1.2) METODA 'FIND()' 
//   (PT. GASIRE ELEMENT IN OBIECTUL MATRICEI)
//=============================================================
// const curs = cursuri.find(
//     function(curs) {
//         return curs.nume === 'Frontend';
//     }
// );


//=============================================================
//   (1.2) METODA 'FIND()' CU 'FUNCTIA  SAGEATA'
//   (PT. GASIRE ELEMENT IN OBIECTUL MATRICEI)
//=============================================================
const curs = cursuri.find(curs => curs.nume === 'Frontend');


//=============================================================
//   (1.3) AFISARE 
//=============================================================
console.log(curs);