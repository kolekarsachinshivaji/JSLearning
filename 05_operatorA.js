
function squareOfWordLength(word1,word2,word3){
console.log(`Length of word JavaScript is: ${word1.length}`);
var result = word1.length ** 2;
console.log(`squre of its length is ${result}`);

console.log(`Length of word Google Chrome is: ${word2.length}`);
var result = word2.length ** 2;
console.log(`squre of its length is ${result}`);

console.log(`Length of word Developer Smart is: ${word3.length}`);
var result = word3.length ** 2;
console.log(`squre of its length is ${result}`);

}
squareOfWordLength("JavaScript","Google Chrome","Developer Smart");

console.log(`-----------------------------------------------------------------------------`);

function demo(){
    var str = "I am Angular Developer"
    var length = str.length;
    console.log(`length of string is ${length}`);
    var split = str.split(" ");
    var numberOfWords = split.length;
    console.log(`total wodrs are ${numberOfWords}`)

    var div = length / numberOfWords;
    console.log(`total length divide by total no of words in this strin= ${div}`);
var multi = length * numberOfWords;
console.log(`total length multiplyed  by total no of words in this strin= ${multi}`);

}
demo();