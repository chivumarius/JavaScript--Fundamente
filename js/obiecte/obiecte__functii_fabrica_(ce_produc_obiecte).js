/* ==========================================
    OBIECTE:'NOTIUNI  FUNDAMENTALE'
    FUNCTII 'FABRICA' (CE  PRODUC  'OBIECTE')
=============================================*/

/*
  __________________________________________________
  
  DEFINITII:`
  
  (*) PROPRIETATEA Obiectului se nai Numeste si Pereche 'Cheie: Valoare'
  
  (*) 'VALOAREA' PROPRIETATII 
        -> NU mai Trebuie 'SPECIFICATA' 
        -> atunci cand este 'IDENTICA' cu 'DENUMIREA'.
        
        EX: 
            locatie:locatie, 
        devine:
            locatie,
    
   (*) 'METODELE' OBIECTELOR:
        => 'NU' se mai 'DEFINESC' prin Perechile 'Cheie: Valoare'
        => ci precum 'FUNCTIILE'.

        EX:         
            desen: function desen() { ...cod  }
        devine:
            desen(){ ...cod  }
  __________________________________________________
*/



//=============================================
//  FUNCTIA 'FABRICA'
//=============================================
function creazaCerc(raza) {
    // RETURNAREA OBIECTULUI ('CERC'):  - 
    return {
        raza,
        desen() {
            console.log('desen');
        }
    };
}

//=============================================
// CREARE OBIECT 'CERC1' &
// APELAREA FUNC. 'FABRICATE':
const cerc1 = creazaCerc(1);

// AFISAREA:
console.log(cerc1);


//=============================================
// CREARE OBIECT 'CERC2' &
// APELAREA FUNC. 'FABRICATE':
const cerc2 = creazaCerc(2);

// AFISAREA:
console.log(cerc2);