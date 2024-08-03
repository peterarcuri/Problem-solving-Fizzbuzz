
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