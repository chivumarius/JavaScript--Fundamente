/* ===============================================================
    FUNCTII: 
   UTILIZAREA  CONSTANTA  'SELF', METODA '.BIND(THIS)'  
     &  FUNCTIA 'SAGEATA' (IN  LOCUL  KEWORD-ULUI  'THIS')
=================================================================*/

/*

    SCHIMBAREA 'THIS' PRIN:

        (I)   CONSTANTA 'SELF'
        (II)  METODA '.BIND(THIS)'
        (III) FUNCTIA 'SAGEATA'  ( () => {} )   <= SOLUTIA MODERNA RECOMANDATA



    'THIS' -> REFERA 'OBIECTUL' CARE EXECUTA 'FUNCTIA CURENTA'.

    FUNCTIILE 'SAGEATA' => MOSTENESC KEWORD-UL 'THIS'.
*/

//=================================================================
//  (1) 'SOLUTIA 1' - DE SCHIMBARE A 'VALORII' LUI 'THIS' INTR-O 'FUNCTIE'
//       (NB! AVORDARE 'NERECOMANDATA')
//=================================================================

// OBIECT:
const video2 = {
    titlu: 'titlu',

    // MATRICEA:
    etichete: ['tag1', 'tag2', 'tag3'],

    // METODA:
    afiseareEtichete() {

        // CREAN CONSTANTA 'SELF' (SAU 'THAT'):
        // REFERA OBIECTUL 'VIDEO'
        const self = this;

        // 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'WINDOW':
        this.etichete.forEach(function(etichete) {

            //INLOCUIM 'THIS' CU 'SELF'
            // AFISARE 'TITLU' ALATURI DE 'ELEMENTELE MATRICEI':
            console.log(self.titlu, etichete);
        })
    }
};

// APELAREA: 
video2.afiseareEtichete();



//=================================================================
// (#) (FUNCTIILE SUNT OBIECTE IN JS)
//     UTILIZAREA METODELORR: 'APPLY()', 'BIND()', 'CALL()'
//     PT. SCHIMBAREA 'VALORII' LUI 'THIS'
//=================================================================
function playVideo() {
    console.log(this);
}



// FUNCTIA ARE 'PROPS' SI 'METODE'
// (PE CARE LE PUTEM UTILIZA PRIN 'NOTATIA PUNCT')

// [1] MET. 'CALL(OBIECT)' => REFERA OBIECTUL 'PLAYVIDEO'
playVideo.call({ nume: 'Marius' }, 1, 2);


// [2] MET. 'APPLY(OBIECT)' => REFERA OBIECTUL 'PLAYVIDEO' 
//     & PT. ALTE 'ARGUMENTE' NECESITA O 'MATRICE'.
playVideo.apply({ nume: 'Chivu' }, [1, 2]);



// [3.1] MET. 'BIND(OBIECT)' => REFERA O 'NOUA FUNCTIE' CU  OBIECTUL 'CREAT IN EA' 
const functieNoua = playVideo.bind({ nume: 'Marius Chivu' });
functieNoua();

// [3.2] MET. 'BIND(OBIECT)' => REFERA O 'NOUA FUNCTIE' CU  OBIECTUL 'CREAT IN EA' 
playVideo.bind({ nume: 'Marius M. Chivu' })();


// FUNC. 'PLAYFIDEO(WINDOW)' => REFERA OBIECTUL 'WINDOW'
playVideo();




//=================================================================
//  (2) 'SOLUTIA 2' - UTILIZARE METODA '.BIND(THIS)'
//=================================================================

// OBIECT:
const videoClip = {
    titlu: 'Videoclip:',

    // MATRICEA:
    etichete: ['HTML', 'CSS', 'JavaScript'],

    // METODA:
    afiseareTaguri() {

        // 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'WINDOW':
        this.etichete.forEach(function(etichete) {

            // AFISARE 'TITLU' ALATURI DE 'ELEMENTELE MATRICEI':
            console.log(this.titlu, etichete);
        }.bind(this))
    }
};

// APELAREA: 
videoClip.afiseareTaguri();



//=================================================================
//  (3) 'SOLUTIA 3' - UTILIZARE FUNCTIEI 'SAGEATA' 
//       --> CARE 'MOSTENESTE' VALOAREA 'THIS'       <= SOLUTIE MODERNA 'RECOMANDATA'
//      (INCEPAND CU STANDARDUL  'ECMASCRIPT6')
//=================================================================

// OBIECT:
const videoClip2 = {

    titlu: 'Videoclip:',

    // MATRICEA:
    etichete: ['Engleza', 'Franceza', 'Germana'],

    // METODA:
    afiseareTaguri() {

        // 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'CURENT':
        this.etichete.forEach(etichete => {

            // AFISARE 'TITLU' ALATURI DE 'ELEMENTELE MATRICEI':
            console.log(this.titlu, etichete);
        })
    }
};

// APELAREA: 
videoClip2.afiseareTaguri();