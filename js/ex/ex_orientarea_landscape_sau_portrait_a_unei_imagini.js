/* ==========================================
     EXERCITIU:
     AFLAREA ORIENTARII 'LANDSCAPE' SAU 'PORTRAIT'
     A UNEI 'IMAGINI'
=============================================*/

/*
  __________________________________________________
  
  CERINTE:`
   
    function esteLanscape(latime, inaltime){
      ... returnati Adeverat - cand 'latimea' > 'inaltimea'
      ... altfel returnati Neadevarat
    }
  __________________________________________________
*/



//=============================================
// FUNCTIA 'ESTELANDSCAPE':
function esteLandscape(latime, inaltime) {
    // RETURNARE:
    return (latime > inaltime);
}

//______________________________________________
// AFISAREA APELATI FUNCTIEI:
console.log(esteLandscape(900, 600));
console.log(esteLandscape(300, 600));