/* ===============================================================
    FUNCTII: 
    KEYWORD-UL  'THIS'
=================================================================*/

/*
   (NB!)
        'THIS' 
            -> ESTE 'OBIECTUL' 
            -> CARE EXECUTA 'FUNCTIA CURENTA' (IN CARE SE AFLA)
    
    (1) 'FUNCTIA' CE 'APARTINE' UNUI 'OBIECT' 
            == 'METODA' A UNUI 'OBIECT' 
            <= 'THIS' REPR.  'REFETINTA' -> CATRE 'OBIECTUL'.
       
            
    (2) 'FUNCTIA' REGULATA (CARE 'NU APARTINE' DE UN 'OBIECT')
            <= 'THIS'  REP.  'REFETINTA' 
            -> CATRE OBIECTUL 'GLOBAL' -> OBIECTUL 'WINDOWS'.
    
            
    (3) 'FUNCTIA CONSTRUCTOR' (CARE APELEAZA FUNC. PRIN OP. 'NEW')
            <= 'THIS'  REP.  'REFETINTA' 
            -> CATRE 'NOUL OBIECTUL' - 'GOL' -> OBIECTUL 'WINDOWS'.
    
    (*) OPERATORUL 'NEW'
        => CREAZA UN 'NOU OBIECT GOL'
        => SI SETEAZA KW. 'THIS' => SA SE ADRESEZE 'OBIECTULUI GOL'.

*/


//=================================================================
// (1) 'FUNCTIE'  CE  'APARTINE'  UNUI  'OBIECT':
//=================================================================
// OBIECT:
const video = {
    titlu: 'a',
    play() {
        // AFISARE  OBIECT 'VIDEO'
        console.log(this);
    }
};

// ADAUGAM OBIECTULUI 'VIDEO' -> METODA 'STOP()'
video.stop = function() {
    console.log(this);
}

// APELARE:
video.play();




//=================================================================
// (2) 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'WINDOW':
//=================================================================
// OBIECT:
const videoclip = {
    titlu: 'a',
    play() {
        console.log(this);
    }
};

//-------------------------------------------------------------------
// FUNCTIE:
function playVideo() {
    // AFISARE OBIECT 'WINDOW'
    console.log(this);
}

//-------------------------------------------------------------------
// APELARE:
playVideo();






//=================================================================
//  (3) 'FUNCTIA CONSTRUCTOR' (CARE APELEAZA FUNC. PRIN OP. 'NEW')
//=================================================================

// OBIECT:
const videoclip2 = {
    titlu: 'a',
    play() {
        console.log(this);
    }
};


//-------------------------------------------------------------------
//  'FUNCTIA CONSTRUCTOR' 
//-------------------------------------------------------------------
function Video(titlu) {
    this.titlu = titlu;

    // AFISARE OBIECT 'WINDOW'
    console.log(this);
}

//-------------------------------------------------------------------
// CREAM UN 'MOU OBIECT' 'VIDEO' -> METODA 'STOP()'
const v = new Video('b');





//=================================================================
//  (4) 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'WINDOW' DINTR-UN 'ALT OBIECT:'
//=================================================================

// OBIECT:
const clip = {
    titlu: 'a',

    // MATRICEA:
    etichete: ['a', 'b', 'c'],

    // METODA:
    afiseareEtichete() {

        // 'FUNCTIE REGULARA'  CE  REFERA  OBIECTULUI 'WINDOW':
        this.etichete.forEach(function(etichete) {

            // 'THIS' - REFERA OBIECTUL 'WINDOW'
            // AFISARE 'TITLU' ALATURI DE 'ELEMENTELE MATRICEI':
            console.log(this.titlu, etichete);
        }, this)
    }
};

// APELAREA: 
clip.afiseareEtichete();