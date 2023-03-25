// // // // // // var sony = function (str) {
// // // // // //   var rev = "";
// // // // // //   counter = 0;
// // // // // //   for (let index = 0; index <= str.length; index++) {
// // // // // //     var s = str.charAt(index);

// // // // // //     if (s == " ") {
// // // // // //       counter++;
// // // // // //       if (counter == 2) {
// // // // // //         break;
// // // // // //       }
// // // // // //     }
// // // // // //     var rev = rev + s;
// // // // // //   }

// // // // // //   return rev;
// // // // // // };
// // // // // // var result = sony("anushaka virat kohali");
// // // // // // console.log(result);

// // // // // // function factorial(num) {
// // // // // //   let fact = 1;
// // // // // //   for (let index = num; index > 0; index--) {
// // // // // //     fact = index * fact;
// // // // // //   }
// // // // // //   return fact;
// // // // // // }
// // // // // // var re = factorial(5);
// // // // // // console.log(re);
// // // // // // console.log("------------------------------------------------------------------------------------------------------");

// // // // // let sachin = function(str){
// // // // // let reverse = "";
// // // // // for (let index = str.length-1; index >=0; index--) {
   
  
// // // // //     let   char = str.charAt(index);

// // // // // if (char==" ") {
// // // // //   break;
// // // // // }
// // // // // reverse=reverse+char;
// // // // // }
// // // // // return reverse;



// // // // // }
// // // // // let sresult = sachin("Sachin Shivaji Kolekar");
// // // // // console.log(sresult);








// // // // // let table = function (num) {
  
// // // // // for (let index = 1; index <=10 ; index++) {
// // // // // let t = num*index;
// // // // // console.log(t);
// // // // // }


// // // // // }
// // // // // table(5);



// // // // let isprime = function (num) {
// // // //   if (num<=1) {
// // // //     return "num is not prime";
// // // //   }
// // // //   for (let index = 2; index < num; index++) {
// // // //     if(num%index==0){
// // // //       return "num is not prime";
// // // //     }
// // // //     return "num is prime";
// // // //   }
// // // // }
// // // // let result = isprime(11);
// // // // console.log(result);

// // // // //FizzBuzz: Write a program that prints the numbers from 1 to 100. 
// // // // //But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// // // // //For numbers which are multiples of both three and five print "FizzBuzz".

// // // // for (let index = 1; index <= 100; index++){
// // // //   if (index%3==0 && index%5==0) {
// // // //     console.log("FizzBuzz");
// // // //     console.log(index);
// // // //   }else if (index%3==0) {
// // // //     console.log("Fizz");
// // // //     console.log(index);
// // // //   }else if (index%5==0) {
// // // //     console.log("Buzz");
// // // //     console.log(index);
    
// // // //   }


// // // // }


// // // // //reverse string program.

// // // // let reverse = function (str) {
// // // // let rev =""
// // // // for (let index = str.length-1; index >=0 ; index--) {
    
// // // //  const char =str.charAt(index);

// // // //   rev=rev+char;
  
// // // // }

// // // // console.log(rev);

// // // // }
// // // // reverse("Sachin Shivaji Kolekar")


// // // // //first word reverse

// // // // let reverse2 = function (str) {
// // // //   let rev =""
// // // //   for (let index = 0; index <str.length ; index++) {
      
// // // //    let char =str.charAt(index);
// // // //   if (char==" ") {
// // // //     break;
// // // //   }
// // // //     rev=rev+char;
    
// // // //   }
// // // //   let fword=""
// // // //   for (let index = rev.length-1; index >= 0; index--) {
// // // //         let firstWord =rev.charAt(index)
// // // //         fword=fword+firstWord;
// // // //   }
// // // //   console.log(fword);
  
// // // //   }
// // // //   reverse2("Sachin Shivaji Kolekar");

// // // //   //Factorial: Write a function that takes in a number and returns the factorial of that number.



// // // //   let num=6;
// // // //   let fact=1;
// // // //   for (let index = num; index >=1; index--) {
// // // //     fact=fact*index;

    
// // // //   }
// // // //   console.log(fact);



// // // //   let factorial= function (num) {
// // // //     let fact=1;
// // // // for (let index = num; index >=1; index--) {
// // // //   fact =fact*index;
  
// // // // }
// // // //  console.log(fact);   
// // // //   }
// // // //   factorial(5);





