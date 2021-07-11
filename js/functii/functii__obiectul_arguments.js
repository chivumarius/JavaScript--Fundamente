/* ===============================================================
    FUNCTII: 
    OBIECTUL  'ARGUMENTS'
=================================================================*/

/* 
    TOATE 'FUNCTIILE' IN 'JAVASCRIPT'
        => AU UN 'OBIECT' SPECIAL
        => DENUMIT 'ARGUMENTS'
*/


// JS LIMBAJ DINAMIC (ISI POATE SCHIMBA TIPUL VALORI)
// let x = 1;
// x = 'a';


//=================================================================
// 'CONCEPTUL DINAMIC' IN 'FUNCTII'.
function suma(a, b) {
    return a + b;
}

// APELAREA FUNCTIEI:
console.log(suma(1, 2));
console.log('_______________________________________');


// NaN (NOT A NUMBER)
//  'A = 1'  &  'B = UNDEFINED'
console.log(suma(1));
console.log(suma());
console.log('_______________________________________');



// ADAGARE 'ARGUMENTE SUPLIMENTARE'
// DOAR 'PRIMELE 2 ARGUMENTE' SUNT 'UTILIZATE:'
console.log(suma(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');




//=================================================================
// (1) OBIECTUL 'ARGUMENTS'
//=================================================================
function suma2(a, b) {
    //  OBIECTUL 'ARGUMENTS'
    console.log(arguments);
    return a + b; // 1 + UNDEFINED
}


// ADAGARE 'ARGUMENTE SUPLIMENTARE'
// DOAR 'PRIMELE 2 ARGUMENTE' SUNT 'UTILIZATE:'
console.log(suma2(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');




//=================================================================
// (2) FUNCTIE CU NR DE PARAMETRI VARIABIL
//     (CE LUCREAZA CU TOATE ARGUMENTELE CE TREC PRIN FUNCTIE)
//=================================================================
function suma3() {

    let total = 0;

    // ITERAREA ASUPRA ELEMENTELOR OBIECTULUI 'ARGUMENTS'
    for (let valoare of arguments)
        total += valoare;

    return total;
}


// AFISAREA APELARI FUNCTIEI:
console.log(suma3(1, 2, 3, 4, 5, 6));
console.log('_______________________________________');