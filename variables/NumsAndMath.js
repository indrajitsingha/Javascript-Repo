// toPrecision
// The toPrecision() method of Number values returns a string representing 
// this number to the specified precision

let PrecisionNumber = 13.8714;

console.log( PrecisionNumber.toPrecision(2));

// Addition (+)
let a = 5, b = 3, sum = a + b;
console.log("Sum:", sum); // Output: 8

// Subtraction (-)
let difference = a - b;
console.log("Difference:", difference); // Output: 2

// Multiplication (*)
let product = a * b;
console.log("Product:", product); // Output: 15

// Division (/)
let quotient = a / b;
console.log("Quotient:", quotient); // Output: 5

// Modulus (%)
let remainder = a % b;
console.log("Remainder:", remainder); // Output: 1

// Exponentiation (**)
let result = a ** b;
console.log("Result:", result); // Output: 8

// Absolute Value (Math.abs())
let num = -5, absoluteValue = Math.abs(num);
console.log("Absolute value:", absoluteValue); // Output: 5

// Square Root (Math.sqrt())
let squareRoot = Math.sqrt(num);
console.log("Square root:", squareRoot); // Output: 3

// Round to Nearest Integer (Math.round())
let roundedNum = Math.round(num);
console.log("Rounded number:", roundedNum); // Output: 4

// Round Down to Nearest Integer (Math.floor())
let floorNum = Math.floor(num);
console.log("Floor:", floorNum); // Output: 3

//  minimum and maximum random numbers
let min = 20
let max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)