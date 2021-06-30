/* ============================================================================
        EXERCITIU 'SCHIMBAREA  VARIABILELOR' ('OPERATORII')
===============================================================================*/
/*
    __________________________________________________________________________
    [Q]: CUM SCHIMBAM VALOAREA LUI 'A'
          -> CU VALOAREA LUI 'B' 
          -> & A LUI 'B'  CU 'A'?

    [A]: CREAM VARIABILA 'C' & INTER-SCHIMBAM VALORILE ACESTORA.
    __________________________________________________________________________
*/

// DECLARAM VARIABILELE:
let a = 'Rosu';
let b = 'Albastru';
let c = a;

// SUPRASCRIEM:
a = b;
b = c;

// AFISARE
console.log(a);
console.log(b);