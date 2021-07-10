/* ===============================================================
    FUNCTII: 
    DEFINIREA  'FUNCTIEI' PRIN 
    'DECLARATII  FUNCTIONALE'  vs  'EXPRESII  FUNCTIONALE'
=================================================================*/

/*
    NB!
        (#) 'FUNCTIILE' IN 'JAVASCRIPT' => SUNT  'OBIECTE'.   
    
   FUNCTIILE DEFINITE PRIN:
        => 'DECLARAREA FUNCTIONALA' = NU PRIMESC LA SFARSIT 'PUNCT & VIRGULA' ';'      
        => 'EXPRESIA FUNCTIONALA' = PRIMESC LA SFARSIT 'PUNCT & VIRGULA' ';'
    

    EXPRESIILE FUNCTIONALE - POT FI:
        => 'DENUMITE';
        => 'ANONIME';
*/

// =================================================================
// (1)' DEFINIREA  FUNCTIEI' - PRIN  'DECLARATIE  FUNCTIONALA' 
// =================================================================
function plimbare() {
    console.log(plimbare);
}


// =================================================================
// (2.1) 'DEFINIREA  FUNCTIEI' - PRIN  'EXPRESIE  FUNCTIONALA  ANONIMA'
// =================================================================
let alergare = function() {
    console.log('alergare');
};

// APELARE:
// alergare();

// VARIABILA REFERINTA
let miscare = alergare;

// APELARI:
alergare();
miscare();


// =================================================================
// (2.2) 'DEFINIREA  FUNCTIEI' - PRIN  'EXPRESIE  FUNCTIONALA  DENUMITA'
// =================================================================
let alergare2 = function alergare() {
    console.log('alergare2');
};