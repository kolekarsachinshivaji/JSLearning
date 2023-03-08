// Sachin Kolekar

let firsName = "Sachin";
let lastName = "Kolekar";
let isWorking = true;
let age = 25;
let collegeName = "Sangola College Sangola";
let id = 1516;

let student ={
    firsName:"Sachin",
    lastName :"Kolekar",
    isWorking : true,
    collegeName : "Sangola College Sangola",
      id : 1516

}
console.log(student);
console.log(typeof student);
console.log(student.firsName);
console.log(student["lastName"]);
delete student.isWorking;
student.country ="India";
console.log(student);

let teacher = {};
teacher.firstName ="Mohit";
console.log(teacher);