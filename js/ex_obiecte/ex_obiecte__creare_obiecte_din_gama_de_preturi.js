/* =============================================================
   EXERCITIU OBIECTE:
   OBIECTE  DIN  'GAMA'  DE  'PRETURI
============================================================= */

/*
    CERINTE:

    > PE 'YELP.COM' AVEM BUTOANELE 'PRICE RANGE'
    > PT. IMPLEMENTAREA ACESTOR CONCEPTE  FOLOSIND OBIECTE  
        => CE PROPRIETATI TREBUIE SA AIBA ACESTE OBIECTE?
*/

// ============================================================== 
// [1] MATRICEA 'GAMAPRETURI' (CU '3 OBIECTE')
// ============================================================= 
let gamaPreturilor = [

    {
        eticheta: 'Lei',
        tooltip: 'Ieftin',
        minPerPersoana: 0,
        maxPerPersoana: 50
    },
    {
        eticheta: 'Lei Lei',
        tooltip: 'Moderat',
        minPerPersoana: 51,
        maxPerPersoana: 100
    },
    {
        eticheta: 'Lei Lei Lei',
        tooltip: 'Scump',
        minPerPersoana: 101,
        maxPerPersoana: 150
    },

];

// ============================================================== 
// [2] MATRICEA 'RESTAURANTE' (CU 'OBIECT')
// ============================================================= 
let restaurante = [{
    mediePerPersoana: 25
}];