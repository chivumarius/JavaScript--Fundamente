/* ============================================================================
        FLUX  DE  CONTROL -
        INSTRUCTIUNEA CONDITIONALA - 'SWITCH ... CASE'
===============================================================================*/
/*
    __________________________________________________________________________
    SINTAXA:
        SWITCH (VARIABILA) {
            CAZ 'VARIABILA 1': 
                INSTRUCTIUNE;
                BREAK; 

            CAZ 'VARIABILA 2': 
                INSTRUCTIUNE;
                BREAK; 
            CAZ 'VARIABILA N': 
                INSTRUCTIUNE;
                BREAK; 

            DEFAULT:
                INSTRUCTIUNE;                           
        }
    
    
    (*) UTIL. 'BREAK' = PT. A OPRI EXECUTARE CAZURILOR, DUPA IDENTIFICARE.
    __________________________________________________________________________
*/

/*
    __________________________________________________________________________
    EX.:
     * VREM SA AFLAM 'ROLUL' UTILIZATORULUI
        => DACA 'USER-UL' = ESTE 'VIZITATOR';
        => DACA 'USER-UL' = ESTE 'MODERATOR';
        => DACA 'USER-UL' = ESTE 'ADMINISTRATOR'.
    __________________________________________________________________________
*/

// VARIABILA:
//let rol;                 // PREIA IN  CAZUL 'DEFAULT'.
// let rol = 'vizitator'; // PREIA IN  CAZUL 'VIZITATOR'.
let rol = 'moderator'; // PREIA IN  CAZUL 'MODERATOR'.   
// let rol = 'administrator'; // PREIA IN  CAZUL 'ADMINISTRATOR'.   

// ===============================================================================
// CONDITIONALA 'SWITCH .. CASE':
// ===============================================================================
switch (rol) {
    case 'vizitator':
        console.log('Utilizator Vizitator');
        break;

    case 'moderator':
        console.log('Utilizator Moderator');
        break;
    case 'administrator':
        console.log('Utilizator Administrator');
        break;
    default:
        console.log('Utilizator Necunoscut');
}

// ===============================================================================
// CONDITIONALA 'IF .. ELSE':
// ===============================================================================
if (rol === 'vizitator')
    console.log("Utilizator Vizitator");
else if (rol === 'moderator')
    console.log("Utilizator Moderator");
else if (rol === 'administrator')
    console.log("Utilizator Administrator");
else
    console.log("Utilizator Necunoscut");