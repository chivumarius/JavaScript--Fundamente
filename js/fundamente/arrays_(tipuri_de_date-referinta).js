/* ==========================================
      'ARRAYS'/MATRICI' (TIPURI DE DATE 'REFERINTA')
=============================================*/

/*
    __________________________________________________
   * 'MATRICILE' - SUNT UTILIZATE PT. STOCAREA 
                  'LISTELOR' DE 'DATE'.
   * ELEMENTELE 'MATRICII' - SUNT NOTATE CU 'INDECSI'
       (NUMEROTATI DE LA '0',.. 'n') - CARE 'INDICA' 
       - 'POZITIA' ELEMENTULUI IN 'MATRICE'.
   * PRACTIC 'MATRICEA' - ESTE UN 'OBIECT':
       (RULEAZA CMD. IN CONSOLA: 
             typeof culoorileSelectate; )
    __________________________________________________
*/

// =============================================
// ARRAY (MATRICE  'LITERALA' / 'GOALA')
// let culoorileSelectate = [];

// =============================================
// ARRAY (MATRICE 'INITIALIZATA')
let culoorileSelectate = ['rosu', 'albastru'];

// 'ADAUGAREA' UNUI 'NOU ELEMENT 'IN 'MATRICE':
culoorileSelectate[2] = 'verde';

// IN 'JS' - IN 'MATRICI' - PUTEM 'STOCA' - 'TIPURI DE DATE DIFERITE':
culoorileSelectate[3] = 5;

// AFISARE - MATRICE:
console.log(culoorileSelectate);

// AFISARE - 'ELEMENTULUI MATRICII' (DUPA 'INDEX'):
console.log(culoorileSelectate[1]);


// PROP. 'LENGTH' (DETERMINA 'LUNGIMEA MATRICEI')
console.log(culoorileSelectate.length);