console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("\nEXERCISE 1:\n==========\n");

for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("\nEXERCISE 2:\n==========\n");

const fizz = "FIZZ";
const buzz = "BUZZ";

for (let i = 1; i < 100; i++) {
    // pulled this ternary line from the internet to study later, my usual go-to is within the other fizz-buzz loops
    console.log((i % 3 ? '' : fizz) + (i % 5 ? '' : buzz) || i)
    // my understanding is the following:
    // it seams that without explicitly checking if i % 3 == 0, and only checking i % 3,
    // if i = 12, then boolean 12 % 3 equates to false (i think this is because there is no remainder), and so returns fizz, 
    // but if i = 7 then boolean 7 % 3 equates to true as there is a remainder, so it returns ''
    // checking both of the inner () first, if both are false, it returns FizzBuzz,
    // but if both equate to true, they both return an empty string, and the logical || operator then returns i

}
// console.log(Boolean(7 % 3)) returns true
// console.log(Boolean(6 % 3)) returns false


// Exercise 3 Section
console.log("\nEXERCISE 3:\n==========\n");
console.log("While Loop - ODDS")

var num = 1;

while (num < 100) {
    if (num % 2 != 0) {
        console.log(num)
    }
    num++;
}

console.log("\n==========\n");
console.log("Do While Loop - ODDS")

var num = 1;

do {
    if (num % 2 != 0) {
        console.log(num)
    }
    num++;
} while (num < 100)

console.log("\n==========\n");
console.log("While Loop - FizzBuzz")

var num = 1;

while (num <= 100) {
    if (num % 15 == 0) {
        console.log(fizz + buzz)
    }
    else if (num % 5 == 0) {
        console.log(buzz)
    }
    else if (num % 3 == 0) {
        console.log(fizz)
    }
    else {
        console.log(num)
    }
    num++;
}

console.log("\n==========\n");
console.log("Do While Loop - FizzBuzz")

var num = 1;

do {
    if (num % 15 == 0) {
        console.log(fizz + buzz)
    }
    else if (num % 5 == 0) {
        console.log(buzz)
    }
    else if (num % 3 == 0) {
        console.log(fizz)
    }
    else {
        console.log(num)
    }
    num++
} while (num <= 100)

// Exercise 4 Section
console.log("\nEXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundValue = false;

for (let i = 0; i <= n; i++) {
    if (value == i) {
        console.log(`Found value! It is ${i}`)
        foundValue = true;
        break;
    }
}
if (foundValue == false) {
    console.log("Did not find value")
}

// Exercise 5 Section - Customized FIZZBUZZ
console.log("\nEXERCISE 5:\n==========\nCustomized FIZZBUZZ\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let x = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= x; i++) {
    console.log(
        ((i % fizzDivisor ? '' : fizz) + (i % buzzDivisor ? '' : buzz) || i)
    )
}

console.log(`\nFizz Div: ${fizzDivisor}, Buzz Div: ${buzzDivisor}\n`)