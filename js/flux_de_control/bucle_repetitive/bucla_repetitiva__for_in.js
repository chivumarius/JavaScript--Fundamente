/* ============================================================================
        FLUX  DE  CONTROL - 
        BUCLA  REPETITIVA -- 'FOR ... IN'
===============================================================================*/
/*
    __________________________________________________________________________
    (NB!) UTILIZAM  BUCLA  REPETITIVA -- 'FOR ... IN' - PT. A 'ITERA': 
        => 'ASUPRA' UNOR 'PROPRIETATI' ALE UNUI 'OBIECT'
        => SAU 'ASUPRA' 'ELEMENTELOR' DINTR-O 'MATRICE'.
    
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
    BUCLA REPETITIVA - 'FOR ... IN'

    SINTAXA:

        FOR (TIPUL_DATEI CHEIE IN OBIECT) {
                ..INSTRUCTIUNI
            }

        (NB!) 'CONDITIA' ESTE 'EVALUATA' LA 'INCEPUT' 
            => IAR 'INSTRUCTIUNIILE' 'NU SUNT' INTOTDEAUNA 'EVALUATE'.
    __________________________________________________________________________
*/

//===============================================================================
//  EX. 1. - BUCLA  REPETITIVA 'FOR ... IN'  
//          (PT. 'AFISAREA' - 'PROPRIETATILOR' UNUI 'OBIECT'):
//===============================================================================

// OBIECTUL - "PERSOANA":
const persoana = {
    // PROPS.:
    nume: 'Marius',
    varsta: '30'
};

//  BUCLA  REPETITIVA 'FOR ... IN':
for (let cheie in persoana) {
    // 'AFISAREA' - 'PROPRIETATILOR OBIECTULUI' - 'PERSOANA':
    console.log(cheie);
}

//===============================================================================
//  EX. 2. - BUCLA  REPETITIVA 'FOR ... IN'  
//           (PT. 'AFISAREA' 'PROPRIETATILOR' & 'VALORILOR PROPRIETATILOR'  UNUI 'OBIECT'):
//===============================================================================

// OBIECTUL - "PERSOANA":
const persoana2 = {
    // PROPS.:
    nume: 'Marius',
    varsta: '30'
};

//  BUCLA  REPETITIVA 'FOR ... IN':
for (let cheie in persoana2) {
    // 'AFISAREA' - 'PROPRIETATILOR' & 'VALORILOR PROPRIETATILOR' OBIECTULUI 'PERSOANA':
    console.log(cheie, persoana[cheie]);
}

//===============================================================================
//  EX. 3. - BUCLA  REPETITIVA 'FOR ... IN'  
//  (PT. 'ITERAREA' ASUPRA UNEI MATRICI & 'AFISAREA' - 'INDEXULUI ELEMENTELOR' MATRICII 'CULORI')
// (SOLUTIA  'CEA MAI BUNA' - ESTE 'UTILIZAREA' BUCLA  REPETITIVA 'FOR ... OF') :
//===============================================================================

// NATRICEA - "CULORI":
const culori = ['Rosu', 'Galben', 'Albastru'];

// 'ITERAREA'  ASUPRA  'MATRICII'
// BUCLA  REPETITIVA 'FOR ... IN':
for (let index in culori) {
    // 'AFISAREA' - 'INDEXULUI ELEMENTELOR' MATRICII 'CULORI':
    console.log(index);
}

//===============================================================================
//  EX. 4. - BUCLA  REPETITIVA 'FOR ... IN'  
//  (PT. 'ITERAREA' ASUPRA UNEI MATRICI & 'AFISAREA' - 'INDEXULUI ELEMENTELOR'
//      & 'VALORILOR ELEMENTELOR'  MATRICII 'CULORI2'):
//===============================================================================

// NATRICEA - "CULORI":
const culori2 = ['Rosu', 'Galben', 'Albastru'];

// 'ITERAREA'  ASUPRA  'MATRICII'
// BUCLA  REPETITIVA 'FOR ... IN':
for (let index in culori2) {
    // 'AFISAREA' - 'INDEXULUI ELEMENTELOR' & 'VALORILOR ELEMENTELOR' MATRICII 'CULOR2I':
    console.log(index, culori2[index]);
}