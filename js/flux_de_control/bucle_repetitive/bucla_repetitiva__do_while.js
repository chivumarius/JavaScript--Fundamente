/* ============================================================================
        FLUX  DE  CONTROL - 
        BUCLA  REPETITIVA -- 'DO ... WHILE'
===============================================================================*/
/*
    __________________________________________________________________________
    (NB!) PT. 'REPETAREA' UNEI 'ACTIUNI', PT. UN ANUMIT 'NR. DE ORI' 
            => SE UTILIZEAZA 'BUCLE REPETITIVE' ('LOOPS').
    
    IN JAVASCRIPT EXISTA URMAT. 'TIPURI'  DE  'BUCLE REPETITIVE'color: 'rgba(255, 255, 255, 1)',
        (1) BUCLA 'FOR'
        (2) BUCLA 'WHILE'
        (3) BUCLA 'DO ... WHILE'
        (4) BUCLA 'FOR ... IN'
        (5) BUCLA 'FOR ... OF'
    __________________________________________________________________________
*/

/*
    __________________________________________________________________________
    BUCLA REPETITIVA - 'DO ... WHILE'

    SINTAXA:

        DO) {
                ..INSTRUCTIUNI
        } WHILE ( CONDITIA );
    
    (NB!) 'CONDITIA' ESTE 'EVALUATA' LA 'SFARSIT' 
        => IAR 'INSTRUCTIUNIILE' SUNT 'INTOTDEAUNA' 'EVALUATE'.
    __________________________________________________________________________
*/



//===============================================================================
// BUCLA 'FOR' CU 'CONDITIONALA':
//===============================================================================
// for (let i = 0; i <= 5; i++) {

// CONDITIONALA (AFLARE 'NR. IMPARe'):
//     if (i % 2 !== 0)
//         console.log(i);
// }


//===============================================================================
//  BUCLA  REPETITIVA 'WHILE' 
//===============================================================================

// INITIALIZREA  VARIABILEI:
// let i = 0;

// BUCLA 'WHILE':
// while (i <= 5) {
// INSTRUCTIUNEA 'CONDITIONALA' (AFLARE 'NR. IMPARe'):
// if (i % 2 !== 0) {
// AFISAREA 'I':
//     console.log(i);
// }

// INCREMENTAREA:
//     i++;
// }



//===============================================================================
//  BUCLA  REPETITIVA 'DO ... WHILE' 
//===============================================================================

// INITIALIZREA  VARIABILEI:
let i = 0;

// BUCLA 'DO ... WHILE':
do {
    // INSTRUCTIUNEA 'CONDITIONALA' (AFLARE 'NR. IMPARe'):
    if (i % 2 !== 0) {
        // AFISAREA 'I':
        console.log(i);
    }

    // INCREMENTAREA:
    i++;
} while (i <= 5);