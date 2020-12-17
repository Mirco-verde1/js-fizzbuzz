// Creo una lista da 1 a 100 che mi permetta di trovare i multipli di 3 e di 5 e i multipli in comune;

for(var i = 1; i < 101; i++) // inizializzo il contatore

  if (i % 3 === 0) {
     console.log('Fizz ' + i) // multipli di 3
  }

   else if ( i % 5 === 0){     // multipli di 5
    console.log('Buzz ' + i)
  }
else {

};

if (i % 3 === 0 && i % 5 === 0){
console.log('Fizzbuzz' + i)};
