/* =============================================================
   EXERCITIU OBIECTE:
  'OBIECT' DE 'POSTARE PE BLOG'
============================================================= */

/*
    CERINTE:
    CREATI UN 'OBIECT' DE 'POSTARE PE BLOG' CU 'PROPRS':

        (1) TITLU
        (2) CORP
        (3) AUTOR
        (4) VIZUALIZARI
        (5) COMENTARII
            (5.1) AUTOR
            (5.2) CORP
        (6) ESTELIVE
*/


// ============================================================== 
// OBIECT LITERAL 
// ============================================================= 
let postare = {
    titlu: 'Cabana Caraiman',
    corp: 'O locatie minunata localizata in muntii Bucegi',
    autor: 'SC Calatori in Romania SRL',
    vizualizari: 150,

    // MATRICE DE OBIECTE:
    comentariu: [{
            autor: 'David Pop',
            corp: 'Am vizitat si intradevar zona este superba.'
        },
        {
            autor: 'Elena Goja',
            corp: 'Locatia mea preferata.'
        },
    ],
    esteLive: true
};

// AFISARE:
console.log(postare);