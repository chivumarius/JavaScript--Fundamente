/* ==========================================
  OPERATORII  'CONDITIONALI' SAU  'TERNARI'
=============================================*/

/*
    __________________________________________________________________________
    
    * SINTAXA: 
    ---------------------------------------------------------------------------    
        'CONDITIE' ? 'EXPRESIA_DACA_ESTE_ADEVARATA' : 'EXPRESIA_DACA_ESTE_FALSA';
    ---------------------------------------------------------------------------    
    
    * EX.: 'CUM DECLARAM':
        ==> DACA 'CLIENTII' AU MAI MULT DE '100 PUNCTE'
        ==> ATUNCI 'ACESTIA' SUNT 'CLIENTI' DE 'AUR'
        ==> IAR 'IN CAZ CONTRAR' ACESTIA SUNT 'CLIENTI' DE 'ARGINT'
     __________________________________________________________________________
*/


// =============================================
// VARIABILA:
// let puncte = 110;

// CONDITIA:
// - DACA 'CONDITIA' ESTE 'ADEVARATA' ? ATUNCI ESTE 'AUR' : IN CAZ 'CONTRAR' ESTE 'ARGINT';
// let tipClient = puncte > 100 ? 'Aur' : 'Argint';

// AFISARE:
// console.log(tipClient);


// =============================================
// (2) DACA REDUCEM NR. PUNCTELOR:
let puncte = 90;
let tipClient = puncte > 100 ? 'Aur' : 'Argint';

// AFISARE:
console.log(tipClient);