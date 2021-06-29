/* ==========================================
    VARIABILELE
=============================================*/

// Sunt declarate prin Cuvantul Cheie 'let' (conform Standardului 'ECMAScript6')
let nume = 'Marius';

// AFISAREA IN CONSOLA
console.log(nume);



/*
    'REGULI' DE 'DEFINIREA VARIABILELOR': 
    
        (1) NU POT FI 'CUVINTE  CHEIE  REZERVATE' (EX.: 'LET', 'IF', 'ELSE'..);
        (2) 'NUMELE' TREBUIE SA FIE O 'DENUMIRE COMPLETA' & 'DISCRIPTIVA' (EX. NU 'X', NU '2N', ..);
        (3) NU POT INCEPE CU UN 'NUMAR';
        (4) NU POT CONTINE 'SPATII' SAU 'HYPHON' (UTIL. cazul 'NOTATIEI CAMILA')
        (5) SUNT 'CASE SENSITIVE' (FAC DIFERENTA INTRE LITERE ',ARI' & 'MICI')
*/



// =======================================================
// VARIABILE CU 'MULTIPLE NUME' - 'KAMEL NOTATION CASE ': 'rgba(255, 255, 255, 1)',
let primulNume;
let numeDeFamilie;


// =======================================================
// DECLARAREA MAI MULTOR VARIABILE:

// (1) DECLARARE 'MULTIPLA' A 'VARIABILELOR' - FARA 'INITIALIZARE':
let primulNume, ultimulNume;

// (2) DECLARARE 'MULTIPLA' A 'VARIABILELOR' - CU 'INITIERE' & FARA 'INITIALIZARE':
let primulNume = 'Marius',
    ultimulNume;

// (3) DECLARARE 'MULTIPLA' A 'VARIABILELOR' (CU 'INITIERE') PE LINII SEPARATE:
let primulNume = 'Marius';
let ultimulNume = 'Chivu';