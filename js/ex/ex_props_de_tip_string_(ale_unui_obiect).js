/* ==========================================
    EXERCITIU:
    AFLAREA 'PROPRIETATILOR' DE 'TIP' - 'STRING' 
    ALE UNUI 'OBIECT'
=============================================*/


//=============================================
// OBIECTUL:
const film = {
    titlul: 'Maiamy Bici',
    anulAparitiei: 2020,
    rating: 4.6,
    director: 'Codrin Maticiuc'
};


// APELAREA FUNC.:
arataProprietatile(film);


// FUNCTIA:
function arataProprietatile(obiect) {

    // BUCLA:
    for (let cheie in obiect) {

        // OBTINEREA VALORII PROPRIETATII
        // & VERIFICAREA 'TIPULUI DATEI':
        if (typeof obiect[cheie] === 'string')
            console.log(cheie, obiect[cheie]);
    }
}