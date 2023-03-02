
var vowelsCount = function(str){
    var vowles = ""
for (let index = 0; index <str.length; index++) {
let b =str.charAt(index);

b= b.toLowerCase();
if ( b== 'a' || b == 'e'|| b == 'i'|| b == 'o'|| b== "u") {
    
  vowles= vowles+ str.charAt(index)
}

}
return vowles.length;

}
var a= vowelsCount("javaScript is the language Of internet");
console.log(`"javaScript is the language Of internet" in this string total no of vowels are: ${a}`);
var a= vowelsCount("I am Angular Developer");
console.log(`"I am Angular Developer" in this string total no of vowels are: ${a}`);
var a= vowelsCount("Hard Work and commitment is the key of success");
console.log(`"Hard Work and commitment is the key of success" in this  stringtotal no of vowels are: ${a}`);

console.log("----------------step2---------------------------------------------------");



function lastWordCharsCount(str){
var lastWord=""
  for (let index = str.length-1; index >=0 ; index--) {

    if (str.charAt(index) == " ") {
      break;
    }

   var a= str.charAt(index);
    
   lastWord = lastWord + a;

  }
lastWord;
return lastWord.length;


}
var result = lastWordCharsCount("javaScript is the language Of internet");
console.log(`"javaScript is the language Of internet"last word length of this string is: ${result}`);
var result= lastWordCharsCount("I am Angular Developer");
console.log(`"I am Angular Developer" last word length of this string is: ${result}`);
var result= lastWordCharsCount("Hard Work and commitment is the key of success");
console.log(`"Hard Work and commitment is the key of success" last word length of this string is: ${result}`);