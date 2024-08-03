// Pseudocode(Fizzbuzz)

// write a function called Fizzbuzz
// takes positive number (n) that is less than 100 (create for loop)

// if not a positive integer then print "Error"

// (Conditionals)
// if divisible by 3 and divisible by 5 then print "Fizzbuzz";
// if divisible by 3 then print "Fizz";
// if divisible by 5 then print "Buzz";

// if not divisible by both 3 and 5 then print the number i(index of n);



function fizzbuzz(n) {

    if(!Number.isInteger(n) || n < 1 || n >= 100) {
        console.log('ERROR!');
        return;
    }

    for (let i = 1; i <= n; i++) {

        const divisibleBy3 = i % 3;
        const divisibleBy5 = i % 5;

        if (divisibleBy3 === 0 && divisibleBy5 === 0) {
            console.log('FizzBuzz');
        }
        else if (divisibleBy3 === 0) {
            console.log('Fizz');
        }
        else if (divisibleBy5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz(0);
fizzbuzz(16);
fizzbuzz(100);
