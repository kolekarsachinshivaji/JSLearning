// <1> Function with no arguments and no return value

function showFullName(){
console.log("my full name is: Sachin Kolekar");
}
showFullName(); //function call or invoke
//----------------------------------------------------------------------------------------------------------------
// <2> function with argument and no return value
function showage(age){
console.log("my age is:",age);
}
showage(24);
//---------------------------------------------------------------------------------------------------------------
// <3> function with no  argument and return value
function fullName(){

    var name ="sachin";
    return name;
}
var fName= fullName();
console.log(fName);
//--------------------------------------------------------------------------------------------------------------
// <4> Function with arguments and return value

function sumOfNumbers(num1,num2,num3){
    var sum=num1+num2+num3;
    return sum;

}
var sumResult=sumOfNumbers(5,10,2);
console.log(sumResult);

//----------------------------------------------------------------------------------------------------------------
var num1=100;
var num2=200;

var str1="kuldeep";
var str2="sachin";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }
var result=swapVariables(num1,num2);
console.log(result);

var result=swapVariables(str1,str2);
console.log(result);


