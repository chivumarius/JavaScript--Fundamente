/* =============================================================
   EXERCITIU OBIECTE:
   EGALITATEA OBIECTELOR


============================================================= */

/*
    CERINTE:
    CREATI 2 FUNCTII SE VERIFICATI EGALITATEA ACESTORA:

        (1) function suntEgale(adresa1, adresa2){}
        (2) {}
*/

//==================================================================
//  (1.1) INITIALIZAREA PRIN FUNCTIA 'CONSTRUCTOR' (NOTATIA 'PASCAL')
//      A FUNCTIA 'ADRESA()' 
//==================================================================
function Adresa(strada, oras, cp) {
    // INITIALIZAM ARGUMENTELE (PRIN KEYWOED-UL 'THIS')
    this.strada = strada;
    this.oras = oras;
    this.cp = cp;
}


//==================================================================
//  (1.2) APELAREA & INITIALIZAREA FUNCTIEI 'ADRESA'
//==================================================================
let adresa1 = new Adresa('Blv. Piata Victoriei', 'Brasov', '255150');
let adresa2 = new Adresa('Blv. Piata Victoriei', 'Brasov', '255150');


//==================================================================
//  (2.1) INITIALIZAREA PRIN FUNCTIA 'FABRICA' (NOTATIA 'CAMILA')
//      DE CREARE A FUNCTIEI 'SUNTEGALE()' 
//==================================================================
function suntEgale(adresa1, adresa2) {
    // (CARE VERIFICA PROPRIETATILE INDIVIDUALE ALE OBIECTELOR)
    return adresa1.strada === adresa2.strada &&
        adresa1.oras === adresa2.oras &&
        adresa1.cp === adresa2.cp;
}


//==================================================================
//  (2.2) FUNCTIA 'FABRICA' (NOTATIA 'CAMILA')
//      DE CREARE A FUNCTIEI 'SUNTACELEASI()' 
//==================================================================
function suntAceleasi(adresa1, adresa2) {
    // OPERATORUL DE 'EGALITATE STRICTA' 
    // (PT. A 'VERIFICA' DACA '2 VARIABILE' -> 'REFERA' ACELASI 'OBIECT'):
    return adresa1 === adresa2;
}




//==================================================================
// (3) AFISAREA APELARII FUNCTIEI:
//==================================================================
console.log(suntEgale(adresa1, adresa2));
console.log(suntAceleasi(adresa1, adresa2));