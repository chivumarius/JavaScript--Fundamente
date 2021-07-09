/* =============================================================
   EXERCITIU MATRICI:
   EXCLUDEREA  UNOR ELEMENTE  DINTR-O MATRICE
============================================================= */


// ============================================================== 
// MATRICEA:
const numere = [1, 2, 3, 4];



// ============================================================== 
// FUNCTIA 
// ============================================================== 
function exclude(matrice, elementExclus) {

    // CREAM MATRICEA GOALA:
    const iesire = [];

    // ITERAM ASUPRA MATRICEI:
    for (let element of matrice)

    //  DACA ELEL. MATRICEI 'NUMERE' NU ESTE EXCLUS SE ADAUGA IN MATRICEA 'IESIRE' 
        if (!elementExclus.includes(element))
            iesire.push(element);
    return iesire;
};


// EXCLUDERE DIN MATRICE:
// const iesire = exclude(numere, []);
// const iesire = exclude(numere, [1]);
const iesire = exclude(numere, [3]);


// ============================================================== 
// AFISAREA:
console.log(iesire);