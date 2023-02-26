var num = 10;
if(num>0){
console.log(`inside if`);
console.log(`Number is positive ${num}`);

}
console.log(`End`);

var ageForVote = 10;
if(ageForVote>=18){
    console.log(`Eligibale for Vote`);
    console.log(`age is: ${ageForVote}`);
}
console.log("End of yhe next block");

function checkEvenOdd(num){

if(num%2==0){
    return "Even"
}
if(num%2!==0){
    return "Odd"
}

}
var result = checkEvenOdd(45);
console.log(`The given no 45 is: ${result}`);
var result = checkEvenOdd(70);
console.log(`The given no 70 is: ${result}`);
var result = checkEvenOdd(67);
console.log(`The given no 67 is: ${result}`);
var result = checkEvenOdd(98);
console.log(`The given no 98 is: ${result}`);

var num1 = 5;
if (num>0) {
    console.log(`number ${num1} is Positive`);
} else {
    console.log(`number ${num1} is Negative`);
}


function maleMarrageEligibility(gender,age,boyName){
    if (gender=="male" && age>=21) {
        console.log("you are Elligible")
    } else {
        console.log("you are Not Elligible")
    } 
  
}
maleMarrageEligibility("male",21,"bilgates");