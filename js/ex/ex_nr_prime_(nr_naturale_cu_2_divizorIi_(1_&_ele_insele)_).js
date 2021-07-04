/* ==========================================
    EXERCITIU:
    NR. 'PRIME' (NR. 'NATURALE' CU '2 DIVIZORI' 
    (1 & NR. INSELE))
=============================================*/

/*
  __________________________________________________
  
  DEFINITII:`
   
   (*) NUMERELE PRIME:
        Sunt 'Numerele Naturale' Diferite de '1' 
            -> care au Exact '2 DIVIZORI' (pe '1' și pe Ele Inseși).
            
            EX.: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, etc.

       'Factori de Diviziune' ai lui '13': 1, 13.

   (*) NUMERELE COMPUSE:
        Sunt 'Numerele Naturale' Neprime 'Mai Mari' Decât '1',
            -> care au 'MAI MULTI DIVIZORI'.
            
        EX.: 1, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 22, 
             24, 25, 26, 27, 28, etc.

       'Factori de Diviziune' ai lui '12': 1, 2, 3, 4, 6, 12.
  __________________________________________________
*/



//=============================================
// LIMITA
// APELAREA FUNC.:
afisareNumerePrime(20);


// FUNCTIA 1:
function afisareNumerePrime(limita) {
    for (let numar = 2; numar <= limita; numar++)
    // APELAM FUNCTIA 2:
        if (esteNumerulPrim(numar))
        console.log(numar);
}



// FUNCTIA 2:
function esteNumerulPrim(numar) {
    for (let factor = 2; factor < numar; factor++)
    //  DACA 'NR' SE 'DIVIDE' LA 'EL INSUSI' (NR COMPUS):
        if (numar % factor === 0)
            return false;

        // 'NR PRIM':
    return true;
}