// // // //object
// // // const sachin={
// // //   name :"sachin",
// // //   id: "FB00267",
// // //   city : "pune",
// // //   pin : 411052,
// // //   information:{
// // // village:"mahud",
// // // dist:"solapur",
// // // tal: "sangola"
// // //   }

// // // }
// // // sachin.name="kolekar"
// // // console.log(sachin);
// // // delete sachin.city
// // // console.log(sachin);
// // // sachin.number=9021221516;
// // // console.log(sachin);
// // // console.log(sachin.information);


// // // // //class And Object

// // // // class EmpInformation{




// // // // }

// // // const person= {
// // // name:"sachin",
// // // age:"25",
// // // city: "pune",
// // // hi:function () {
// // //   console.log(`my name is${this.name} my age is ${this.age} and my city is${this.city}`);
// // // }
// // // };

// // // person.hi();




// // // // defining a class
// // // class Person {
// // //   constructor(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }

// // //   sayHello() {
// // //     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// // //   }
// // // }

// // // // creating an object of the Person class
// // // const person1 = new Person('John', 30);

// // // // calling a method on the object
// // // person1.sayHello(); // "Hello, my name is John and I'm 30 years old."



// // // class emploee{
// // //   name;
// // //   id;
  
// // // constructor(name,id ){
// // // this.name=name;
// // // this.id=id;
// // //   }

// // //   sayHello(){
// // //     console.log(`hello my name is  ${this.name}  and my id is  ${this.id}`);
// // //   }

// // // }


// // // const sachu = new emploee("sachin",1001)
// // // sachu.sayHello();

// // // const somnath = new emploee("somnath",1002)
// // // const abhi = new emploee("abhijeet",1003)

// // // abhi.sayHello();


// // // const currentDateAndTime = new Date();
// // // console.log(currentDateAndTime);


// // // const array=[10,20,30,40,50,60,70];
// // // sum=0;
// // // for (let index = 0; index < array.length; index++) {
// // //     const element = array[index];
    
// // //     sum=sum+element;
// // // }
// // // console.log(sum);

// // // const array=[10,20,30,40,50,60,70];
// // // let max=array[0];
// // // for (let index = 0; index < array.length; index++) {
    
// // //     if (array[index]>max) {
// // //         max = array[index];
// // //     }
// // // }
// // // console.log(max);



// // // const arr=[10,25,30.8,15,40,1,20,,1,40];
// // // let element=arr[0];
// // // for (let index = 0; index < arr.length; index++) {
     
// // //     if (arr[index]>element) {
// // //         element = arr[index];
// // //     }
// // // }
// // // console.log(element);




// // class sachin{
// //     constructor(id,name,city){
// //         this.id=id;
// //         this.name=name;
// //         this.city=city;
// //     }
// //     info(){
// //         console.log( this.id,this.name,this.city);
            
          
// //     }
// // }

// // const sachu=new sachin(1,"Sachin","pune");
// // // console.log(sachu);
// // // sachu.info();



// // // let traverseobject = function (params) {
// // //     for (const key in params) {
// // //         if (Object.hasOwnProperty.call(params, key)) {
// // //             const element = params[key];
// // //             console.log(element);
// // //         }
// // //     }


// // // }
// // // traverseobject(sachu);
// // // let abc= [1,1,5,1,1,1];
// // // abc.splice(2,0,7);
// // // console.log(abc);

// // // const array=[10,70,70,31,30,35,30,30,4];
// // // var temp=array[0];
// // // for (let index = 0; index < array.length; index++) {

// // //      for(let j=0;j<array.length;j++)
// // //      {
// // //         if(array[index]<array[j])
// // //         {
// // //            temp=array[index];
// // //            array[index]=array[j];
// // //            array[j]=temp

// // //         }
// // //      }
   
    
// // // }
// // //      console.log(array);

// // // incrimet  and decrimet
// // // var a=10;
// // // var b;
// // // b=++a;
// // // console.log(b++)
// // // console.log(b)



// // // const array=[10,20,30,40,10,70,1,20,30];
// // // let temp=array[0];
// // // for (let index = 0; index < array.length; index++) {
// // //    if (temp<array[index]) {
// // //    temp= array[index];
// // //    }
    
// // // }
// // // console.log(temp);




// // // const array=[10,15,90,15,75,13];
// // // let temp=array[0];
// // // for (let index = 0; index < array.length; index++) {
// // //     if (array[index]>temp) {
// // //         temp =array[index];
// // //     }
    
