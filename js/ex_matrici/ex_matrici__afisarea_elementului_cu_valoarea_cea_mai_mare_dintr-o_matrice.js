/* =============================================================
   EXERCITIU MATRICI:
   AFLAREA  ''ELEMENTULUI''  CU  'VALOAREA  CEA  MAI MARE'  DINTR-O  'MATRICE'
============================================================= */


// ============================================================== 
// MATRICEA:
// const numere = [1, 2, 3, 4];
const numere = [1, 2, 3, 4, 9, 15, 54];


// ============================================================== 
// FUNCTIA 
// ============================================================== 
function obtineMaximul(matrice) {
    // VERIFICARE DACA MATRICEA ESTE GOALA:
    if (matrice.length === 0) return undefined;

    // _______________SOLUTIA 1________________________________________
    // DECLARAM VARIABILA & SETAM MATRICEA PE PRIMUL ELEMENT:
    // let maximul = matrice[0];

    // ITERAM MATRICEA:
    // for (let i = 1; i < matrice.length; i++) {
    // VERIFICAM DACA 'NR. CURENT' ESTE 'MAI MARE' DECAT 'MAXIMUL'.
    //     if (matrice[i] > maximul)
    //     maximul = matrice[i];
    // }
    // return maximul;




    // _______________SOLUTIA 2 - METODA 'REDUCE()'_________________
    // (A) METODA 'REDUCE()'
    // matrice.reduce((sumaAcumulata, valoareaCurenta) => {

    // (1) VERIVICAM VALOAREA MAI MARE:
    // if (valoareaCurenta > sumaAcumulata)
    //     return valoareaCurenta;
    // return sumaAcumulata;

    // (2) OPERATORUL CONDITIONAL:
    // return (valoareaCurenta > sumaAcumulata) ? valoareaCurenta : sumaAcumulata;
    // });

    // (B) METODA 'REDUCE()'
    // matrice.reduce((a, b) => {
    //     OPERATORUL CONDITIONAL:
    //     return (a > b) ? a : b;
    // });


    // (C) METODA 'REDUCE()'
    return matrice.reduce((a, b) => (a > b) ? a : b);
}

// ============================================================== 
// 'VALOAREA CEA MAI MARI' DIN 'MATRICE':
const maximul = obtineMaximul(numere);



// ============================================================== 
// AFISAREA:
console.log(maximul);