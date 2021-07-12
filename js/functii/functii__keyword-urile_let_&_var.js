/* ===============================================================
    FUNCTII: 
    KEYWORD-URILE  'LET'  &  'VAR'
=================================================================*/

/*
    EX.: 
        let x = 0;
        var y = 0;
    
   KEYWORD-UL 'VAR' ('FUNCTION  SCOP  VARIABLES')
     => UTILIZAT PANA LA APARITIA 'ECMASCRIPT6',
     => CREAZA VARIABILE  ACCESIBILE LA NIVEL FUNCTIONAL,
     => FACE VARIABILA ACCESIBILA LA NIVELUL FUNCTIEI IN CARE SE AFLA,
*/


//=================================================================
// (1) FUNCTCTIA
//=================================================================
function start() {
    // ITEREAREA BUCLEI:
    // for (let i = 0; i < 5; i++)

    // SCHIMBAM KEYWORD-UL 'LET' CU 'VAR'   <= 'FUNCTION  SCOP  VARIABLES'
    for (var i = 0; i < 5; i++)
        console.log(i);

    // VALOAREA AFISATA ESTE VALOAREA DE INCHIDERE A BUCLEI '5'
    console.log(i);

}

// APELARE FUNC.:
start();




//=================================================================
// (2) ACCESIBILITATEA  FUNCTIONALA  (SCOP FUNCTIONAL)  - PRIN 'VAR'
//=================================================================
function start2() {

    // SCHIMBAM KEYWORD-UL 'LET' CU 'VAR'   <= 'FUNCTION  SCOP  VARIABLES'
    for (var i = 0; i < 5; i++) {
        if (true) {
            // var culoare = 'Rosu';
            let culoare = 'Rosu';
        }
    }

    // VARIABILA ACCESIBILA FUNCTIONAL
    console.log(culoare);

}

// APELARE FUNC.:
start2();