/* ==========================================
    EXERCITIU:
    NUMARAREA VALORILOR 'TRUTHY' (ADEVARATE) DINTR-O ITERATIE
=============================================*/


//=============================================
// MATRICIEA (CU VALORI 'TRUTHY' & 'FALSY'):
const matrice = [0, null, undefined, '', 2, 3];

// AFISARE:
console.log(numarareValoriAdevarate(matrice));


// FUNCTIA 'NUMARARETRUTHY':
function numarareValoriAdevarate(matrice) {

    // VARIABILA:
    let numara = 0;

    // BUCLA REPETITIVA:
    for (let valoare of matrice)
    //  CONDITIA:
        if (valoare)
            numara++;
    return numara;
}