
let user = {
    name: "Indrajit Singha",
    Roll: "32",
    Degree: "MCA",
    isAdult: true,
    result: function (marks) {
        console.log(`you got ${marks} marks`);
    }
}

console.log(user);
console.log(user.Degree);
console.log(user["isAdult"]); //another way to get Access Object
user.result(54)
