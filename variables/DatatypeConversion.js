// String Conversion:

// String(value): Converts a value to a string.
// Number Conversion:

// Number(value): Converts a value to a number.
// parseInt(string, radix): Parses a string and returns an integer.
// parseFloat(string): Parses a string and returns a floating-point number.
// Boolean Conversion:

// Boolean(value): Converts a value to a boolean.

// String to Number
let strNum = "123";
let num = Number(strNum);
console.log(num, typeof num); // Output: 123 number

// String to Boolean
let strBool = "true";
let bool = Boolean(strBool);
console.log(bool, typeof bool); // Output: true boolean

// Number to String
let number = 456;
let str = String(number);
console.log(str, typeof str); // Output: "456" string

// Number to Boolean
let numBool = 0;
let boolFromNum = Boolean(numBool);
console.log(boolFromNum, typeof boolFromNum); // Output: false boolean

// Boolean to String
let boolStr = true;
let strFromBool = String(boolStr);
console.log(strFromBool, typeof strFromBool); // Output: "true" string

// Boolean to Number
let boolNum = true;
let numFromBool = Number(boolNum);
console.log(numFromBool, typeof numFromBool); // Output: 1 number

// Null to String
let nullValue = null;
let strFromNull = String(nullValue);
console.log(strFromNull, typeof strFromNull); // Output: "null" string

// Null to Number
let numFromNull = Number(nullValue);
console.log(numFromNull, typeof numFromNull); // Output: 0 number

// Null to Boolean
let boolFromNull = Boolean(nullValue);
console.log(boolFromNull, typeof boolFromNull); // Output: false boolean

// Addition (+) Operator for Type Conversion
let addition = "5" + 3;
console.log(addition, typeof addition); // Output: "53" string