// // // }
// // // console.log(temp);




// // // const arr= [10,21,25,12,18,40];
// // // let samllestno=arr[0];
// // // for (let index = 0; index < arr.length; index++) {
    
// // //     if (arr[index]<samllestno) {
// // //         samllestno=arr[index]
// // //     }
// // // }
// // // console.log(samllestno);


// // let isPrimeOrNot = function (num) {
// //     if (num<=1) {
// //         return "no is not prime nor composite"
// //     }
// // for (let index = 2; index <=num; index++) {
// //     if (num%index==0) {
// //         return "no is not prime"
// //     }else{
// //         return "no is prime"
// //     }
    
// // }
// // }
// // var result = isPrimeOrNot(2);
// // console.log(result);


// // let str="sachin";
// // let r = str.repeat();
// // console.log(r);



// const a=[1,2,3,45,6,7,8,9]
// let max=[0];
// for (let index = 0; index < a.length; index++) {
   
//     if (a[index]>max) {
//         max=a[index];
//     }
    
// }
// console.log(max);



// const b=[10,20,2,3,,71,90];
// let smallestNo=b[0]

// for (let index = 0; index < b.length; index++) {
//    if (a[index]<smallestNo) {
//     smallestNo=a[index];
//    }
    
// }
// console.log(smallestNo);


// const str="Sachin shivaji kolekar";
// let reverse="";
// for (let index = str.length-1; index >=0; index--) {
//     const char = str.charAt(index);
//     reverse=reverse+char;
// }
// let a =reverse.toUpperCase();
// console.log(a);
// console.log(reverse);

// const array=[10,15,12,25,25,30,40,16,90];
// let duplicateelements=[];
// for (let index = 0; index < array.length; index++) {
//     let a = array[index];
//     for (let j = index+1; j < array.length; j++) {
//         let b = array[j];
//         if(array[index]==array[j]){
//           duplicateelements.push(array[j]);
//         }
//     }
    
// }
// console.log(duplicateelements);



// let sumarray= function (array) {
//     let sum=0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         sum=sum+element
//     }
//     console.log(sum);




// }
// sumarray([1,2,3,4,5,6,7,8,9,10]);


//  let duplicateElements = function (array) {
//     let result=[];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i]===array[j]) {
//                 result.push(array[i])
//             }
            
//         }
        
//     }
//     console.log(result);




//  }
//  duplicateElements([1, 2, 3, 2, 4, 3]);



// function bank(name,id,city){

// this.name=name;
// this.id=id;
// this.city=city;
// this.show = function () {
//     console.log(this.name,this.id,this.city,this.branch);
// }

// }
// let sbi = new bank("sbi",001,"pune");
// sbi.show();
// bank.prototype.branch="mumbai";
// sbi.show();

// }

// let data = true ;
// if(data == true){
// console.log("data id true");
// }
// data ? console.log("data is True"):console.log("data is false");


// const array = [10,20,30,10,40,50];
// let max=[];
// for (let index = 0; index < array.length; index++) {
   
//     if(array[index]>max){

// max=array[index]
       
//     }
    
// }
// console.log(max);



// let a=[];
// let b =[];

// console.log(a==b);
// console.log(a===b);



//find the first 15 prime no



// let str = "sachinkolekar"
// let duplicate ="";
// for (let i = 0; i < str.length; i++) {

//  let a   =str.charAt(i)
//   for (let j = i+1; j < str.length; j++) {
//     let b  =str.charAt(j);
//     if (a==b) {
//         duplicate=duplicate+a;
//     }

    
//   }
  
    
// }
// console.log(duplicate);



// let array = [10,20,10,10,30,20,40];
// let duplicatearray=[];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if (array[i]==array[j]) {
            
//             duplicatearray.push(array[i]);
//         }
        
//     }
    
// }
// console.log(duplicatearray);

// let isprime = function (num) {
//     if(num<=1){
//        return "not prome";
//     }
//   for (let index = 2; index <= num; index++) {
//     if (num%index==0) {
//         return "not prime"
//     }
  
//   }
//   return "is prime"
// }
// let result = isprime(13);
// console.log(result);


// const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
// let index=0;
// let sum=0;
// while(index<arrayOfNumbers.length){
//     const element = arrayOfNumbers[index];
// if (element%2==0) {
    
//     sum=sum+element
    
