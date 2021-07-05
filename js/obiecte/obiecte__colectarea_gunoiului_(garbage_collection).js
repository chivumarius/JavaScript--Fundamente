/* =============================================================
   OBIECTE:
   COLECTAREA GUNOIULUI (GARBAGE COLLECTION)
============================================================= */

/*
    (*) IN LIMBAJELE 'LOW LEVEL' (C, C++)
        => LA 'CREAREA OBIECTELOR'
            => SE ALOCA 'MEMORIE' PENTRU ELE,
        => IAR LA 'TERMINARE' SE DEZALOCA 'MEMORIA'.
    
    (*) JAVASCRIPT 
        ==> ARE UN 'COLECTOR DE GUNOI' (GARBAGE COLLECTOR)
        ==> CARE 'ALOCA' & 'DEZALOCA' AUTOMAT 'MEMORIE'.
        
    (*) 'COLECTOR DE GUNOI' (GARBAGE COLLECTOR){}
        ==> IDENTIFICA 'CONSTANTELE' & 'VARIABILELE' NEUTILIZATE
        ==> SI 'DEZALOCA/ELIBEREAZA' MEMORIA
        ==> (DEZVOLTATORI JS NU TREBUIE SA FACA NIMIC IN ACEASTA PRIVINTA).
*/

//=============================================================
//   OBIECT 'CERC'
//=============================================================
const cerc = {};
console.log(cerc);