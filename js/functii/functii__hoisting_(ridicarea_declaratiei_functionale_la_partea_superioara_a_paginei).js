/* ===============================================================
    FUNCTII: 
    HOISTING  (RIDICAREA  'DECLARARII  FUNCTIONALE'  LA  PARTEA  SUPERIOARA  A  PAGINEI)
=================================================================*/


/*

        (#) 'HOISTING'-UL -> ESTE 'PROCESUL' PRIN CARE 'MOTORUL JAVASCRIPT'
            => CAND 'EXECUTA' CODUL,
            => RIDICA/MUTA  TOATE 'DECLARATIILE FUNCTIONALE' SUS, LA PARTEA 'SUPERIOARA' A PAGINEI.  
            
            
        (#) FUNCTIILE 'DECLARATE' PRIN 'SINTAXA': 
       
            (1) 'DECLARATIEI FUNCTIONALE' 
                => 'POT' FI 'APELATE' -> 'INAINTEA  DEFINIRII' SALE  PROPRIUZISE. 
                 
            (2) 'EXPRESIEI FUNCTIONALE'
                => 'NU POT' FI 'APELATE' -> 'INAINTEA  DEFINIRII' SALE,
                => CI DOAR 'DUPA DEFINIRE'. 
*/


// =================================================================
// (1)' DEFINIREA  FUNCTIEI' - PRIN  'DECLARATIE  FUNCTIONALA' 
// =================================================================

// APELAREA FUNCTIE INAINTEA DEFINIRII:
hoisting();

// DEFINIREA FUNCTIEI 
function hoisting() {
    console.log('Apelarea Inaintea Definirii');
}




// =================================================================
// (2) 'DEFINIREA  FUNCTIEI' - PRIN  'EXPRESIE  FUNCTIONALA  ANONIMA'
// =================================================================


// APELARE ERONATA (PRIMIM EROARE):
// apelareaDupaDefinire();

// DEFINIREA FUNCTIEI 
let apelareaDupaDefinire = function() {
    console.log('Apelarea Dupa Definire');
};

// APELARE:
apelareaDupaDefinire();



// =================================================================
// SIMILAR CU UTIL. 'VARIABILELOR', 'CONSTANTELOR' INAINTEA DEFINIRI:
// =================================================================

// AFISAREA VARIABILEI INAINTEA DEFINIRII (EROARE):
// console.log(x);

// DEFINIREA VARIABILEI:
let x = 1;

// AFISAREA VARIABILEI INAINTEA DEFINIRII (corect):
console.log(x);