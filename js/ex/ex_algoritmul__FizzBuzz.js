/* ==========================================
     EXERCITIU:
     ALGORITMUL 'FIZZBUZZ'
=============================================*/

/*
  __________________________________________________
  
  CERINTE:`
   
    function fizzbuzz(intrare){
      ... returneaza sirul
    }
  __________________________________________________
*/



//=============================================
// FUNCTIA 'FIZZBUZZ':
function fizzBuzz(intrare) {
    // CAZ 4
    // (DACA 'NR'. ESTE 'DIVIZIBIL' PRIN AMBELE VALORI -  SI LA '3' SI LA '5'):
    if ((intrare % 3 === 0) && (intrare % 5 === 0))
        return 'FizzBuzz';

    // CAZ 1 (CU 'TIPUL' DATEI DE "INTRARE")
    // (DACA SE 'INTRODUCE' VALOAREA 'FALSE'/'FALSE'):
    if (typeof intrare !== 'number')
    //  return 'Acesta nu este un numar!';
        return NaN;

    // CAZ 2
    // (DACA 'NR'. ESTE 'DIVIZIBIL' LA '3', '5', '35', NICIUNUL):
    if (intrare % 3 === 0)
        return 'Fizz';

    // CAZ 3
    // (DACA 'NR'. ESTE 'DIVIZIBIL' LA '5'):
    if (intrare % 5 === 0)
        return 'Buzz';


    // CAZ 5
    // (DACA 'NR'. NU ESTE 'DIVIZIBIL' NICI LA '3' SI NICI LA '5'):
    return intrare;
}

// CONSTANTA 'IESIRE':
// const iesire = fizzBuzz(false);
// const iesire = fizzBuzz(true);
// const iesire = fizzBuzz(3);
// const iesire = fizzBuzz(5);
// const iesire = fizzBuzz(15);
const iesire = fizzBuzz(8);


//______________________________________________
// AFISAREA 'IESIRE':
console.log(iesire);