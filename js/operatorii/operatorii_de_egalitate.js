/* ==========================================
    OPERATORII  DE  'EGALITATE'
=============================================*/

/*
    __________________________________________________
    * OP. 'STRICT' DE 'EGALITATE' ('===')
            ==> AU ACELASI 'TIP DE DATE' &
            ==> AU ACEIASI 'VALOARE'
    * OP. CU 'EGALITATE PIERDUTA' ('==')
            ==> 'CONVERTESC' AUTOMAT 'TIPUL DE DATE' &
            ==> APOI VERIFICA 'EGALITATEA  VALORILOR'. 
     __________________________________________________
*/


// =============================================
// (1) OP. 'STRICT' DE 'EGALITATE' ('==='):
console.log(1 === 1);
console.log('1' === 1);

// =============================================
// (2) OP. 'EGALITATE PIERDUTA' ('=='):
console.log(1 == 1);
console.log('1' == 1);
console.log('1' == '1');
console.log(true == 1);