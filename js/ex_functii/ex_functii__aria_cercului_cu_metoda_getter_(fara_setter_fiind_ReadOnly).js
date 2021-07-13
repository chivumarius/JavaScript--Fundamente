/* =============================================================
   EXERCITIU FUNCTII:
   ARIA  'CERCULUI'  CU  METODA   'GETTER' (FARA SETTER  FIIND  'READONLY')
============================================================= */

// ============================================================== 
// OBIECTUL 'CERC' cu PROP. 'READONLY' => PRIN MET. 'GETTER'
// ==============================================================
const cerc = {
    raza: 1,

    //PROP. 'READONLY' => PRIN MET. 'GETTER':
    get aria() {
        return Math.PI * this.raza * this.raza;
    }
};

// AFISARE METODA OBIECTULUI
console.log(cerc.aria);