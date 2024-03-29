class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");
 
  const arrayEmps=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_rishi,emp_sonali,emp_vinay];

  console.log("___________Employees_From_Wipro___________________________");
arrayEmps.filter((element)=>{
    if (element.emp_company=="Wipro") {
       console.log(element); 
    }
 })
 console.log("_______________Employees__From_Department_IT__OR__HR________________");
arrayEmps.filter((element)=>{
    if (element.emp_dept=="IT"||element.emp_dept=="HR") {
        console.log(element);
    }
 });
  console.log("_______________Employees_Id__Grater_Than_50_______________________________________");

arrayEmps.filter((element)=>{
    if (element.emp_id>50) {
        console.log(element);
    }
})
console.log("_______________Employees_Names_Start_With_'A'_OR_'V'_OR_'M'_______________________________");

const a=arrayEmps.filter((employe)=>{
if (employe.emp_name.startsWith("A") || employe.emp_name.startsWith("V") || employe.emp_name.startsWith("M")) {
    console.log(employe.emp_name);
  }
})
console.log("____________Avrage_ Salary__Employees_For All__Department_____________________________");
  
let avrage=arrayEmps.filter((element)=>element.emp_salary)
let av=avrage.reduce((total,value)=>{
  return total+value.emp_salary
 },0)
 console.log(av/arrayEmps.length);
 
 console.log("____________Avrage_ Salary__Employees_From__ IT__Department_____________________________");
   
const itDpt=arrayEmps.filter(emp=>emp.emp_dept=="IT")
 
let avr=itDpt.reduce((total,value)=>{
 return total+value.emp_salary
},0)
console.log(avr/itDpt.length);
