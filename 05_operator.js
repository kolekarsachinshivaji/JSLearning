console.log(`====Arithmatic operator====`);

var num1 = 10;
var num2 = 2;
var result = num1+num2;
console.log(`Addition is ${result}`);

var num1= 10;
var num2 = 2;
var result = num1-num2;
console.log(`Substraction is ${result}`);

var num1= 10;
var num2 = 2;
var result = num1*num2;
console.log(`Multiplication is ${result}`);

result = num1 ** num2;
console.log(`Exponentional is ${result}`);

// console.log(10/3);

// console.log(15%3);

result= num1/3;
console.log(`Division is ${result}`);

result= num1%3;
console.log(`Reminder is ${result}`);



var num=10;//compound addition
num+=20;//num=num+20

console.log(`compound addition ${num}`);

console.log(`comparison operators`);
var num3="10";
var num4=10
console.log(num3==10);//10==10
console.log(num3===10);


console.log (num3 != num4);// ! not

console.log(10 > 20);// > Greater than

console.log(20 < 10);// < Less than

var marks = 35;
console.log( marks >= 35); // >=Greater than equal



var marks = 70;

var result = marks>=60 ? "Alow Him fo Interview" : "don't allow";

console.log(result);

var age=20;

var res = age>=21 ? true : false;

console.log(res);


console.log("even or odd");

var myNumber = 7;
// Ecven - Divisible by 2 and reminder is 0

var result = myNumber%2==0 ? "Even" : "Odd"
 console.log(result);



 function wordLength(word){ 
    var wordLength = word.length;
     var result = wordLength%2==0 ? "EVEN" : "ODD"; 
     return result; }
     var result = wordLength("JavaScript"); 
     console.log(`Word "JavaScript" has ${result} length` ); // var result = wordLength("Google"); console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );





     function maleMarriageEligibility(gender, age, boyName){ 
        var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
         return result; } 
         var result = maleMarriageEligibility("Male", 25, "Billgates");
      console.log(result);

