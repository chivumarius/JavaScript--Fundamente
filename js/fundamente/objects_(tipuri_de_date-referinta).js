/* ==========================================
   TIPURI DE DATE (REFERINTA)
=============================================*/

/*
    __________________________________________________
    IN 'JS' EXISTA 2 CATEGORI DE TIPURI DE DATE:
       [I]  TIPURI 'PRIMITIVE'
       [II] TIPURI DE 'REFERINTA'
    __________________________________________________
    
    __________________________________________________
    TIPURI 'PRIMITIVE' color: 'rgba(255, 255, 255, 1)',
       (1) OBJECT
       (2) ARRAY
       (3) FUNCTION
    __________________________________________________
*/

// ==========================================
// 'OBJECT' (OBIECT 'LITERAL')
let persoana = {
    // CHEILE (PROPRIETATILE) OBIECTULUI
    nume: 'Marius',
    varsta: 30
};


// AFISARE OBIECT 'PERSOANA':
console.log(persoana);


/*
   ACCESAREA 'PROPRIETATILOR' -- POATE FI FACUTA PRIN:
   [1] NOTATIA 'PUNCT'  
   [2] NOTATIA 'PARANTEZE []
*/

// ==========================================
// [1] ACCESAREA PRIN 'NOTATIA PUNCT' (PT. 'SCHIMB. NUMELUI') - (PE ACEASTA O VOM UTILIZA  IMPLICIT) :
persoana.nume = 'Jeanine';


// AFISARE PRIN 'NOTATIA PUNCT' - PROPRIETATEA 'NUME' A OBIECTULUI 'PERSOANA':
console.log(persoana.nume);




// ==========================================
// [2] ACCESAREA PRIN 'NOTATIA PARANTEZE []':
persoana['nume'] = 'Alexandra';


// AFISARE PRIN 'NOTATIA PUNCT' - PROPRIETATEA 'NUME' A OBIECTULUI 'PERSOANA':
console.log(persoana.nume);

// SAU 'AFISARE' PRIN 'NOTATIA PARANTEZE' - PROPRIETATEA 'NUME' A OBIECTULUI 'PERSOANA':
console.log(persoana['nume']);