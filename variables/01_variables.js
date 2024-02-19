const empNumber = "12151719" //alaways constant can not change
let empEmail = "indra@gmail."  //let can be re declare but cannot be re initialized in one block 
var emppassword = "12345" // var can be re declare and also can be re initialized globlar scope 
let empCity = "Durgapur"

console.log(empNumber, empEmail, emppassword, empCity);

// print in table format in console

console.table([empNumber, empEmail, emppassword, empCity])

///////////////////////// Let////////////

//let can be re declare but cannot be re initialized in one block 
empEmail = "indra12125@gmail"
{
    let empEmail = "indra12155525@gmail"
    console.log(empEmail);
    // inside block we can re initialize but it will accessable in this bloack only 
}
console.log(empEmail);

//let can be re declare but cannot be re initialized in one block 

//////////////////////////////////  var////////////////////////////////
// var can be re declare and also can be re initialized  functionl scope 
emppassword = "78910"
var emppassword = "indrajitdgp19"
{
    var emppassword = "indrajitdgp20"
    console.log(emppassword);
}

console.log(emppassword);

// var can be re declare and also can be re initialized 