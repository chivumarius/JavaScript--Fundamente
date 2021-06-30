/* ============================================================================
        OPERATORII 'LOGICI' CU  VALORI  'NON-BOLEANE'
===============================================================================*/
/*
    __________________________________________________________________________
   
    * VALORILE 'FALSY' ('FALSE') - SUNT 'VALORI' CONSID. 'FALSE' 
               ==> ATUNCI CAND  SUNT  'INTALNITE' INTR-UN CONTEXT 'BOOLEAN'.
    * VALORILE 'FALSY' ('FALSE'):

          (1) 'undefined'                     
          (2) 'null'                     
          (3) '0'                     
          (4) 'false'                     
          (5) ''                     
          (6) 'NaNE' (NOT  A  NUMBER)        

     __________________________________________________________________________
*/
/*
    __________________________________________________________________________
   
    * VALORILE 'TRUTHY' ('ADEVARATE') - SUNT 'VALORI' CONSID. 'ADEVARATE' 
               ==> ATUNCI CAND  SUNT  'INTALNITE' INTR-UN CONTEXT 'BOOLEAN'
               ==> CIRCUIT SCURT.
            
    * PRIN ACEASTA 'TEHNICA' - PUTEM ASIGURA 'VALORI DEFAULT' A UNEI 'VARIABILE'.            
     __________________________________________________________________________
*/

// ===============================================================================
// EXEMPLU 1 - DE UTILIZARE:

// DACA UTILIZATORUL 'SELECTEAZA' O 'CULOARE':
let culoareUtilizator = 'Rosu';
let culoareImplicita = 'Albastru';

//  OP. 'LOGICI' CU  VALORI  'NON-BOLEANE'
let culoareaCurenta = culoareUtilizator || culoareImplicita;

//AFISAREA:
console.log(culoareaCurenta);


// ===============================================================================
// EXEMPLU 2 - DE UTILIZARE:

// DACA UTILIZATORUL 'NU SELECTEAZA' O 'CULOARE':
let culoareUtilizator2 = '';
let culoareImplicita2 = 'Albastru';

//  OP. 'LOGICI' CU  VALORI  'NON-BOLEANE'
let culoareaCurenta2 = culoareUtilizator2 || culoareImplicita2;

//AFISAREA:
console.log(culoareaCurenta2);