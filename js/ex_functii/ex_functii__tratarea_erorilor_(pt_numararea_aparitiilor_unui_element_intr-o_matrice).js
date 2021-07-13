/* =============================================================
    EXERCITIU MATRICI:
    TRATAREA  ERORILOR  (PT.  NUMARAREA  APARTIILORI  UNUI  ELEMENT  INTR-O  MATRICE)
============================================================= */

/*
    (*) VALORILE 'BOOLEAN', 'NULL' & 'UNDEFINED' 
            => 'NU AU' - METODA '.REDUCE()'
    
    (NB!) TREBUIE SA MODIFICAM FUNCTIA
            => SI SA ADAUGAN 'TRATAREA  ERORILOR'
*/


// ============================================================== 
// BLOCUL DE INSTRUCTIUNI "TRY ... CATCH":
// ============================================================== 
try {

    // MATRICEA:
    const numere = [1, 2, 3, 4];


    // COPIILE/DUBLURILE NUMARULUI:
    // const numarare = numarareAparitii(numere, 1);
    // const numarare = numarareAparitii(true, 1);
    // const numarare = numarareAparitii(null, 1);
    const numarare = numarareAparitii(undefined, 1);

    // ============================================================== 
    // AFISAREA:
    console.log(numarare);

} catch (e) {
    // AFISAREA - OBIECTULUI 'EROARE' ARUNCAT:
    console.log(e.message);
}



// ============================================================== 
// FUNCTIA 
// ============================================================== 
function numarareAparitii(matrice, cautaElement) {

    // VALIDAM 'PRIMUL  ARGUMENT':
    if (!Array.isArray(Array))
    //  ARUNCAM 'EXCEPTIA':
        throw new Error('Matrice Invalida');

    // METODA 'REDUCE()' - 'INITIALIZATA' CU '0':
    return matrice.reduce((sumaAcumulata, valoareCurenta) => {
        const aparitie = (valoareCurenta === cautaElement) ? 1 : 0;
        return sumaAcumulata + aparitie;
    }, 0);
}