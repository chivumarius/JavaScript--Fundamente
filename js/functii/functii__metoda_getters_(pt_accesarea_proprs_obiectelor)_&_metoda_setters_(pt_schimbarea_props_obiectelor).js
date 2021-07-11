/* ===============================================================
    FUNCTII: 
    METODA  'GETTERS' (PT. ACCESAREA PROPS OBIECTELOR)  &  
    METODA  'SETTERS' (PT. SCHIMBAREA PROPS OBIECTELOR)
=================================================================*/

/*
   (*) METODA 'GETTERS' 
        => PERMITE 'ACCESAREA  PROPRIETATILOR OBIECTELOR'
        => SE  ACCESEAZA CA SI 'PROPRIETATE',


   (*) METODA 'SETTERS' => PERMITE 'MODIFICAREA/SCHIMBAREA  PROPRIETATILOR OBIECTELOR'.
*/

//=================================================================
// (1) OBIECTUL 'PERSOANA'
//=================================================================
const persoana = {
    prenume: 'Marius',
    numeFamilie: 'Chivu'
};

// AFISAREA NUMELUI INTREG:
console.log(persoana.prenume + ' ' + persoana.numeFamilie);


//=================================================================
// (2) AFISAREA NUMELUI COMPLET PRIN 'TEMPLATE LITERAL'  <= 'SOLUTIA MAI BUNA'
//     PRIN UTIL. `BACKTICK`
//=================================================================
console.log(`${persoana.prenume} ${persoana.numeFamilie}`);


//=================================================================
// (3) METODA 'PROPRIETATE':
// ACEASTA METODA NU PERMITE SETAREA PROPRIETATILOR OBIECTULUI DIN EXTERIOR.
//=================================================================
const persoana2 = {
    prenume: 'Marius',
    numeFamilie: 'Chivu',

    // numeComplet = function(){}  // SINTAXA  VECHE
    numeComplet() {
        // RETURNARE 'TEMPLATE LITERAL' (PRIN UTIL. `BACKTICK`)
        return `${persoana2.prenume} ${persoana2.numeFamilie}`
    }
};

// ACEASTA METODA NU PERMITE SETAREA PROPRIETATILOR OBIECTULUI DIN EXTERIOR.
// persoana2.numeComplet = 'Brad Pitt';

// AFISAREA FUNCTIEI NUMELUI COMPLET
console.log(persoana2.numeComplet());




//=================================================================
// (4.1) METODELE 'GETTER' - PRIN KEYWORD-UL 'GET':
//     (PERMITE SETAREA PROPRIETATILOR OBIECTULUI DIN EXTERIOR)
//=================================================================
const persoana3 = {
    prenume: 'Marius',
    numeFamilie: 'Chivu',

    // METODA 'GETTER' (PRIN KEYWORD-UL 'GET'):
    get numeComplet() {
        // RETURNARE 'TEMPLATE LITERAL' (PRIN UTIL. `BACKTICK`)
        return `${persoana3.prenume} ${persoana3.numeFamilie}`
    }
};

// AFISAREA METODEI 'GET' CA PE O 'PROPRIETATE':
console.log(persoana3.numeComplet);



//=================================================================
// (4.2) METODELE 'SETTER' - PRIN KEYWORD-UL 'SET':
//     (PT. 'CREAREA POSIBILITATII' DE  'SETARE A PROPRIETATILOR' OBIECTULUI DIN 'EXTERIOR')
//=================================================================
const persoana4 = {
    prenume: 'Marius',
    numeFamilie: 'Chivu',

    // METODA 'GETTER' (PRIN KEYWORD-UL 'GET'):
    get numeComplet() {
        // RETURNARE 'TEMPLATE LITERAL' (PRIN UTIL. `BACKTICK`)
        return `${persoana4.prenume} ${persoana4.numeFamilie}`
    },

    // METODA 'SETTER' (PRIN KEYWORD-UL 'SET')
    // PT. 'PERMITEREA RESETARII' 'PROPRIETATII' DIN 'EXTERIOR'.
    set numeComplet(valoare) {

        // METODA 'SPLIT()' - PT. CREARE 'STRING':
        const parti = valoare.split(' ');

        // 'SETAREA PROPRIETATILOR' OBIECTULUI IN 'STRING':
        this.prenume = parti[0];
        this.numeFamilie = parti[1];
    }
};

// RESETAREA PROPRIETATII DIN EXTERIOR.
persoana4.numeComplet = 'Jeanine Alexandra';

// AFISAREA METODEI 'GET' CA PE O 'PROPRIETATE':
console.log(persoana4.numeComplet);