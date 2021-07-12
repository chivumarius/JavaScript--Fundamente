/* ===============================================================
    FUNCTII: 
    BLOCURILE  DE  INSTRUCTIUNI  T'RY ...  CATCH'
=================================================================*/

/*
   (*) 'TRATAREA ERORILOR' SAU 'ORIGRAMAREA DEFENSIVA':
            => ESTE APLICATA LA INCEPUTUL FUNCTIEI SAU METODEI
            => ASIGURA FAPTUL CA 'VALORILE DE INTRARE':
                -> SUNT 'VALIDE',
                -> SUNT 'SUB FORMA CORECTA',
            => PT A 'EXECUTA LOGICA'.


    (*) 'RAPORTAREA ERORILOR' IN 'APLICATIE' SE FAC PRIN
            => 'ARUNCAREA' UNEI 'EXCEPTII'  (PRIN KEYWORD-UL 'THROW')
            => IAR 'EXPRESIA' VA SPECIFICA 'VALOAREA EXCEPTIEI'. 
*/


//=================================================================
// (1.1) 'TRATAREA ERORILOR' SAU 'ORIGRAMAREA DEFENSIVA':
//=================================================================
const persoana = {
    prenume: 'Marius',
    numeFamilie: 'Chivu',

    // METODA 'SETTER' (PRIN KEYWORD-UL 'SET')
    // PT. 'PERMITEREA RESETARII' 'PROPRIETATII' DIN 'EXTERIOR'.
    set numeComplet(valoare) {
        // 'ARUNCAM' ('THROW')  O 'EXCEPTIE':
        if (typeof valoare !== 'string')
        //  ARUNCAM EXCEPTIE
            throw new Error('Valoarea nu este de tip string');

        // METODA 'SPLIT()' - PT. CREARE 'STRING':
        // METODA 'SPLIT()' - ESTE VALIDA DOAR PT. 'STRING':
        const parti = valoare.split(' ');

        // VERIFICAM DACA 'STRING-UL' ARE CELE '2 PROPRIETATI':
        if (parti.length !== 2)
        //  ARUNCAM EXCEPTIE
            throw new Error('Introduceti Prenumele si Numele de Familie!');


        // 'SETAREA PROPRIETATILOR' OBIECTULUI IN 'STRING':
        this.prenume = parti[0];
        this.numeFamilie = parti[1];
    }
};


//=================================================================
//  (1.2) BLOCUL DE INSTRUCTIUNI 'TRY' & 'CATCH':
//=================================================================
try {

    // VALOAREA 'BOOLEANA', 'NULL' SAU 'UNDEFINED' - VA 'FURNIZA' O 'EROARE'.
    // persoana.numeComplet = true;
    // persoana.numeComplet = null;
    persoana.numeComplet = '';

    // persoana.numeComplet = null;
} catch (e) {

    // console.log(e);

    // FUNC. VECHE   <= NERECOMANDATA
    alert(e);
}


// AFISAREA METODEI 'GET' CA PE O 'PROPRIETATE':
console.log(persoana);