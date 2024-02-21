// primitive data data types
// In JavaScript, primitive data types are data types that represent a single value.
// They are immutable, meaning that once they are created, their value cannot be changed.
// The six primitive data types in JavaScript are:
// number
let Number = 32
console.log(Number);
// string
let Name = "indrajit singha"
console.log(Name);
// boolean
let isAdult = true
console.log(isAdult);
// null
let email = null // wecan assign null to a variable 
console.log(email);
// undefined
let nickname; // undefined is basically variable declares but not defined yet
console.log(nickname);
// symbol


// ///////////////////////////////////////////////////////////////////////
// non primitive data data types
// Non-primitive data types, on the other hand, are mutable,
//  which means that they can be changed after they are created.
// Examples of non-primitive data types in JavaScript include:
// Object, Array, Function, Date, RegExp.

// array
const favoriteFruits = ["apple", "orange", "mango",]
console.log(favoriteFruits);
// object
const details = {
    name: "Indrajit Singha",
    roll: "32",
    phone: "2225252525"
}
console.log(details);

// ///////////////////////////////////////////////////////////////////////


// trying to change primitive data types
// Create a primitive variable
const primitiveData = 10;

// Try to change the value of x
// primitiveData = 20;
// console.log(primitiveData);

// trying to change non  primitive data types
// its actually change the reference
const NonprimitiveData = ["apple", "orange", "mango",]
NonprimitiveData[0] = 10
console.log(NonprimitiveData);