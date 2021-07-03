/* ==========================================
    EXERCITIU:
    CALCULAREA 'NOTEI' UNUI 'ELEV'
=============================================*/

/*
     NOTATIII:
        => 1-59:   F, 
        => 60-69:  D, 
        => 70-79:  C, 
        => 80-89:  B, 
        => 90-100: A 
*/

//=============================================
// MATRICEA
const martice = [80, 80, 50];

// APELAREA & AFISAREA:
console.log(calculateGrade(martice));

// FUNCTIA 1:
function calculateGrade(note) {
    const media = calculareMedie(note);
    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    return 'A';
}

// FUNCTIA 2:
function calculareMedie(matrice) {
    let suma = 0;
    for (let valuare of matrice)
        suma += valuare;
    return suma / matrice.length;
}