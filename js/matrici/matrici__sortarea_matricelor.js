/* =============================================================
   MATRICI:
   SORTAREA  'MATRICELOR'
============================================================= */


console.log('________________________________');

//=============================================================
//   (1) METODA 'SORT()' 
//   PT. SORTAREA 'ELEMENTELOR' UNEI 'MATRICE'
//=============================================================

// MATRICEA DEZORDONATA
const numere = [8, 4, 3, 6, 1, 5, 2, 7];

// METODA 'SORT()'
const sortat = numere.sort();

// AFISARE:
console.log(sortat);


console.log('________________________________');





//=============================================================
//   (2) METODA 'REVERSE()' 
//   PT. 'INVERSAREA' ORDINEI 'ELEMENTELOR' MATRICEI
//=============================================================

// METODA 'REVERSE()'
const inversare = numere.reverse();

// AFISARE:
console.log(inversare);


console.log('________________________________');



//=============================================================
//   (3) METODA 'SORT()' APLICATA 'MATRICEI DE OBIECTE'
//   (SUB ACEASTA FORMA NU SORTEAZA ALFABETIC)
//=============================================================

// 'MATRICE' DE 'OBIECTE'
const cursuri = [
    { id: 1, nume: 'NodeJS' },
    { id: 2, nume: 'JavaScript' },
    { id: 3, nume: 'Angular' },
    { id: 4, nume: 'React' }
];

// METODA 'SORT()'
cursuri.sort();

// AFISARE:
console.log(cursuri);


console.log('________________________________');




//=============================================================
//   (4) METODA 'SORT()' APLICATA 'MATRICEI DE OBIECTE'
//   (PT. SORTAREA 'ALFABETICA' FARA 'CASE SENSITIVITY')
//=============================================================
// 'MATRICE' DE 'OBIECTE'
const cursuri2 = [
    { id: 1, nume: 'NodeJS' },
    { id: 2, nume: 'javaScript' },
    { id: 3, nume: 'angular' },
    { id: 4, nume: 'React' },
    { id: 5, nume: 'css' },
    { id: 6, nume: 'HTML' }
];

// METODA 'SORT()'
cursuri2.sort(function(a, b) {

    // METODA 'TO LOWER CASE()'/'TO UPPER CASE()'
    // ELIMINAM 'CASE SENSITIVITY'
    const numeA = a.nume.toUpperCase();
    const numeB = b.nume.toUpperCase();


    if (numeA < numeB) return -1;
    if (numeA > numeB) return 1;
    return 0;
});

// AFISARE:
console.log(cursuri2);


console.log('________________________________');