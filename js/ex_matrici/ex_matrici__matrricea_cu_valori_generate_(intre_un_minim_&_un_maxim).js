/* =============================================================
   EXERCITIU MATRICI:
   MATRICEA  CU VALORI GENERATE INTRE UN MINIM SI MAXIM
============================================================= */


// ============================================================== 
// FUNCTIA 
// (PT. GENERAREA NUMERELOR INTRE 2 VALORI)
// ============================================================== 
function matriceaCuValoriGenerate(min, max) {

    // MATRICEA GOALA:
    const iesire = [];

    // GENERARE NUMERE INTRE 'MIN' SI 'MAX':
    for (let i = min; i <= max; i++)
    //  TRIMITEM 'ITEM'-UL IN 'MATRICE':
        iesire.push(i);
    return iesire;
};


// ============================================================== 
// INITIALIZAREA FUNCTIEI
const numere = matriceaCuValoriGenerate(-10, -1);


// ============================================================== 
// AFISAREA
console.log(numere);