/* =============================================================
   MATRICI:
   GASIREA  ELEMENTELOR  DE  TIP  'REFERINTA'   
============================================================= */


//============================================= ================
//   (1.1) MATRICEA 'CURSURI' CU '2 OBIECTE'
//=============================================================
const cursuri = [{
        id: 1,
        nume: 'Frontend'
    },
    {
        id: 2,
        nume: 'Backend'
    }
];


//=============================================================
//   (1.2) METODA 'FIND()' 
//   (PT. GASIRE ELEMENT IN OBIECTUL MATRICEI)
//=============================================================
const curs = cursuri.find(
    function(curs) {
        return curs.nume === 'Frontend';
        // return curs.nume === 'Backend';
        // return curs.nume === 'Software';
    }
);

//=============================================================
//   (1.3) AFISARE 
//=============================================================
console.log(curs);






//=============================================================
//   (2.1) METODA 'FINDINDEX()' 
//   (PT. GASIRE INDEXULUI ELEMENTULUI IN OBIECTUL MATRICEI)
//=============================================================
const cursul = cursuri.findIndex(
    function(cursul) {
        // return cursul.nume === 'Frontend';
        // return cursul.nume === 'Backend';
        return cursul.nume === 'Softwared';
    }
);

//=============================================================
//   (2.2) AFISARE 
//=============================================================
console.log(cursul);