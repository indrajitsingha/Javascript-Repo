// /////////////////primitive types////////////////////////////////

// sting  boolean number undefined null symbol
// it saved in stack memory
// it will be accessible call by value

// when we try to change or access any primitive types variables
//  it give a copy of the variable main sorce of  variable is remain constant

// example
let myName = "Indrajit"
let AnotherName = myName
AnotherName = "Singha"
console.log(myName);
console.log(AnotherName);

// /////////////////Non primitive types////////////////////////////////

// Array Objects Functions
// it saved in Heap memory
// it will be accessible call by Reference

// when we try to change or access any Non primitive types variables
//  it give a Original value or sorce  
// wwhen we change or modify any Non primitive types variables it chnage the original value

// example
let user = { Email: "Indrajit123" }
let user2 = user
user2.Email = "singha123"
console.log(user);
console.log(user2);