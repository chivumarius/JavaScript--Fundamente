/* ==========================================
         OPERATORII 'LOGICI'
=============================================*/

/*
    __________________________________________________________________________
   
    * UTILIZAM 'OP. LOGICI' 
        ==> PT. A LUA 'DECIZI' 
        ==> BAZATE PE 'CONDITII  MULTIPLE'
    
    * 'OP. LOGICI' SUNT DE 3 TIPURI:
        (1) OP. LOGIC 'AND' ('&&') -- RETURNEAZA 'TRUE' - DACA AMBI OPERANZI SUNT 'ADEVARATI';
        (2) OP. LOGIC 'OR' ('||')  -- RETURNEAZA 'TRUE' - DACA UNUL DINTRE OPERANZI ESTE 'ADEVARATI';
        (3) OP. LOGIC 'NOT' ('!')
     __________________________________________________________________________
*/


// ============================================================================
//  (1) OP. LOGIC 'AND' ('&&')
// ============================================================================
// console.log(true && true);
// console.log(false && true);
// console.log(false && false);


// ============================================================================
//  EXEMPLU DE UTILIZARE:
// ============================================================================
// 'AMBELE VARIABILE' AU 'VALOAREA' DE 'ADEVAR':
let venitMare = true;
let scorDeCreditBun = true;

// OP. LOGIC 'AND' ('&&')
let eligibilPentruImprumut = venitMare && scorDeCreditBun;

// AFISARE:
console.log(eligibilPentruImprumut);


// ============================================================================
//  (2) OP. LOGIC 'OR' ('||') 
// ============================================================================

// 'O VARIABILA' TREBUIE SA AIBA 'VALOAREA' DE 'ADEVAR':
let venitMare2 = true;
let scorDeCreditBun2 = false;

// OP. LOGIC 'OR' ('||')
let eligibilPentruImprumut2 = venitMare2 || scorDeCreditBun2;

// AFISARE:
console.log(eligibilPentruImprumut2);


// ============================================================================
//  (3) OP. LOGIC 'NOT' ('!')
// ============================================================================

// 'O VARIABILA' TREBUIE SA AIBA 'VALOAREA' DE 'ADEVAR':
let venitMare3 = false;
let scorDeCreditBun3 = false;

// OP. LOGIC 'OR' ('||')
let eligibilPentruImprumut3 = venitMare3 || scorDeCreditBun3;

// OP. LOGIC 'NOT' ('!')
let cerereRefuzata = !eligibilPentruImprumut3;

// AFISARE:
console.log('Eligibil:', eligibilPentruImprumut3);
console.log('Cerere Refuzata:', cerereRefuzata);