// }
// console.log(sum);
// index++;

// };
 
// Object literals
// let student = {
//     firstName: "Prashant",
//     lastName: "Deshmukh",
//     isWorking: true,
//     age: 22,
//     collegeName: "ABC",
//     id: 123456,
//     address: {
//         street: "Wakad",
//         city: "Pune",
//         PIN: "431204"
//     },
//     school : "Podar School",
//     friends: ["Bill", "Stew", "Elon"],
//     show: function(){
//         console.log("I am show() function");
//     }
// };
// student.show();
// console.log(student.friends);
// console.log(student.friends[student.friends.length-1]);

// sachin = {
//     name : "sachin",
//     lastname : "kolekar",
//     age:25,
//     city:"pune",
//     adress:{
//         pin:413304,
//         state: "maharashatra",
//         country: "india"
//     }

// };
// for (const key in sachin) {
//     if (sachin.hasOwnProperty.call(sachin, key)) {
//         const element = sachin[key];
//       console.log(element);  
//     }
    
// }
// let c=30;
// function outerFunction() {
//     let a=10;
   // console.log(a);
//     function inner(params) {
//         let b=20;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     return inner;
// }
// let result = outerFunction();
// result();

// function copyHomework(params) {
//     console.log("sachin kolekar");
//     params();
// }

// function dohomework() {
//     console.log("SevenMind Technology");
// }
// copyHomework(dohomework);

// function showNotifications() {
//     console.log("hello");
// }
// setTimeout(showNotifications,4000);

// function sachin() {
//     console.log("sachu");
//     return function () {
//         console.log("sachinkolekar");
//     }
// }
// let result = sachin();
// result();

// let c=30;
// function outer() {
//    let a= 10;
// // console.log(a);
// function inner() {
//      let b=20;
//      console.log(b); 
//      console.log(a);
//      console.log(c);
// }
// return inner;
// }
// let result = outer();
// result();



// function soma(params) {
//    console.log("soma");
//    params();
// }
// function sachin() {
//    console.log("sachu");
// }
// soma(sachin);

// let soma ={
//    name:"somnath",
//    age: 25,
//    city: "pune"
// };

// for(key in soma){
//    console.log(soma[key]);

// }
// const arrayNums = [20,30,4,56,90,400,49];

// const clonedArray = arrayNums;

// clonedArray.push(55,66);
// console.log(`Original Array : ${arrayNums}`);

// console.log(`clonedArray Array : ${clonedArray}`);


// const deepCloning = [...arrayNums];
// arrayNums.push(10,25);
// console.log(`Original Array : ${arrayNums}`);
// console.log(`clonedArray Array : ${deepCloning}`);

// const arrayEven = [2,30,14,8];

// const mergedArray = [...arrayNums,...arrayEven];
// console.log(`Merged Array ${mergedArray}`);

// console.log("--------------------------------------------------------------");

// const employee_info = {

// emp_id : 27,
// emp_name : "john Doe",

// salary :{
//     july_month : "40,0000INR",
//     aug_month : "50,0000INR",
//     jun_month : "50,0000INR",
// },
// address:{
//     locality:{
//         colony : "OM Vrindhavan Society",
//         street : "Kanch Pokli,431202",
//     },
//     city : "Mumbai",
//     state : "Maharashatra",
//     country : "India"

// },
// mobiles : ["+91 8600 3456", "1800- 4567 32","+91- 9096 5678 77"]

// }

// console.log(
//   `a] Address : Colony : ${employee_info.address.locality.colony},  Street : ${employee_info.address.locality.street}, City : ${employee_info.address.city}, State : ${employee_info.address.state}, Country : ${employee_info.address.country} `,
// )


// console.log(`logged mobile Numbers : ${employee_info.mobiles}`);

// console.log("-------------------------------------------------------------");

// const newemp = JSON.parse(JSON.stringify(employee_info));

// newemp.salary.july_month="80k";


// console.log(`Original Object Salary ==> ${employee_info.salary.july_month}`)
// console.log(` Cloned Object Salary ==> ${newemp.salary.july_month} `)





// const clonedobj = JSON.parse(JSON.stringify(employee_info));
// clonedobj.country="United Kingdom";

// console.log(` Original object country : ${employee_info.address.country}`);

// console.log(` cloned object country : ${clonedobj.country}`);




// const employee_info = {

//    emp_id : 27,
//    emp_name : "john Doe",
   
