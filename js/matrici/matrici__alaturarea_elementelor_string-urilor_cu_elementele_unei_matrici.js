/* =============================================================
   MATRICI:
   'ALATURAREA UNUI ELEMENT'  CU 'ELEMENTELE MATRICEI'
============================================================= */

/*
    (#) PARAMETRII - CE AU IN DESCRIERE SEMNUL INTREBARI
        SUNT OPTIONALI.

        EX. 'SEPARATOR?: STRING'
*/

console.log('________________________________');

//=============================================================
//   (1) METODA 'JOIN(ELEM_SEPARATOR_STRING)' 
//   PT. 'INSERAREA' STRING-ULUI DUPA FIECARE ELEMENT AL MATRICEI
//=============================================================

// MATRICE
const numere = [1, 2, 3, 4];

// METODA 'JOIN()'
const alaturat = numere.join(',');

// AFISARE:
console.log(alaturat);


console.log('________________________________');



//=============================================================
//   (2) METODA 'SPLIT(' ')' 
//   PT. 'EXTRAGEREA SEPARATA A ELEMENTELOR  MATRICEI'
//   (FIECARE 'CUVANT' AL 'STRING'-ULUI -> DEVINE 'ELEMENT' AL 'MATRICEI')
//=============================================================


// STRING
const mesaj = 'Acesta este primul meu mesaj';

// METODA 'SPLIT()'
const parti = mesaj.split(' ');

// AFISARE:
console.log(parti);


console.log('________________________________');




console.log('________________________________');





//=============================================================
//   (3) METODA 'JOIN(ELEM_SEPARATOR_STRING)' 
//   PT. 'COMBINAREA ELEMENTELOR' STRING-ULUI
//=============================================================


// STRING
const mesaj2 = 'Acesta este al doilea mesaj al meu';

// METODA 'SPLIT()' (PT. SEPARARE CUVINTELOR IN ELEMENTE)
const parti2 = mesaj2.split(' ');

// METODA 'JOIN(ELEM_SEPARATOR_STRING)' 
const combinat = parti2.join('-')

// AFISARE
console.log(combinat);



console.log('________________________________');