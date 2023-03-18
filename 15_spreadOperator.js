// Spread operater
const array = [1,2,3,5,8,9];
console.log(array);
console.log(...array);

const student = {
    fullName : "Ajju Sonawane",
    age : 23,
    city : "Bergan"

};
console.log(student);
//console.log(...student);

function show(arg1,...arg) {
    console.log(arg1,arg);
}
show(3,4,5,8);