//    salary :{
//        july_month : "40,0000INR",
//        aug_month : "50,0000INR",
//        jun_month : "50,0000INR",
//    },
//    address:{
//        locality:{
//            colony : "OM Vrindhavan Society",
//            street : "Kanch Pokli,431202",
//        },
//        city : "Mumbai",
//        state : "Maharashatra",
//        country : "India"
   
//    },
//    mobiles : ["+91 8600 3456", "1800- 4567 32","+91- 9096 5678 77"]
   
//    }
//    employee_info.address.country="uk";
//    console.table(employee_info);

   
// const arr = ["sachin","cooldeep","soma","abhi"];

// for (let index = 0; index < arr.length; index++) {
   
//    const element = arr[index];
// //    if (element.charAt(0)=="s") {
// //     console.log(element);
// //    }
// if (element.startsWith("s")) {
//     console.log(element);
// }

// }


// const array = [10,20,30,40,25,15];
//  let max=[0];
// for (let index = 0; index < array.length; index++) {
//    if (array[index]>max) {
//       max=array[index]
//    }
   
// }
// console.log(max);
// const array = [10,20,30,40,25,15];
// const a =array.sort();
// console.log(a);
// const array = [10,20,30,40,25,15];
//   let max=[0];
//  for (let index = 0; index < array.length; index++) {
//     if (array[index]>max) {
//        max=array[index]
//     }

// let str= "sachinshivajikolekar";
// let a=""
// let counter =1;
// for (let index = 0; index < str.length; index++) {
  
//    if (str.charAt(index)=="s") {
//       counter++;
//       if (counter==2) {
//          const element = str.charAt(index);
//          a=a+element;
//          console.log(a);
//       }
//    }
   
// }


// const arr=[10,13,32,32,4,6,55,7,];
 
//  const setOfarr =new Set();
// for (const element of arr) {
//    setOfarr.add(element);

// }
// console.log(setOfarr);


// const mynewset =[...new Set(arr)]
// console.log(mynewset);

// function febo(num) {
//    let first =0;
//    let second =1;
//    let sum=0;
//    for (let index = 0; index < num; index++) {
//       console.log(first);
//       sum=first + second;
//       first=second;
//       second=sum
//    }

// }
// febo(10);



// let a=0;
// let b=1;
// sum=0;
// for (let index = 0; index < 10; index++) {
  
//    sum=a+b;
//    a=b
//  b=sum
//  console.log(a);
// }


// let first=0;
// let second =1;
// let sum=0;
// for (let index = 0; index < 10; index++) {
//    console.log(first);
//    sum=first+second
//    first=second
//    second=sum
// }



// let a=0,b=1,sum=0;
// for (let index = 0; index < 10; index++) {
//    console.log(a);
//    sum=a+b;
//    a=b;
//    b=sum
   
   
// Swap 2 variables using third variable
// let a=10
// let b=100 ;
// let temp;
// console.log(a,b);
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);

// // Swap 2 variables Without using third variable
// let a=10,b=7;
// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a,b);

// let a=0
// for (let index = 1; index <=10; index++) {
//    a++;
//    console.log(a);
   
// }

// table

// let a=5

// for (let index = 1; index <=10; index++) {
   
// let  table= a*index;
//  console.log(table);
// }

// let array = [
//    {aka:101,ak:12,pl:2,ps:66,ts:4,op:5,rt:566,},
//    {aka:101,ak:34,pl:2,ps:66,ts:4,op:5,rt:566,},
//    {aka:101,ak:23,pl:2,ps:66,ts:4,op:5,rt:566,},
// ];

// const student ={

//    name : "sachin",
//    city: "pune"
// }
// const clonedStudent = Object.assign(student);

// clonedStudent.name="pravin";
// console.log(clonedStudent);
// console.log(student);

// const student ={

//    name : "sachin",
//    city: "pune"
// }

// const sachin ={
//    adress:"mumbai",
//    pin: 411052
// }
// const sachu = Object.assign({},student,sachin);
// console.log(sachu);


// function prime(params) {
//   if (params<=1) {
//     return "not prime"
//   }
//   for (let index = 2; index < params; index++) {
   
//     if (params%index==0) {
//       return" is not prime"
//     }
  
//   }
//   return "prime"
// }
// let a= prime(11)
// console.log(a);

