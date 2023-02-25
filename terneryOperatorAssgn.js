
function greaterNumber(num1,num2){
var result = num1>num2 ? num1 : num2;

console.log(`greater no is: ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("-----------------------------------------------------");
function isEvenOrOddNum(num1){
 
   var result = num1%2==0 ? true :false ;
  
   return result;
}
var a = isEvenOrOddNum(29);
console.log(`The given no 29 is Even ${a}`);
var a = isEvenOrOddNum(44);
console.log(`The given no 44 is Even ${a}`);
var a = isEvenOrOddNum(0);
console.log(`The given no 0 is Even ${a}`);
var a = isEvenOrOddNum(101);
console.log(`The given no 101 is Even ${a}`);

console.log("-----------------------------------------------------");
function wordLength(word1){
var length = word1.length;
var a = length%2==0 ? "Even" :"Odd";
return a;
}
var b = wordLength("JavaScript");
console.log(`Length of "JavaScript" word is: ${b}`);
var b = wordLength("developer");
console.log(`Length of "developer" word is: ${b}`);
var b = wordLength("Google");
console.log(`Length of "Google" word is: ${b}`);


