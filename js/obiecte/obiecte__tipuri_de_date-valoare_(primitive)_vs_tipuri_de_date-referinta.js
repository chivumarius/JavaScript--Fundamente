/* =======================================================
    OBIECTE:
    TIPURI DE DATE 'VALOARE'/'PRIMITIVE' vs
    TIPURI DE DATE 'REFERINTA'
==========================================================*/

/*
    (1) TIPUL DE DATE 'PRIMITIVE' => SUNT COPIATE PRIN 'VALOARE'
        (*) 'PRIMITIVELE' SUNT INDEPENDENTE
            => 'VALORILE' SUNT 'STOCATE' IN 'INTERIORUL VARIABILELOR'.
            => CAND O 'VARIABILA' -> ESTE 'COPIATA' -> 'VALOAREA' SA 
               ESTE 'STOCATA' IN 'NOUA VARIABILA'.
    
    (2) TIPUL DE DATE 'REFERINTA' => SUNT COPIATE PRIN 'REFERINTA'
        (*) 'REFERINTA' NU  ESTE INDEPENDENTA
            => 'VALORILE' SUNT 'STOCATE' IN 'MEMORIE' LA O 'ADRESA'
            => IAR 'ADRESA' ACELEI 'LOCATII DE  MEMORIE' ESTE 'STOCATA'
            => IN 'INTERIORUL VARIABILEI'.
    
*/

//=============================================
//  (1) TIPURI DE DATE 'VALOARE' / 'PRIMITIVE'
//=============================================
let x = 10;
let y = x;

// SCHIMBAM VALOAREA:
x = 20;


//=============================================
//  (2) TIPURI DE DATE 'REFERINTA'
//=============================================
let x2 = {
    valoare: 10
};

let y2 = x2;

// SCHIMBAM VALOAREA:
x2.valoare = 20;



//========================================================
//  (EX. 1) 'PRIMITIVE' (COPIATE PRIN VALOARE) 
//========================================================
// INITIALIZARE VARIABILA
let numar = 10;

// FUNCTIE
function creste(numar) {
    // 'VARIABILA' ACEASTA ESTE 'INDEPENDENTA' 
    // DE 'CEA' DIN 'AFARA FUNCTIEI'
    numar++;
}

// APELARE FUNCTIE
creste(numar);

// AFISARE:
console.log(numar);


//========================================================
//  (EX. 2) 'REFERINTA' (COPIATE PRIN ADRESA LOCATIEI) 
//========================================================
// OBIECT:
let obiect = { valoare: 10 };

// FUNCTIE
function creste(obiect) {
    // INCREMENTAREA PROP. OBIECTULUI:
    obiect.valoare++;
}

// APELARE FUNCTIE
creste(obiect);

// AFISARE:
console.log(obiect);