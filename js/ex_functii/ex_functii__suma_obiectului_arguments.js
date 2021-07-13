/* =============================================================
   EXERCITIU FUNCTII:
   SUMA  'OBIECTULUI' - 'ARGUMENTS'
============================================================= */

// ============================================================== 
// FUNCTTIA CU OP. 'REST' '...':
// ============================================================== 
function suma(...elemente) {

    // AFISARE MATRICE 'ELEMENTE':
    // console.log(elemente);

    // VERIF. DACA 'PRIMUL ELEMENT' AL 'MATRICEI' ESTE 'MATRICE':
    if (elemente.length === 1 && Array.isArray(elemente[0]))
        elemente = [...elemente[0]];

    // METODA 'REDUCE()':
    return elemente.reduce((a, b) => a + b);
}


// AFISAREA APELARII FUNCTIEI:
console.log(suma(1, 2, 3, 4));