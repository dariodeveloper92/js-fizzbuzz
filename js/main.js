//Scrivi un programma che stampi i numeri da 1 a 100.----------------------------------------------------

var numInterazioni = 100;

for (i = 1; i <= numInterazioni; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {//Per i multipli sia di 3 che di 5 stampi "FizzBuzz".
        console.log('FizzBuzz')
    }   else if (i % 3 == 0) {//Per i multipli di 3 stampi “Fizz” al posto del numero.
            console.log('Fizz')
    }   else if (i % 5 == 0) {//Per i multipli di 5 stampi "Buzz"al posto del numero.
        console.log('Buzz')
    }   else {
        console.log(i + 1)
    }
}
