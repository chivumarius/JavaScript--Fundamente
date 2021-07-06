/* =============================================================
   OBIECTE:
   'DATE' ('DATE CALENDARISTICE')
============================================================= */

//=============================================================
//  CREARE OBIECTUL 'DATE' (FUNCTIE CONSTRUCTOR)
//=============================================================
// DATA CURENTA:
const dataCurenta = new Date();

// FORMAT DATA:
const dataFormatata = new Date('July 06, 2021 15:15:00');

// DATA CU PARAMETRII (IAN = 0, DEC. = 11):
const dataCuParametri = new Date(2021, 6, 06, 15);

// FUNC. :
dataCurenta.setFullYear(2030);