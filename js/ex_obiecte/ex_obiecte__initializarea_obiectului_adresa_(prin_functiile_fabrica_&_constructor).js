/* =============================================================
   EXERCITIU OBIECTE:
   INITIALIZAREA  OBIECTULUI 'ADRESA' 
   (PRIN FUNCTIILE 'FABRICA' & 'CONSTRUCTOR')
============================================================= */



//==================================================================
//  (1.1) INITIALIZAREA PRIN FUNCTIA 'FABRICA' (NOTATIA 'CAMILA')
//      A FUNCTIA 'CREAREADRESA()' 
//==================================================================
function creareAdresa(strada, oras, cp) {
    // 'RETURNAM' UN 'OBIECT NOU':
    return {
        strada,
        oras,
        cp
    };
}


//==================================================================
//  (1.2) APELAREA & INITIALIZAREA FUNCTIEI 
//==================================================================
let adresa = creareAdresa('Blv. Unirii', 'Cluj', '088390');



//==================================================================
//  (1.3) AFISARE 'ADRESA'
//==================================================================
console.log(adresa);




//==================================================================
//  (2.1) INITIALIZAREA PRIN FUNCTIA 'CONSTRUCTOR' (NOTATIA 'PASCAL')
//      A FUNCTIA 'ADRESA()' 
//==================================================================
function Adresa(strada, oras, cp) {
    // INITIALIZAM ARGUMENTELE (PRIN KEYWOED-UL 'THIS')
    this.strada = strada;
    this.oras = oras;
    this.cp = cp;
}


//==================================================================
//  (2.2) APELAREA & INITIALIZAREA FUNCTIEI 'ADRESA'
//==================================================================
let adresa2 = new Adresa('Blv. Piata Victoriei', 'Brasov', '255150');



//==================================================================
//  (2.3) AFISARE 'ADRESA'
//==================================================================
console.log(adresa2);