
function factorialOfWordsCount(str) {
    if (str==null||str==undefined||str==NaN||str==0) {
        return "please enter the valid input"
    }
let word = str.split(" ");

let wordLength = word.length;
console.log(`word lenth of this string is ${wordLength}`);
let factorial=1;
for (let index = wordLength; index >0; index--) {
   
    factorial = factorial * index;
}

return factorial;


}
var result = factorialOfWordsCount("Revision is the mother of Success");
console.log(`factorial of "Revision is the mother of Success" string wordlength ${result}`);
var result = factorialOfWordsCount("We never fail, we always learn");
console.log(`factorial of "We never fail, we always learn" string wordlength ${result}`);
var result = factorialOfWordsCount(null);
console.log(result);
var result = factorialOfWordsCount("");
console.log(result);
var result = factorialOfWordsCount("Sachin Shivaji Kolekar");
console.log(`factorial of "Sachin Shivaji Kolekar" string wordlength ${result}`);