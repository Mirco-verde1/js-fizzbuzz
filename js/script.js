// Creo una lista da 1 a 100 che mi permetta di trovare i multipli di 3 e di 5 e i multipli in comune;

for(var i = 0; i < 101; i++) // inizializzo il contatore

  if (i % 3 === 0  && i % 5 === 0) {
     console.log('Fizzbuzz ' + i) // multipli di 3 e 5
  }

   else if ( i % 3 === 0){     //  solo multipli di 3
    console.log('fizz '+ i)
  }
else if(i % 5 === 0){          // solo multipli di 5
console.log('Buzz' + i);
};
