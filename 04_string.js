var greet="Good Morning";
console.log(typeof greet);

console.log("Total number of char in this string variable:");
var greetLength=greet.length;
console.log("total number of char in this string:",greetLength);

console.log("find the char by index value");
var greetIndex = greet.charAt(3);
console.log("character available of index 3 is",greetIndex);

console.log("find the last char");
var lastChar=greet.charAt(greet.length-1);
console.log("Last charcter is:",lastChar);

console.log("find the index number of M in this string");
var indexNumber=greet.indexOf('M');
console.log("index number of M is:",indexNumber);

console.log("index of char which is not available into the string:",greet.indexOf('z'));

console.log("index no of o is",greet.indexOf('o'));
console.log("index no of Last o is",greet.lastIndexOf('o'));

var replaceresult = greet.replace("Morning","Evening");
console.log(replaceresult);
console.log(greet);

console.log("Upper Case",replaceresult.toUpperCase());
console.log("Lower Case",replaceresult.toLowerCase());

var myName = "  Mohit  Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim():",myNameAfterTrim,myName.length,myNameAfterTrim.length);

var count = myName.length-myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("include()");
console.log("Is Substring mor include in the greet or not:",greet.includes("Mor"));
console.log("Is Substring Afternoon include in the greet or not:",greet.includes("Afternoon"));

console.log("Slice() method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.substring(0,4));

console.log("Split() Method");

var splitResult = greet.split(" ");
console.log(splitResult); 
console.log(typeof splitResult);
console.log("total no of words:",splitResult.length);

var myFriend = "Billgates,Stew Job,Elon Musk,Ratan Tata,Sundar Pichai,Satya Nadella,Narayan Murti,Nandan Nilekan,Larry Page,Surgey Brain,Tim Cook";
var countOfFriends = myFriend.split(",");
console.log(countOfFriends.length);


