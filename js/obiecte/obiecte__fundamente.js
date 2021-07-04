/* ==========================================
    OBIECTE:
    'NOTIUNI  FUNDAMENTALE'
=============================================*/

/*
  __________________________________________________
  
  DEFINITII:`
  (*) OBIECTELE - sunt 'Colectii' 
                  de 'Perechi' - 'Cheie: Valoare' (Key: 'Value')
  (*) OBIECTELE => Grupeaza Variabilele Similare

  (*) 'Proprietatile' Obiectelor - sunt INCAPSULATE in ACESTEA.
  (*) 'Proprietatile' pot 'Contine': 
          => Alte 'Obiecte',
          => Valori 'Boolean' (true/false),
          => 'Functii',
  
  (*) METODA = este 'FUNCTIA' ce 'Apartine' unui 'OBIECT'.
  __________________________________________________
*/

/*
    EX. 
    CONSTRUIM O APLICATIE - CARE SA DESENEZE ANUMITE FORME GEOMETRICE
    -RECUM: CERCURI, DREPTUMCHIURI, ETC.
*/


//=============================================
//  STILUL DE 'PROGRAMARE ORIENTATA OBIECT'  (OOP)
//=============================================

// (1) OBIECTUL LITERAL 'CERC'  - 
const cerc = {
    // PROPRIETATI (PERECHI - CHEIE:'VALOARE'):
    raza: 1,
    locatie: {
        x: 1,
        y: 1
    },
    esteVizibil: true,
    desen: function desen() {
        console.log('desen');
    }
};

// 'ACCESARE' METODEI - 'DESEN()' A OBIECTULUI - 'CERC':
cerc.desen();