// let array=[10,12,15];
// let sum=0;
// for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    sum=sum+element
// }
// console.log(sum);


// class Employee {
//    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//      this.emp_id = emp_id;
//      this.emp_name = emp_name;
//      this.emp_dept = emp_dept;
//      this.emp_salary = emp_salary;
//      this.emp_company = emp_company;
//    }
//  }
//  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
//  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
//  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
//  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
//  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
//  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
//  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");
 
// //  const array = [
// //    emp_anil,
// //    emp_radha,
// //    emp_rishi,
// //    emp_sonali,
// //    emp_monika,
// //    emp_vinay,
// //    emp_mahi,
// //  ];

// //  const avrage =array.filter((element)=>{
// //    return element.emp_company=="TCS"
// //  }).filter((element)=>{
// // return element.emp_salary
// //  }).reduce((runningOftotalno,value)=>{
// //     console.log(runningOftotalno+value);
   

// //  })
// //  console.log(avrage);


// const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

// arrayNumbers.forEach((element,index) => {
//  console.log(element,index);
// });

// arrayNumbers.forEach((element)=>{
// if (element>=0) {
//   console.log(element);
// }

// })


// let arr=[];
// arrayNumbers.forEach((element)=>{
//   if(element<0){
// arr.push(element)

//   }
  
// })
// console.log(arr);
// let sum=0;
// arrayNumbers.forEach((element)=>{

// sum=sum+element;



// })
// console.log(sum);


// arrayNumbers.forEach((element,index)=>{
//  if (index%2==0) {
//   console.log(element);
//  }
// })

// let array = [10,3,9,8,7,3,18];
// array.sort((a,b)=>{
//  return a<b ? 1 : -1;
// })
// console.log(array);
// **********************************************************************************************

// class Employee {
//    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//      this.emp_id = emp_id;
//      this.emp_name = emp_name;
//      this.emp_dept = emp_dept;
//      this.emp_salary = emp_salary;
//      this.emp_company = emp_company;
//    }
//  }
//  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
//  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
//  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
//  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
//  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
//  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
//  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");

//  const mapEmployees =new Map();

// mapEmployees.set(1,emp_anil)
// mapEmployees.set(2,emp_radha)
// mapEmployees.set(3,emp_rishi)
// mapEmployees.set(4,emp_sonali)
// mapEmployees.set(5,emp_monika)
// mapEmployees.set(6,emp_vinay)
// mapEmployees.set(7,emp_mahi)

// for (const key of mapEmployees) {
  
// }
// **********************************************************************************************

// const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
// For the given array Perform the below operations as
// 1. Add 10 into each element and log new array result on console 
// 2. Square the each array element and log on console
// 3. Add the index value into its corresponding each array element and log new array result on console
// const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];

// const a =arrayNumbers.map((element)=>{
//   return element+10
// })
// console.log(a);

// const b= arrayNumbers.map((element)=>{
//   return element * element
// }) 
// console.log(b);


// const c =arrayNumbers.map((element,index)=>{
//  return element+index
// })
// console.log(c);

// class Employee {
//    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//      this.emp_id = emp_id;
//      this.emp_name = emp_name;
//      this.emp_dept = emp_dept;
//      this.emp_salary = emp_salary;
//      this.emp_company = emp_company;
//    }
//  }
//  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
//  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
//  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
//  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
//  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
//  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
//  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");

//  const a=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_rishi,emp_sonali,emp_vinay];


// Assignment C - for reduce( ) method
// const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// 1. Find the sum of all numbers
// 2. Find the numbers multiple of 5 and then sum it[ Hint → filter first then use reduce( ) ]

// const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// const a = array_numbers.reduce((runningTotal,value)=>{
//   return runningTotal+value
// })
// console.log(a);

// const n=array_numbers.filter((element)=>{
//   if (element%5==0) {
//     return element
//   }
// }).reduce((runningtotal,value)=>{
//   return runningtotal+value;
// })
// console.log(n);

// array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// const k=array_numbers.reduce((runningTotal,value,index)=>{
//   const a= runningTotal+value
//   return a/array_numbers.length
// })
// console.log(k);


// class Employee {
//    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//      this.emp_id = emp_id;
//      this.emp_name = emp_name;
//      this.emp_dept = emp_dept;
//      this.emp_salary = emp_salary;
//      this.emp_company = emp_company;
//    }
//  }
//  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
//  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
//  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
//  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
//  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
//  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
//  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");

