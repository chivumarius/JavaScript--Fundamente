/* =============================================================
   OBIECTE:
   CLONAREA  OBIECTELOR
============================================================= */


//=============================================================
//   OBIECT 'CERC'
//=============================================================
const cerc = {
    raza: 1,
    desen() {
        console.log('desen');
    }
};


//--------------------------------------------------------------
//   (1) CREARE OBIECT 'ALTUL' (ACEASTA 'METODA' DE 'COPIERE' ESTE 'INVECHITA')
//       (COPIE  A  OBIECTULUI 'CERC')
//--------------------------------------------------------------
const altul = {};


// UTIL. BUCLEI 'FOR ... IN' 
// (PT. 'ITERAREA' ASUPRA 'PROPRIETATILOR' UNUI 'OBIECT')
for (let cheie in cerc)
    altul[cheie] = cerc[cheie];

//  ECHIVALENT CU: 
//  altul[cheie] = cerc[cheie];  

// AFISARE:
console.log(altul);



//--------------------------------------------------------------
//   (2) METODA DE ATRIBUIRE 'OBJECT.ASSIGN' DE 'COPIERE' A 'OBIECTULUI'
//       ('METODA MODERNA')
//--------------------------------------------------------------
const altCerc = Object.assign({}, cerc);


// AFISARE:
console.log(altCerc);



//--------------------------------------------------------------
//   (3) OP. DE RASPANDIRE/SPREAD '...' PENTRU 'COPIERE' A 'OBIECTULUI'
//       ('METODA SUPER ELEGANTA')
//--------------------------------------------------------------
const cercNou = {...cerc };

// AFISARE:
console.log(cercNou);