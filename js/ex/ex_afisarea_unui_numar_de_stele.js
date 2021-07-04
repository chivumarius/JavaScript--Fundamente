/* ==========================================
    EXERCITIU:
    AFISAREA UNUI NUMAR DE STELE
=============================================*/


//=============================================
// APELAREA FUNC.:
afiseazaStele(5);

// FUNCTIA 1:
function afiseazaStele(randuri) {
    for (let rand = 1; rand <= randuri; rand++) {
        let model = '';
        for (let i = 0; i < rand; i++)
            model += '*';
        console.log(model);
    }
}