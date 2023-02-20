//write any tow function with no argument and no retun type as your choice and log on your console
console.log("*****1*****");
function firstName(){
    console.log("State : Maharashatra");
}
firstName();


function lastName(){

    console.log("Capital : Mumbai");
}
lastName();

console.log("*****2*****");
//Write a function personalDetails naimly firstName,lastName,collegeName arguments and log on console inside a function

function personalDetails(firstName,lastName,collegeName){
    console.log(firstName,lastName,collegeName);

}
personalDetails("First Name: Sachin","Last Name: Kolekar"," College Name: Sangola College sangola");

//function with to argument and should the passed values and log on console before swap and after swap values inside the function itself.(Func with args and no return value)
console.log("*****3*****");

var value1="virat"
var value2="Anushka"

var num1=1000;
var num2=2000;

function swapValuesDude(value1,value2){
    console.log("Before Swaping:",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swaping:",value1,value2);

}
swapValuesDude(value1,value2);
swapValuesDude(num1,num2);

//Wtite a Function with 3 parameters and it should return the addition
console.log("*****3*****");


function addThreeValues(value1,value2,value3){
 var addition=value1+value2+value3;
return addition;
}
var result=addThreeValues(10.23,600,40);
console.log("Addition=",result);
var result=addThreeValues("Hellow","Good","Morning");
console.log(result);
