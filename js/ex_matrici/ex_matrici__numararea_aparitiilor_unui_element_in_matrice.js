/* =============================================================
   EXERCITIU MATRICI:
  NUMARAREA  APARTIILORI  UNUI  ELEMENT  IN  MATRICE
============================================================= */


// ============================================================== 
// MATRICEA:
// const numere = [1, 2, 3, 2, 2, 4, 2, 1, 1, 3];
const numere = [1, 2, 3, 4, 1];


// ============================================================== 
// FUNCTIA 
// ============================================================== 
function numarareAparitii(matrice, cautaElement) {
    //___________SOLUTIA 1________________
    // INITIALIZAM VARIABILA:
    // let numarare = 0;

    // ITERAM ASUPRA MATRICEI:
    // for (let element of matrice)
    //     if (element === cautaElement)
    //         numarare++;
    // return numarare;


    //___________SOLUTIA 2________________
    // METODA 'REDUCE()' - 'INITIALIZATA' CU '0':
    return matrice.reduce((sumaAcumulata, valoareCurenta) => {
        const aparitie = (valoareCurenta === cautaElement) ? 1 : 0;

        console.log(sumaAcumulata, valoareCurenta, cautaElement);

        return sumaAcumulata + aparitie;
    }, 0);
}



// COPIILE/DUBLURILE NUMARULUI:
const numarare = numarareAparitii(numere, 1);
// const numarare = numarareAparitii(numere, 2);
// const numarare = numarareAparitii(numere, 3);
// const numarare = numarareAparitii(numere, 4);




// ============================================================== 
// AFISAREA:
console.log(numarare);