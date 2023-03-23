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

const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinay,
  emp_mahi,
];
console.log("_________Step1__________");
const newArray = array.filter((element) => {
  if (element.emp_company == "TCS") {
    console.log(
      `EmployeeName: ${element.emp_name} Company Name: ${element.emp_company}`
    );
  }
});

console.log("_________Step2__________");
let avr = 0,
  s = 0;
array.filter((element) => {
  if (element.emp_company == "Wipro") {
    avr = avr + element.emp_salary;
    s++;
  }
});
console.log(`Avrage salary Employees from Wipro: ${avr / s}`);
console.log("_________Step3__________");
let sum = 0,
  k = 0;
const a = array.filter((element) => {
  if (element.emp_company == "Wipro" || element.emp_company == "Infy") {
    sum = sum + element.emp_salary;
    k++;
  }
});
console.log(`Avrage salary Employees from Wipro and Infy:${sum / k}`);
