/* ==========================================
     EXERCITIU:
     AVLAREA 'VALORII  MAXIME' A '2 NUMERE'
=============================================*/

/*
  __________________________________________________
  
  CERINTE:`
   
    * SCRIETI O 'FUNCTIE' CARE PREIA 2 NUMERE
        => SI RETURBEAZA VALOAREA MAXIMA A CELOR 2 NUMERE.
  __________________________________________________
*/



//=============================================
// FUNCTIA 'MAXIMUL':
function maximul(a, b) {
    // CONDITIONALA 'IF':
    // if (a > b) 
    // return a;
    // return b;

    // UTIL. 'OPERATORULUI CONDITIONAL' 
    // (ESTE 'SOLUTIA' MAI 'CURATA'):
    return (a > b) ? a : b;
}

//______________________________________________
// APELAREA FUNC. IN VARIABILA:
let numar = maximul(5, 7);

//______________________________________________
// AFISAREA
console.log(numar);