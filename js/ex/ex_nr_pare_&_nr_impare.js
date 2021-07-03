/* ==========================================
    EXERCITIU:
    AFLAREA 'NR. PARE' & 'NR. IMPARE'
=============================================*/

/*
  __________________________________________________
  
  CERINTE:`
   
   AFLATI NUMERELE PARE SAU IMPARE DINTR-O ITERATIE
  __________________________________________________
*/



//=============================================
// APELAREA FUNC.:
afisareNumere(10);


// FUNCTIA 'AFISARENUMERE':
function afisareNumere(limita) {

    // BUCLA REPETITIVA:
    for (let i = 0; i <= limita; i++) {
        //  SOLUTIA 1
        // VERIFICARE (DACA 'I' ESTE 'NR. PAR' SAU 'IMPAR'):
        // if (i % 2 === 0)
        //     console.log(i, 'PAR');
        // else
        //     console.log(i, 'IMPAR');

        // SOLUTIA 2
        // OP. CONDITIONAL (PT. AFLARE - DACA 'I' ESTE 'NR. PAR' SAU 'IMPAR'):
        const mesaj = (i % 2 === 0) ? 'PAR' : 'IMPAR';

        // AFISARE:
        console.log(i, mesaj);
    };
}