/* =============================================================
   MATRICI:
   MAPAREA (CARTOGRAFIEREA) 'MATRICEI'
============================================================= */



console.log('________________________________');



//=============================================================
//   (1) METODA 'MAP(CALLBACK FUNCTION(VAL, INDEX, MATRICE))' 
//   (PT. 'MAPAREA FIECARUI ELEMENT' AL 'MATRICEI' 
//    SI 'TRIMITERE' CATRE 'ALTCEVA')
//=============================================================

// MATRICEA 
const numere = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6];

// METODA 'FILTER( CALLBACKFN(VAL, INDEX, MATRICE) )'
const filtrat = numere.filter(nr => nr >= 0);

// AFISARE:
console.log(filtrat);
console.log('________________________________');



//=============================================================
// (2.1) METODA 'MAP()'
// (PT. AFISAREA 'ELEMEMTELOR MATRICI' IN 'LISTA HTML')
//=============================================================
const elemente = filtrat.map(nr => '<li>' + nr + '</li>');

// AFISARE:
console.log(elemente);
console.log('________________________________');




//=============================================================
// (2.2) METODA 'JOIN()'
// (PT. AFISAREA 'ELEMEMTELOR MATRICI' IN 'STRING')
//=============================================================
const html = elemente.join('');

// AFISARE:
console.log(html);
console.log('________________________________');



//=============================================================
// (2.3) '<UL>' + METODA 'JOIN()' + '</UL>'
// (PT. 'INSERARE STRING' IN 'UL')
//=============================================================
const htmlUl = '<ul>' + elemente.join('') + '</ul>';

// AFISARE:
console.log(htmlUl);
console.log('________________________________');







//=============================================================
// (3) METODA 'MAP()' CATRE UN 'OBIECT'
// (PT. AFISAREA 'ELEMEMTELOR MATRICI' INTR-UN 'OBIECT')
//=============================================================
// const elemente2 = filtrat.map(nr => {
//  const obiect = { Valoare: nr };
//  return obiect;

// return { valoare: nr };
// });


const elemente2 = filtrat.map(nr => ({ valoare: nr }));

// AFISARE:
console.log(elemente2);
console.log('________________________________');







//=============================================================
//   (4) METODA DE INLANTUIRE (CHAINING) -- 'FILTER()' & 'MAPP()'
//   (PT. 'MAPAREA FIECARUI ELEMENT' AL 'MATRICEI' 
//    SI 'TRIMITERE' CATRE 'ALTCEVA')
//=============================================================

// MATRICEA 
const numere3 = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6];

//METODA DE INLANTUIRE (CHAINING) 
const inlantuire = numere
    .filter(nr => nr >= 0)
    .map(nr => ({ valoare: nr }))
    .filter(obiect => obiect.valoare > 2)
    .map(obiect => obiect.valoare);

// AFISARE:
console.log(inlantuire);
console.log('________________________________');