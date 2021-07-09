/* =============================================================
   EXERCITIU MATRICI:
   SORTAREA  'MATRICEI  DE  OBIECTE' DUPA  'AN'  &  'RATING'
============================================================= */

/*
    CERINTE:
        OBTINETI TOATE FILMELE 
            => DIN ANUL 2021 
            => CU RATING MAI MARE DE 4.5
            => SORTATE IN ORDINE DESCRESCATOARE
*/

// ============================================================== 
// MATRICEA DE OBIECTE:
const filme = [
    { titlu: 'a', an: 2021, rating: 4.5 },
    { titlu: 'b', an: 2021, rating: 4.7 },
    { titlu: 'c', an: 2021, rating: 3 },
    { titlu: 'd', an: 2020, rating: 4.5 }
];


// ============================================================== 
// METODA DE INLANTUIRE (CHAINING)
// ============================================================== 
const titluri = filme
    .filter(filme => filme.an === 2021 && filme.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(filme => filme.titlu);



// ============================================================== 
// AFISAREA:
console.log(titluri);