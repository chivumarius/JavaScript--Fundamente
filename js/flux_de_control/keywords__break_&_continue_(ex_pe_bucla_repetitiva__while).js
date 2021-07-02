/* ============================================================================
        FLUX  DE  CONTROL - 
        CUVINTELE CHEIE 'BREAK' & 'CONTINUE'
        - FOLOSIND BUCLA  REPETITIVA -- 'WHILE'
===============================================================================*/
/*
    __________________________________________________________________________
    (NB!) 

        * KEYWORD-UL 'BREAK' => PERMITE SARIREA DINTR-O VUCLA;
        * KEYWORD-UL 'CONTINUE' => PERMITE SARIREA LA ITERATIA 'URMATOARE'.
            (ESTE FOARTE RAR UTILIZAT, ARATA NEPLACUT)
    __________________________________________________________________________
*/


//===============================================================================
//  EX. 0 - BUCLA  REPETITIVA 'WHILE' 
//===============================================================================

// INITIALIZREA  VARIABILEI:
let i = 0;

// BUCLA 'WHILE':
while (i <= 10) {
    // AFISAREA 'I':
    console.log(i);

    // INCREMENTAREA:
    i++;
}


//===============================================================================
//  EX. 1 - 'SARIREA' DIN 'BUCLA'  - UTILIZAND 'KEYWORD'-UL 'BREAKE':  
//===============================================================================

// INITIALIZREA  VARIABILEI:
let i1 = 0;

// BUCLA 'WHILE':
while (i1 <= 10) {
    // IESE DIN 'BUCLA' LA 'VALOAREA = 5' (DATORITA KEYWORD-ULUI 'BREAK'):
    if (i1 === 5) break;


    // AFISAREA 'I':
    console.log(i1);

    // INCREMENTAREA:
    i1++;
}


//=====================================================================================
//  EX. 2 - 'SARIREA' LA 'ITERATIA  URMATOARE'  - UTILIZAND 'KEYWORD'-UL 'CONTINUE':  
//=====================================================================================

// INITIALIZREA  VARIABILEI:
let i2 = 0;

// BUCLA 'WHILE':
while (i2 <= 10) {
    // INSTRUCTIUNEA 'CONDITIONALA' (AFLARE 'NR. IMPARE'):
    if (i2 % 2 === 0) {

        // INCREMENTAREA:
        i2++;

        // KEYWORD-UL 'COBTINUE' (CONTINUA EXECUTAREA ITERATIEI URMATOARE):
        continue;
    }


    // AFISAREA 'I':
    console.log(i2);

    // INCREMENTAREA:
    i2++;
}