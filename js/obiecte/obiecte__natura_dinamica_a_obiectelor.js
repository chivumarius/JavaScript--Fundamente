/* =======================================================
    OBIECTE:'NOTIUNI  FUNDAMENTALE'
    NATURA 'DINAMICA' A 'OBIECTELOR'
==========================================================*/


//=============================================
//  OBIECT 'CERC'
//=============================================
const cerc = {
    raza: 1
};


//_______________________________________________
// ADAUGARE 'PROP'. NOUA IN 'OBIECT' - 'CULOARE':
cerc.culoare = 'Galben';


// ADAUGARE 'METODA' NOUA IN 'OBIECT' - 'DESEN':
cerc.desen = function desen() {}


//_______________________________________________
// STERGEREA UNEI 'PROPRIETATI' A 'OBIECTULUI' - 'CULOARE':
delete cerc.culoare;


// STERGEREA UNEI 'METODE' A 'OBIECTULUI' - 'CULOARE':
delete cerc.desen;



// AFISARE 'OBIECT':
console.log(cerc);