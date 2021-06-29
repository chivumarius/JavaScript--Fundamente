/* ==========================================
      'FUNCTIONS'/ 'FUNCTII' (TIPURI DE DATE 'REFERINTA')
=============================================*/

/*
    __________________________________________________
   * 'FUNCTIILE' - SUNT BLOCURI DE CONSTRUCTII FUNDAMENTALE 
                   IN JAVASCRIPT.
   * 'FUNCTIA' - ESTE UN 'SET DE INSTRUCTIUNI' - CARE
                 REALIZEAZA O SARCINA SAU CALCULEAZA
                 O VALOARE. 
    __________________________________________________
*/

// =============================================
// FUNCTIA - 'SALUTARE' 
// (LOGICA: 'AFISAREA MESAJULUI IN CONSOLA'):
function salutare() {
    // CORPUL FUNCTIEI
    console.log('Salutare Oameni Buni!');
}

// =============================================
// APELAREA/AFISAREA  FUNCTIEI:
salutare();


// =============================================
// FUNCTIA  CU PARAMETRU/VARIABILA (CE REP. UN 'INPUT' AL 'FUNCTIEI'): 
function salutare(nume) {
    console.log('Salutare' + ' ' + nume + '!');
}

// APELAREA/AFISAREA  FUNCTIEI PRINTR-UN 'ARGUMENT':
salutare('Andrei');

/*
    __________________________________________________
   * 'PARAMETRUL' - REPREZ. 'INTRARILE' FUNCTIEI
   * 'ARGUMENTUL' - REPREZ. 'VALOAREA' FURNIZATA 
                    PT. UN 'PARAMENTRU' AL 'FUNCTIEI'
    __________________________________________________
*/


// REUTILIZAREA  FUNCTIEI - CU UN 'INPUT' DIFERIT:
salutare('Cristian');
salutare('Nicholas');




// =============================================
// 'FUNCTIA'  CU  'PARAMETRII'/INTRARI 'MULTIPLI'/E: 
function salutare(nume, numeFamilie) {
    console.log('Salutare' + ' ' + nume + ' ' + numeFamilie + '!');
}


// 'APELAREA'/'AFISAREA'  'FUNCTIEI' CU 'PARAMETRII MULTIPLI':
salutare('Marian', 'Chivu');
salutare('Stefan', 'Gheorghe');