/* ============================================================================
        FLUX  DE  CONTROL - 
        BUCLA  REPETITIVA -- 'FOR ... OF'
===============================================================================*/
/*
    __________________________________________________________________________
    (NB!) UTILIZAM  BUCLA  REPETITIVA -- 'FOR ... UP' - PT. A 'ITERA': 
        => 'ASUPRA' 'ELEMENTELOR'  UNUI 'MATRICI'
       
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
    BUCLA REPETITIVA - 'FOR ... OF'  (PT. 'ITERAREA' ASUPRA 'MATRICILOR')

    SINTAXA:

        FOR (TIPUL_DATEI ELEMENT_(SINGULAR) OF MATRICI_(PLURAL)) {
                ..INSTRUCTIUNI
            }
    __________________________________________________________________________
*/




//===============================================================================
//  EX. 1. - BUCLA  REPETITIVA 'FOR ... OF'  
//  (PT. 'ITERAREA' ASUPRA UNEI MATRICI & 'AFISAREA' - 'ELEMENTELOR' MATRICII 'CULORI')
//===============================================================================

// NATRICEA - "CULORI":
const culori = ['Rosu', 'Galben', 'Albastru'];

// 'ITERAREA'  ASUPRA  'MATRICII'
// BUCLA  REPETITIVA 'FOR ... OF':
for (let culoare of culori) {
    // 'AFISAREA' - 'ELEMENTELOR' MATRICII 'CULORI':
    console.log(culoare);
}