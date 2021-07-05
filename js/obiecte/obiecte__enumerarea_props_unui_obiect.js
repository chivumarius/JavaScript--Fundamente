/* =============================================================
   OBIECTE:
   ENUMERAREA 'PROPRIETATILOR' UNUI 'OBIECT'
============================================================= */

/*
    (*) 'OBIECTUL' - NU ESTE ITERABIL.
    (*) 'MATRICEA' - ESTE ITERABIL.

    (*) 'OBIECTUL' ESTE O F'UNCTIE CONSTRUCTOR' PREDEFINITA (BUILT-IN):
       
    
            function Object() {}

        => SINTAXA 'OBIECT LITERAL': 
            const x = { valoare: 1 }

        => ACEASTA SE TRADUCE PRIN:
           APELARE - FUNCTIA CONSTRUCTOR 'OBIECT':
            x = new Object();
*/


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
//   (1)  UTIL. BUCLEI 'FOR ... IN' 
//       (PT. 'ITERAREA' ASUPRA 'PROPRIETATILOR' UNUI 'OBIECT')
//--------------------------------------------------------------
for (let cheie in cerc)
// console.log(cheie);
//  AFISAREA PROPRIETATII & VALORII (PRIN NOTATIA 'PARANTEZA'):
    console.log(cheie, cerc[cheie]);


//--------------------------------------------------------------
//   (2) METODA 'OBJECT.KEYS()'
//       UTIL. BUCLEI 'FOR ... OF' 
//       (PT. 'ITERAREA' ASUPRA 'PROPRIETATILOR' UNUI 'OBIECT')
//--------------------------------------------------------------
for (let key of Object.keys(cerc))
    console.log(key);


//--------------------------------------------------------------
//   (3) METODA 'OBJECT.ENTRIES()'
//       (FIECARE 'INTRARE' ESTE O  'MATRICE')
//--------------------------------------------------------------
for (let entry of Object.entries(cerc))
    console.log(entry);



//--------------------------------------------------------------
//  (4)     UTIL. OPERATORULUI 'IN' 
//       (PT. A 'VEDEA' - DACA UN 'OBIECT' 
//               => ARE O 'PROPRIETATE' SAU 'METODA' DATA)
//--------------------------------------------------------------
if ('raza' in cerc)
    console.log('Da, exista Proprietatea \'raza\' in \'cerc\'!');

if ('culoare' in cerc)
    console.log('Da, exista Proprietatea \'culoare\' in \'cerc\'!');