/* ==========================================
     EXERCITIU:
     PUNCTE DE PENALIZARE A 'CONDUCATORILOR AUTO'
     PENTRU 'DEPASIREA VITEZEI LIMITA PERMISE'
=============================================*/

/*
  __________________________________________________
  
  CERINTE:`
   
    verificaViteza(50);
    
    function verificaViteza(viteza){
      ... (1) LIMITA VITEZEI = 70 KM/K
      ... (2) 1  PUNCT DE PENALIZARE = 5 KM PESTE LIMITA DE VITEZA
      ... (3) CONVERTIREA 'NR. CU REAL' IN 'NR. INTREG' 
                => PRIN FUNC. 'Math.floor(1.3) 
                => PT. ROTUNJIREA LA VALOAREA INFERIOARA A PUNCTELOR
      ... (4) 12 PUNCTE = SUSPENDAREA PERMISULUI DE CONDUCERE
    }
  __________________________________________________
*/



//=============================================
// CONSTANTA -  'LIMITA DE VITEZA' A 'MASINII' (70 KM/H):
const limitaDeViteza = 70;

// (1)  CONSTANTA - 'NR. KM.' PT. '1 PUNCT' DE 'PENALIZARE':
const kmPerPunctDePenalizare = 5;

// (2) FUNCTIA 'VERIFICAREVITEZA':
function verificaViteza(viteza) {

    // (0) VERIFICAREA 'LIMITEI' DE 'VITEZA' - 'ACCEPTATE':
    if (viteza < (limitaDeViteza + kmPerPunctDePenalizare)) {
        //  AFISAREA:
        console.log('Ok, sunteti in limita acceptata de viteza!');
        return;
    }

    // (2) CALCULA  NR. PUNCTELE DE PENALITATE
    // (3) CONVERTIREA 'NR. CU REAL' IN 'NR. INTREG'
    const puncte = Math.floor((viteza - limitaDeViteza) / kmPerPunctDePenalizare);

    // VERIFICAREA PUNCTAJUI MAXIM
    // (4) '12 PUNCTE' = 'SUSPENDAREA'- 'PERMISULUI DE CONDUCERE'
    if (puncte >= 12) {
        //  AFISARE - 'MESAJ':
        console.log('Permis de Conducere v-a fost SUSPENDAT!');
    } else {
        //  AFISAREA - 'MR.' DE 'PUNCTE':
        console.log('Puncte:', puncte);
    }
}

// APELARE FUNCTIEIcolor: 'rgba(verificaVitezaverificaViteza, 255, 255, 1)',
// verificaViteza(50);
// verificaViteza(70);
// verificaViteza(75);
// verificaViteza(77);
// verificaViteza(80);
verificaViteza(130);