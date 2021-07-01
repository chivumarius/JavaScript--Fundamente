/* ============================================================================
        FLUX  DE  CONTROL -
        INSTRUCTIUNEA CONDITIONALA - 'IF ... ELSE'
===============================================================================*/
/*
    __________________________________________________________________________
    SINTAXA:
        IF (CONDITIA 1) {
            INSTRUCTIUNEA EXECUTATA
        }
        ELSE IF (CONDITIA 2) {
            INSTRUCTIUNEA EXECUTATA
        }
        
        .
        .
        .

        ELSE IF (CONDITIA N) {
            INSTRUCTIUNEA EXECUTATA
        }
        ELSE {
            INSTRUCTIUNEA EXECUTATA
        }
    __________________________________________________________________________
*/

/*
    __________________________________________________________________________
    EX. DE LOGICA:
     => 'ORELE'
     => DACA 'ORELE' = SUNT INTRE '6 AM' & '12 AM': 'BUNA DIMINEATA!'
     => DACA 'ORELE' = SUNT INTRE '12 AM' & '6 PM': 'BUNA ZIUA!'
     => DACA 'ORELE' = SUNT INTRE '6 PM' & '12 PM': 'BUNA SEARA!'
    __________________________________________________________________________
*/

// VARIABILA:
let ora = 10;

//===============================================================================
// (V1) CONDITIONALA 'IF ... ELSE':
//===============================================================================
/*
    if (ora >= 6 && ora < 12) {
        console.log('Buna dimineata!');
    } else if (ora >= 12 && ora < 18) {
        console.log('Buna ziua!');
    } else {
        console.log('Buna seara!');
    }
*/

//===============================================================================
// (V2) CONDITIONALA 'IF ... ELSE' (FORMA SCURTA):
//===============================================================================
if (ora >= 6 && ora < 12)
    console.log('Buna dimineata!');
else if (ora >= 12 && ora < 18)
    console.log('Buna ziua!');
else
    console.log('Buna seara!');