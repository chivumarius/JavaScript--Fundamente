/* =============================================================
   EXERCITIU OBIECTE:
   CREAREA  OBIECTULUI 'ADRESA'
============================================================= */

/*
   CERINTE:

   > CREATI UN OBIECT 'ADRESA' CU 3 PROPS:
      (1) STRADA
      (2) ORAS
      (3) CP

   > CREATI O FUNCTIE 'ARATAADRESA(ADRESA)'

*/
//=============================================================
//  (1) CREARE OBIECTUL LITERAL 'ADRESA' 
//=============================================================
let adresa = {
    strada: '1 Mai',
    orasul: 'Bucuresti',
    cp: '030607'
}

//=============================================================
//  (2) CREARE FUNCTIA 'AFISEAZAADRESA()' 
//=============================================================
function afiseazaAdresa(adresa) {
    // ENUMERAM PROPS. OBIECTULUI:
    for (let cheie in adresa)
        console.log(cheie, adresa[cheie]);
}

//=============================================================
//  (3) APELAREA FUNCTIA 'AFISEAZAADRESA()' 
//=============================================================
afiseazaAdresa(adresa);