/* ===============================================================
    FUNCTII: 
    OPERATORUL 'REST'
=================================================================*/

/*
    NB!
       (1) 'OP. SPREAD' / DE 'DISTRIBUTIE' '...'
            =>  ESTE 'UTILIZAT' CU 'MATRICI'
            => PRESUPUNE 'PRELUAREA' FIECARUI 'ELEMENT' INDIVIDUAL.
        

       (2) 'OP. REST'  '...PARAMETRU' (ESTE 'ULTIMUL PARAMETRU' AL 'FUNCTIEI')
            =>  ESTE 'OP. SPREAD' 
            => 'UTILIZAT' CU 'PARAMETRUL' UNEI 'FUNCTII'
    


       (*)  'ARGS' => ESTE O MATRICE DE ELEMENTE.

       (*) 'PARAMETRUL REST' 
                => TREBUIE SA FIE 'ULTIMUL PARAMETRU' => INTR-O 'FUNCTIE',
                => POT FI 'PLASATI' MAI MULTI 'PARAMETRII' DOAR 'INAINTEA' SA.
*/

//=================================================================
// (1) OPERATORUL  'REST' '...PARAMETRU'
//     PT. O FUNCTIE CU 'NR DE PARAMET'RI VARIABIL
//     (CE LUCREAZA CU TOATE ARGUMENTELE CE TREC PRIN FUNCTIE)
//=================================================================
function suma(...args) {
    console.log(args);
}


// AFISAREA APELARI FUNCTIEI:
console.log(suma(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');



//=================================================================
// (2) DACA STERGEM CELE 3 PUNCTE 'ARGS'
//=================================================================
function suma(args) {
    console.log(args);
}


// SE AFISEAZA DOAR PRIMUL ARGUMENT:
console.log(suma(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');



//=================================================================
// (3) OBTINEREA SUMEI FUNCTIEI
//     (PRIN OP. 'REST'  &  METODA 'REDUCE()')
//=================================================================
function suma(...args) {
    return args.reduce((a, b) => a + b);
}


// AFISAREA APELARI FUNCTIEI:
console.log(suma(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');



//=================================================================
// (4) CALCULAREA  'VALORII  TOTALE' ALE UNUI 'COS  DE  CUMPARATURI'
//     IN CARE  AVEM UN 'PROCENT DE REDUCERE'
//=================================================================
function suma(reducere, ...preturi) {
    let total = preturi.reduce((a, b) => a + b);
    return total * (1 - reducere);
}


// DUSARE FUNCTIE (CU DISCOUNT DE 10%, 
//   PT. 2 PRODUSE CU PRETUL DE '50 LEI' SI '100 LEI')
console.log(suma(0.1, 50, 100));
console.log('_______________________________________');