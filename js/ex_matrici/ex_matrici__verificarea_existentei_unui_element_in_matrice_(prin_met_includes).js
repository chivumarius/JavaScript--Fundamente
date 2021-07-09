/* =============================================================
   EXERCITIU MATRICI:
   VERIFICAREA  EXISTENTEI  UNUI  ELEMENT  IN  MATRICE (PRIN  MET.  'INCLUDEE()')
============================================================= */

/*
    CERINTE:

    CREATI O 'FUNCTIE': 
        => 'SIMILARA' CU METODA 'INCLUDES()'
        => CARE SA AIBA O 'MATRICE' 
        => SI UN' ELEMENT DE CAUTARE'.
*/

// ============================================================== 
// MATRICEA:
const numere = [1, 2, 3, 4];


// ============================================================== 
// METODA 'INCLUDES()' (PT. VERIFICAREA EXISTENTEI BR. IN MATRICE)
// console.log(numere.includes(3));



// ============================================================== 
// FUNCTIA 
// (DE VERIFICARE A EXISTENTEI UNUI ELEMENT IN MATRICE)
// ============================================================== 
function include(matrice, elementCautat) {
    // ITERAM ASUPRA MATRICEI:
    for (let element of matrice)
        if (element === elementCautat)
            return true;
    return false;
};


// ============================================================== 
// AFISAREA APELARI:
console.log(include(numere, 4));
console.log(include(numere, 5));