/* ===============================================================
    FUNCTII: 
    SCOPUL  'LOCAL'  vs  SCOPUL  'GLOBAL'  AL  VARIABILELOR (ZONA  DE  ACCESIBILITATE)
=================================================================*/

/*
   
    (*) 'SCOPUL' 
            => DEFINESTE 'ZONA DE ACCESIBILITATE' A UNEI 'VARIABILE'.
           

   
    (*) 'SCOPUL' POATE FI:
            => LOCAL (IN 'INTERIORUL' UNEI 
                'FUNCTII', 'METODE', BUCLE (LOOP), INSTRUCTIUNI CONDITIONALE)

            => GLOBAL (IN 'EXTERIORUL' UNEI 
                'FUNCTII', 'METODE', BUCLE (LOOP), INSTRUCTIUNI CONDITIONALE)

    (*) PRIORITATEA ACCESARILOR:
            => 'VARIABILELE LOCALE' => SUNT 'ACCESATE PRIMELE'
            => 'VARIABILELE GLOBALE' => SUNT 'ACCESATE' DUPA VARIABILELE 'LOCALE'

    (NB!) A SE EVITA DEFINIREA 'VARIABILELOR'/'CONSTANTELOR' 'GLOBALE' (IN SCOPUL 'GLOBAL')
*/


//=================================================================
// (1) DECLARAREA & INITIALIZAREA CONSTANTEI:
//=================================================================
const mesaj = 'Salut!';

// AFISAREA:
console.log(mesaj);



//=================================================================
// (2) INSERAREA INTR-UN 'BLOC DE COD'     [SCOP 'LOCAL']
//=================================================================
{
    const mesaj2 = 'Buna!';
}

// AFISAREA:
// console.log(mesaj2);


//=================================================================
// (3) INSERAREA INTR-O 'FUNCTIE'     [SCOP 'LOCAL']
//=================================================================
function start() {
    const mesaj3 = 'Buna ziua!';
}

// NU ESTE 'PERMISA ACCESAREA' VARIABILEI DIN 'EXTERIORUL' FUNCTIEI
// console.log(mesaj3);


//=================================================================
// (4) INSERAREA INTR-O 'INSTRUCTIUNE CONDITIONALA'    [SCOP 'LOCAL']
//=================================================================
function salutare() {
    const mesaj3 = 'Buna ziua!';

    // INSTRUCTIUNEA CONDITIONALA:
    if (true) {
        const altMesaj = 'La revedere!';
    }

    // NU ESTE 'PERMISA ACCESAREA' CONSTANTEI DIN 'EXTERIORUL' CONDITIEI
    console.log(altMesaj);
}

// APELARE FUNC.:
// salutare()


//=================================================================
// (5.1) INSERAREA INTR-O 'BUCLA REPETITIVA'     [SCOP 'LOCAL']
//=================================================================
function intampinare() {

    // BUCLA REPETITIVA:
    for (let i = 0; i < 5; i++) {

        // ESTE 'PERMISA ACCESAREA' VARIABILEI IN 'INTERIORUL' BUCLEI:
        console.log(i);
    }
}

// APELARE FUNC.:
intampinare()



//=================================================================
// (5.2) INSERAREA INTR-O 'BUCLA REPETITIVA'  [SCOP 'LOCAL']
//=================================================================
function intampinare2() {

    // BUCLA REPETITIVA:
    for (let i = 0; i < 5; i++) {

        console.log(i);
    }
    // NU ESTE 'PERMISA ACCESAREA' VARIABILEI 'I' DIN 'EXTERIORUL' BUCLEI:
    console.log(i);
}

// APELARE FUNC.:
// intampinare2()



//=================================================================
// (6) VARIABILE  CU ACCESIBILITATE GLOBALA:     [SCOP 'GLOBAL']
//=================================================================
const culoare = 'Verde';

// fFUNCTIA 'INCEPUT':
function inceput() {
    // CONSTANTA CU 'ACCESIBILITATE LOCALA'   [SCOP 'LOCAL']
    const mesaj = 'Bun venit!'

    // AFISAREA CONSTANTEI GLOBALE
    console.log(culoare);
}

// fFUNCTIA 'SFARSIT':
function sfarsit() {
    // CONSTANTA CU 'ACCESIBILITATE LOCALA'   [SCOP 'LOCAL']
    const mesaj = 'La revedere!'
}

// APELARE FUNC.:
inceput();



//=================================================================
// (7) PRIORITATEA ACCESARILOR
//=================================================================

// 'CONSTANTA' CU 'ACCESIBILITATE GLOBALA'   [SCOP 'GLOBAL']
const culoare2 = 'Verde';


// fFUNCTIA 'INCEPUT':
function inceput2() {

    // CONSTANTA CU 'ACCESIBILITATE LOCALA'   [SCOP 'LOCAL']
    const mesaj = 'Bun venit!'

    // 'CONSTANTA' CU 'ACCESIBILITATE LOCALA'   [SCOP LOCAL]
    const culoare2 = 'Rosu';

    // AFISAREA CONSTANTEI GLOBALE
    console.log(culoare2);
}

// fFUNCTIA 'SFARSIT':
function sfarsit2() {
    // CONSTANTA CU 'ACCESIBILITATE LOCALA'   [SCOP 'LOCAL']
    const mesaj = 'La revedere!'
}

// APELARE FUNC.:
inceput2();