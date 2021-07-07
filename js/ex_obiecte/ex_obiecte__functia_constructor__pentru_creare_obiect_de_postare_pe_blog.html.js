/* =============================================================
   EXERCITIU OBIECTE:
   FUNCTIA 'CONSTRUCTOR' PENTRU CREARE 'OBIECT' DE 'POSTARE PE BLOG'
============================================================= */



// ============================================================== 
// [1] FUNCTIA CONSTRUCTOR PT. CREARE FUNC. 'POSTARE()'
// (NOTATIE 'PASCAL') 
// ============================================================= 
function Postare(titlu, corp, autor) {
    // PROPS. INITIALIZATE:
    this.titlu = titlu;
    this.corp = corp;
    this.autor = autor;
    this.vizualizari = 0;
    this.comentarii = [];
    this.esteLive = false;
}

// ============================================================== 
// [2] APELAREA FUNC. 'CONSTRUCTOR'
// ============================================================= 
let postare = new Postare(
    'Cabana Caraiman',
    'O locatie minunata localizata in muntii Bucegi',
    'SC Calatori in Romania SRL'
);


// ============================================================== 
// [3] AFISAREA OBIECTULUI
// =============================================================
console.log(postare);