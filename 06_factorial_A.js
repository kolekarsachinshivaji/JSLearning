
function factorialOfNum(num) {
    
    if (num==null||num==undefined ||num==0) {
       
        return "Please enter the valid number";
    }
    let factorial = 1;
for (let index = num; index >0; index--) {
    
     factorial = factorial*index;
}

return factorial;



}
var result = factorialOfNum(5);
console.log(`factorial of no 5 is: ${result}`);
var result = factorialOfNum(3);
console.log( `factorial of no 3 is: ${result}`);
var result = factorialOfNum(null);
console.log(`factorial of no null is: ${result}`);
var result = factorialOfNum(8);
console.log(`factorial of no 8 is: ${result}`);
var result = factorialOfNum(undefined);
console.log(`factorial of no undefined is: ${result}`);
var result = factorialOfNum(9);
console.log(`factorial of no 9 is: ${result}`);
var result = factorialOfNum(0);
console.log(`factorial of no 0 is: ${result}`);