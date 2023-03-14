const arrayNums = [20,30,4,56,90,400,49];

const clonedArray = arrayNums;

clonedArray.push(55,66);
console.log(`Original Array : ${arrayNums}`);

console.log(`clonedArray Array : ${clonedArray}`);


const deepCloning = [...arrayNums];
arrayNums.push(10,25);
console.log(`Original Array : ${arrayNums}`);
console.log(`clonedArray Array : ${deepCloning}`);

const arrayEven = [2,30,14,8];

const mergedArray = [...arrayNums,...arrayEven];
console.log(`Merged Array ${mergedArray}`);

console.log("--------------------------------------------------------------");

const employee_info = {

emp_id : 27,
emp_name : "john Doe",

salary :{
    july_month : "40,0000INR",
    aug_month : "50,0000INR",
    jun_month : "50,0000INR",
},
address:{
    locality:{
        colony : "OM Vrindhavan Society",
        street : "Kanch Pokli,431202",
    },
    city : "Mumbai",
    state : "Maharashatra",
    country : "India"

},
mobiles : ["+91 8600 3456", "1800- 4567 32","+91- 9096 5678 77"]

}

console.log(
  `a] Address : Colony : ${employee_info.address.locality.colony},  Street : ${employee_info.address.locality.street}, City : ${employee_info.address.city}, State : ${employee_info.address.state}, Country : ${employee_info.address.country} `,
)


console.log(`logged mobile Numbers : ${employee_info.mobiles}`);

console.log("-------------------------------------------------------------");

const newemp = JSON.parse(JSON.stringify(employee_info));

newemp.salary.july_month="80k";


console.log(`Original Object Salary ==> ${employee_info.salary.july_month}`)
console.log(` Cloned Object Salary ==> ${newemp.salary.july_month} `)





const clonedobj = JSON.parse(JSON.stringify(employee_info));
clonedobj.country="United Kingdom";

console.log(` Original object country : ${employee_info.address.country}`);

console.log(` cloned object country : ${clonedobj.country}`);




