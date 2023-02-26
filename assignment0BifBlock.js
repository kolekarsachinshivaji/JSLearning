
console.log("-------------if block--------------");

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

console.log("------------------------------------------------------------");

function evenOrOdd(age){
    if(age>=18){
return "Eligible for Voting"
    }
    if(age!=18){
        return "Not Eligible for Voting"
    }

}
var result = evenOrOdd(18);
console.log(`Age 18 is person ${result}`);
var result = evenOrOdd(20);
console.log(`Age 20 is person  ${result}`);
var result = evenOrOdd(17);
console.log(`Age 17 is person  ${result}`);
var result = evenOrOdd(40);
console.log(`Age 40 is person  ${result}`);

console.log("------------------------------------------------------------");

function charlength(str){
  if (str.length>10) {
    return "Yes";
  }
if (str.length<10) {
  return "No";
}
 

}
var result = charlength("JavaScript-Es6");
console.log(`"Javascript-Es6" Char length is grater than 10: ${result}`);

console.log("------------------------------------------------------------");

function startString(value){
if (value.startsWith("java")) {
  return "Yes";
}
if (value.startsWith(!"java"))
return "No";
}
var result = startString("javascript-ES6");
console.log(`"javascript-ES6" string startwith"java":${result}`);
