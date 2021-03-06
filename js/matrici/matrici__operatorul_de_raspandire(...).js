/* =============================================================
   MATRICI:
   OPERATORUL  DE  RASPANDIRE  '...'
============================================================= */



console.log('________________________________');

//============================================= ================
//  (1.1) MATRICI: 
//=============================================================
let prima1 = [1, 2, 3];
let aDoua1 = [4, 5, 6];


//=============================================================
//   (1.2) OPERATORUL DE RASPANDIRE/SPREAD '...'
//   (PT. COMBINAREA A 2 MATRICI)
//=============================================================
const combinate1 = [...prima1, ...aDoua1];


//=============================================================
// (1.3) AFISARE 'COMBINATE' 
//=============================================================
console.log(combinate1);
console.log('________________________________');




console.log('________________________________');

//============================================= ================
//  (2.1) MATRICI: 
//=============================================================
let prima2 = [1, 2, 3];
let aDoua2 = [4, 5, 6];


//=============================================================
//   (2.2) OP. SPREAD '...'
//   (PT. COMBINAREA A 2 MATRICI & ADG. ELEMENTE INTRE MATRICILE COMBINATE)
//=============================================================
const combinate2 = ['Inceput', ...prima2, 'Mijloc', ...aDoua2, 'Sfarsit'];


//=============================================================
// (2.3) AFISARE 'COMBINATE' 
//=============================================================
console.log(combinate2);
console.log('________________________________');




//=============================================================
//   (3) COPIEREA MATRICEI CU OP. SPREAD '...' 
//   (PT. COPIEREA MATRICEI INTR-O NOUA MATRICE)
//=============================================================
const copie = [...combinate2];