//  const arrayEmps=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_rishi,emp_sonali,emp_vinay];

// const a=arrayEmps.filter((elements)=>{
//   if (elements.emp_company=="Wipro") {
//    return elements
//   }
// })
// console.log(a);




// Assignment A: Sorting in Ascending / Descending order and reverse
// const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] 
// 1. Reverse the array
// 2. Use the sort() method as it is without any custom sorting logic (Without passing any 
// arguments) & notice the issue
// 3. Sort the array in ascending order, by writing your custom logic
// 4. Find the Greatest number from the array
// 5. Find the smallest number from the array
// 6. Remove duplicates from array
// Note: After each step log the output on console

// const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];


// const emp={
//   sachin:"sachin",
//   city:"pune",
// }
// const emp_adress={
//   pin:232434,
//   state:"MH"
// }
//  const s =Object.assign(emp)
//  console.log(s);
// s.city="sangola";
// console.log(s);
// console.log(emp);

// const merg= Object.assign({},emp,emp_adress)
// console.log(merg);

// class Employee {
//   constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//     this.emp_id = emp_id;
//     this.emp_name = emp_name;
//     this.emp_dept = emp_dept;
//     this.emp_salary = emp_salary;
//     this.emp_company = emp_company;
//   }
// }
// const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
// const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
// const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
// const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
// const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
// const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
// const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");

// const array = [
//   emp_anil,
//   emp_radha,
//   emp_rishi,
//   emp_sonali,
//   emp_monika,
//   emp_vinay,
//   emp_mahi,
// ];

// const a=array.filter((ab)=>{
//   if (ab.emp_company== "TCS") {
//     return ab
//   }
   
// })
// const c=a.filter((element)=>{
//   return element.emp_salary
// })
// const b=a.reduce((runningtotal,value)=>{
//   return runningtotal+ value
// })
// console.log(b);

// class Employee {
//      constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//        this.emp_id = emp_id;
//        this.emp_name = emp_name;
//        this.emp_dept = emp_dept;
//        this.emp_salary = emp_salary;
//        this.emp_company = emp_company;
//      }
//    }
//    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
//    const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
//    const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
//    const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
//    const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
//    const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
//    const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");
  
//    const arrayEmps=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_rishi,emp_sonali,emp_vinay];


  
//    const a=arrayEmps.filter((element)=>{

//    return element.emp_company=="Wipro"||element.emp_company=="TCS"  
//    })
//   // const b =a.reduce((runningtotal,value)=>{

//   //  return runningtotal.emp_salary+value.emp_salary
//   //  })
//   //  console.log(b/a.length);

// console.log(a);



// var message = `Hello, Very Good Morning - "Sachin" `; 
// console.log(message);

// const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
// console.log(...arrayRollNumbers);

// function div(x,y=1){
//   console.log(x/y);
// }
// div(20,10)
// div(5)

// const sachu={
//   fname:"sachin",
//   lname: "kolekar",
//   age:25,

// }

// let name1 = sachu.fname
// let age = sachu.age
// console.log(name1,age);
// let{fname,age,lname}=sachu
// console.log(fname,age,lname);



// const arr= ["sachin","Abhya","Somya",]


// let sachin="sachu"
// let reverse="";
// for (let index = sachin.length-1; index >=0; index--) {
//   const element = sachin.charAt(index);
//   reverse=reverse+element
  
// }
// console.log(reverse);


const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
// let max=arrayRollNumbers[0];
// for (let index = 0; index < arrayRollNumbers.length; index++) {
//   const element = arrayRollNumbers[index];
//   if (element<max) {
//     max=element
//   }
// }
// console.log(max);
// arrayRollNumbers.sort((a,b)=>{
//   return a>b?1:-1;
// })
// console.log(arrayRollNumbers);
// const max= arrayRollNumbers[0];
// console.log(max);

// const mySet=new Set();
// for (let index = 0; index < arrayRollNumbers.length; index++) {
//  const a =arrayRollNumbers[index]
//   mySet.add(a)
  
// }
// console.table(mySet);

// let first=0,second=1,sum=0;
// for (let index = 0; index < 15; index++) {
//   sum=first+second;
//   first=second
//   second=sum;
//   console.log(first);
  
// }



let arr=["Atpadi","sangola","pandharpur","Akaluj"]

const a=arr.filter((element)=>{
return element.startsWith("A")
})
console.log(a);