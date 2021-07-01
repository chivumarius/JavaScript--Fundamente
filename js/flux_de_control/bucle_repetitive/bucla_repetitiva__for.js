/* ============================================================================
        FLUX  DE  CONTROL - 
        BUCLA  REPETITIVA -- 'FOR'
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
    BUCLA REPETITIVA - 'FOR'

    SINTAXA:

        FOR ( 
                EXPRESIA_INITIALA_(ADICA_'INITTIALIZAREA_UNEI_VARIABILE);
                CONDITIA;
                EXPRESIA_DE_INCREMENTARE;
            ) {
                ..INSTRUCTIUNI
            }
    __________________________________________________________________________
*/
//===============================================================================
//  EX. 1 - BUCLA  REPETITIVA 'FOR' ('REPETAT' DE '5 ORI'):
//===============================================================================
// for (let i = 0; i <= 5; i++) {
//     console.log('Salutare Lume!');
// }

// 'BUCLA' - CU 'AFISARE' DE LA '0'  LA '4':
// for (let i = 0; i <= 5; i++) {
//     console.log('Salutare Lume!', i);
// }

// 'BUCLA' - CU 'AFISARE' DE LA '1'  LA '5':
for (let i = 1; i <= 5; i++) {
    console.log('Salutare Lume!', i);
}

//===============================================================================
// EX. 2 - 'BUCLA' CU 'CONDITIONALA':
//===============================================================================
for (let i = 1; i <= 5; i++) {

    // CONDITIONALA (AFLARE 'NR. IMPARe'):
    // if (i % 2 !== 0) {
    //     console.log(i);
    // }

    // CONDITIONALA (AFLARE 'NR. PARE'):
    if (i % 2 === 0) {
        console.log(i);
    }
}


//===============================================================================
// EX. 3 - 'BUCLA' CU 'DECREMENTARE':
//===============================================================================
for (let i = 5; i >= 1; i--) {

    // CONDITIONALA (AFLARE 'NR. IMPARe'):
    if (i % 2 !== 0) {
        console.log(i);
    }

    // CONDITIONALA (AFLARE 'NR. PARE'):
    // if (i % 2 === 0) {
    //     console.log(i);
    // }
}