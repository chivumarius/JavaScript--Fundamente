/* =======================================================
    OBIECTE:'NOTIUNI  FUNDAMENTALE'
    FUNCTII 'CONSTRUCTOR' (PT. CONSTRUIREA 'OBIECTELOR')
==========================================================*/

/*
  ___________________________________________________________________________
  
  DEFINITII:`
  
  (*) Notatia 'CAMILA' ('CAMEL')  (pt. FABRICARE)
        => in care Se CAPITALIZEAZA toate 'CUVINTELE' in Afara de 'PRIMUL':
        
        Ex. unuDoiTreiPatru


  (*) Notatia 'PASCAL' (pt. CONSTRUCTOR)
        => in care Se CAPITALIZEAZA toate 'CUVINTELE':
        
        Ex.    UnuDoiTreiPatru
  
  (*) KEYWORD-ul 'THIS' 
        => este o 'REFERINTA' catre 'OBIECTUL EXECUTAT'
        => & 'RETURNEAZA OBIECTUL'.

        Ex.   this.raza = raza;

   (*) OPERATORUL 'NEW' => Creaza un OBIEC GOL in JavaScript:      

       Ex.  const x = {};
  ___________________________________________________________________________
*/



//=============================================
//  (1) FUNCTIA 'FABRICA'
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


// APELAREA FUNC. 'FABRICATE'&
// CREARE OBIECT 'CREAZACERC()' :
const cerculMeu = creazaCerc(1);




//=============================================
//  (2) FUNCTIA 'CONSTRUCTOR' 
//=============================================
function Cerc(raza) {
    this.raza = raza;
    this.desen = function() {
        console.log('desen');
    }

    // return this;  //( ACEASTA SE 'ADAUGA AUTOMAT' FARA A O 'SCRIE')
}

// CREARE OBIECT:
const cerc = new Cerc(1);