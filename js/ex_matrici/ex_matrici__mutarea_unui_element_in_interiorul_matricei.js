/* =============================================================
   EXERCITIU MATRICI:
   MUTAREA  UNUI  ELEMENT  IN  INTERIORUL  MATRICEI
============================================================= */


// ============================================================== 
// MATRICEA:
const numere = [1, 2, 3, 4];


// ============================================================== 
// FUNCTIA 
// ============================================================== 
function mutareElement(matrice, index, decalaj) {

    // CREAM O VALIDARE:
    const nouaPozitie = index + decalaj;

    // VERIFICAM - DACA ELEMENTUL ESPE PLASAT IN AFARA MATRICEI:
    if (nouaPozitie >= matrice.length || nouaPozitie < 0) {
        // AFISAM EROAREA
        console.error('Decalaj Invalid!');

        // RETURNAM - PT CA RESTUL CODULUI SA NU SE MAI EXECUTE
        return;
    }

    // (1) 'COPIEREA'/'CLONAREA' PRIN 'OP. SPREAD' ('...')
    // A  MATRICEI 'NUMERE' -> IN MATRICEA 'IESIRE':
    const iesire = [...matrice];

    // (2) 'STERGEREA 1 ELEMENT' DIN MATRICEA 'IESIRE':
    const elementSters = iesire.splice(index, 1)[0];

    // (3) 'ADAUGAREA 1 ELEMENT' IN MATRICEA 'IESIRE': 
    iesire.splice(index + decalaj, 0, elementSters);

    return iesire;
};



// MUTAREA ELEM. DE PE POZITIA INDEXULUI 0 PE POZITIA 1:
// const iesire = mutareElement(numere, 0, 0);
const iesire = mutareElement(numere, 0, 1);
// const iesire = mutareElement(numere, 0, -1);
// const iesire = mutareElement(numere, 3, -3);
// const iesire = mutareElement(numere, 0, 4);



// ============================================================== 
// AFISAREA:
console.log(iesire);