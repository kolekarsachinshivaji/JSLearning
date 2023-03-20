let student = {
    firstName : "Prashant",
    lastName : "Deshmukh",
    isWorking :true,
    age : 22,
    collegeName : "ABC",
    id : 123456 
}
// let firstName = student.firstName;
// let isworkingstd = student.isWorking;
// let ageStd = student.age
// let collegeNameStd = student.collegeName
let {firstName,isWorking,age,collegeName,id} = student
console.log(`Extracted values from object:is Working ${isWorking} age ${age} college Name ${collegeName}`);

// Array Destructuring
 const array = [5,6,7,8,9];
const [num1,num2,num3,num4,num5,num6=0,num7] = array;
console.log(num1,num2,num3,num4,num5,num6,num7);