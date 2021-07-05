/* =======================================================
    OBIECTE:'NOTIUNI  FUNDAMENTALE'
    'FUNCTIIP' & 'OBIECTE'
    (IN 'JAVASCRIPT' = 'FUNCTIILE' SUNT 'OBIECTE')
==========================================================*/

/*
    (*) UNUL DINTRE 'CONCEPTELE CONFUZE' 
        DIN 'JAVASCRIPT'
         => ESTE CA 'FUNCTIILE' SUNT 'OBIECTE'.
    
    (*) IN 'SUGESTII' (CTRL + SPACE) 
            => PROPR. AU CULOAREA 'ALBASTRA'
            => METODELE AU CULOAREA 'ALBA'

    (*) UTILIZAM CARACTERELE 'BIFA INAPOI' / BACKTICK (``) 
            => PT. INSERAREA MAI MULTOR PROPS.
*/

//=============================================
//  OBIECTUL 'CERC' [FUNCTIA 'CONSTRUCTOR'] (NOTATIA 'PASCAL')
//=============================================
function Cerc(raza) {
    this.raza = raza;
    this.desen = function() {
        console.log('desen');
    }
}

// DECLARAREA FUNCTIEI
// const Cerc1 = new Function('raza', `
//     this.raza = raza; 
//     this.desen = function() {
//         console.log('desen');
//     }
// `);

// CREARE OBIECT:
// const cerc = new Cerc1(1);

//=============================================
// (1) METODA PREDEFINITA 'CALL()'
//=============================================
// APELAREA FUNC. PRIN METODA 'CALL()'
Cerc.call({}, 1);
// Cerc.call(window, 1);


//=============================================
// (2) METODA PREDEFINITA 'APPLY()' (UTIL. PT. 'MATRICI')
//=============================================
// APELAREA FUNC. PRIN METODA 'APPLY()'
Cerc.apply({}, [1, 2, 3]);


// CREARE OBIECT:
const alt = new Cerc(1);
// const alt = Cerc(1);