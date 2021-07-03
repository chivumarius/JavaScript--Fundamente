/* ==========================================
    EXERCITIU:
   AFLATI SUMA MULTIPLILOR '3' SAU '5'
   DINTR-UN NUMAR
=============================================*/

/*
    (!!!)

    => MULTIPLII DE 3 AI NR '10': 3, 6, 9 ==> SUMA = 18
    => MULTIPLII DE 5 AI NR '10': 5, 10 ==> SUMA = 15
    ==> MULTIPLILOR (3, 5) = 33
*/

//=============================================
// LIMITA
// AFISAREA & APELAREA FUNC.:
console.log(suma(10));


// FUNCTIA:
function suma(limita) {
    let suma = 0;
    for (let i = 0; i <= limita; i++)
        if ((i % 3 === 0) || (i % 5 === 0))
            suma += i;

    return suma;
}