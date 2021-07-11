/* ===============================================================
    FUNCTII: 
   PARAMETRII  IMPLICITI  AI  FUNCTIILOR
=================================================================*/

/*
    NB!
        PARAMETRUL IMPLICIT (DEFAULT) 
            => TREBUIE SA FIE 'ULTIMUL PARAMETRU' => INTR-O 'FUNCTIE',
            => POT FI 'PLASATI' MAI MULTI 'PARAMETRII' DOAR 'INAINTEA' SA.
*/



//=================================================================
// (1) FUNC. PT. 'CALCULAREA DOBANZII'
//=================================================================
function dobanda(principal, rata, ani) {
    return principal * rata / 100 * ani;
}

// PELAREA FUNC. (PRINCIPAL = 10000$, RATA = 3.4, ANI = 5) 
console.log('Dobanda Platita: ' + dobanda(10000, 3.5, 5));
console.log('_______________________________________');


//=================================================================
// (2)'CALCULAREA DOBANZII' 
//     CU 'VALOARE  IMPLICITA' PT. PROPRIETATILE  'RATA' & 'ANI'
//=================================================================
function dobanda(principal, rata, ani) {
    // PROPRIETATI CU 'VALOARE  IMPLICITA':
    rata = rata || 3.5;
    ani = ani || 5;

    return principal * rata / 100 * ani;
}

// PELAREA FUNC. (PRINCIPAL = 10000$) 
console.log('Dobanda Platita: ' + dobanda(10000));
console.log('_______________________________________');




//=================================================================
// (3) SOLUTIA' MAI CURATA' ADUSA DE 'ES6'
//     'PT. CALCULAREA DOBANZII' 
//     PRIN  PROPRIETATILE CU 'VALOARE  IMPLICITA' ('RATA' & 'ANI')
//=================================================================
// function dobanda(principal, rata = 3.5, ani) { // ==> SE VA AFISA EROAREA 'NOT A NUMBER' (NaN)
function dobanda(principal, rata = 3.5, ani = 5) {
    return principal * rata / 100 * ani;
}

// PELAREA FUNC. (PRINCIPAL = 10000$) 
// console.log('Dobanda Platita: ' + dobanda(10000));
// console.log('Dobanda Platita: ' + dobanda(10000, 5)); // ==> SE VA AFISA EROAREA 'NOT A NUMBER' (NaN) (PT. 'ANI' NESETAT)
// console.log('Dobanda Platita: ' + dobanda(10000, undefined, 5)); // ==> SE VA AFISA VALOAREA INITIALA (PT. 'ANI' NESETAT)
console.log('_______________________________________');