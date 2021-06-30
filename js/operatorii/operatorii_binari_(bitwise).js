/* ============================================================================
        OPERATORII 'BINARI' ('BITWISE') 
===============================================================================*/
/*
    __________________________________________________________________________
     * FORMATUL 'BINAR' ('0' & '1') -- ('UTILIZAT'  DE  'CALCULATOARE'):
       
        1 = 00000001   (8 BITI)
        2 = 00000010   
        3 = 00000011   (1 + 2)

     __________________________________________________________________________
*/

//===============================================================================
// (1) OP. BITWISE 'OR' ('|') - []SE 'ADUNA' - 'VALOAREA' BITILOR LUI '1' CU '2']
//     (DACA UNUL DINTRE BITI ARE VALOAREA '1' 
//       => REZULTATUL VA FI '1' 
//       => IN CAZ CONTRAR ESTE '0')
// console.log(1 | 2); // R = 3

//===============================================================================
// (2) OP. BITWISE 'AND' ('&'):
//     (DACA 'AMBI BITI' AU VALOAREA '1' 
//       => REZULTATUL VA FI '1' 
//       => IN CAZ CONTRAR ESTE '0')
// console.log(1 & 2); // R = 0


//===============================================================================
// EX.  DE UTILIZARE - 'SISTEM  DE  CONTROL  AL  ACCESULUI':
//===============================================================================
// ( DACA VREM SA ACORDEM PERMISIUNI UTILIZATORULUI: 
//    'READ'    = 00000100, 
//    'WRITE'   = 00000010, 
//    'EXECUTE' = 00000001,
//    'READ' & 'WRITE'             = 00000110,
//    'READ' & 'WRITE' & 'EXECUTE' = 00000111,)

// (1) ACCES PT. 'CITIRE' ('READ' = 00000100 (NR. DEC. = 4))
const permisiuneCitire = 4;

// (2) ACCES PT. 'SCRIERE' ('WRITE' = 00000010 (NR. DEC. = 2))
const permisiuneScriere = 2;

// (3) ACCES PT. 'EXECUTARE' ('EXECUTE' = 00000001 (NR. DEC. = 1))
const permisiuneExecutare = 1;

// VARIAMILA (DEFAULT):
let permisiuneaMea = 0;

// OP. BITWISE 'OR'
// ACORDAREA DE 'EXTRA  PERMISIUNI' (PRIN UPGRADAREA 'PERMISIUNEAMEA'):
permisiuneaMea = permisiuneaMea | permisiuneCitire | permisiuneScriere;

// AFISARE:
// console.log(permisiuneaMea);


// OP. 'CONDITIONAL' / 'TERNAL':
let mesaj =
    (permisiuneaMea & permisiuneScriere) ? 'Da' : 'Nu';

// AFISARE:
console.log(mesaj);