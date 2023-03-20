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

const arrayemp = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinay,
  emp_mahi,
];
console.log("_____step1___________");
for (const element of arrayemp) {
  if (element.emp_company == "TCS") {
    console.log(
      `Employee Name : ${element.emp_name} and Company ${element.emp_company}`
    );
  }
}
console.log(" ");
console.log("_____step2___________");
for (const element of arrayemp) {
  if (element.emp_dept == "Finance") {
    console.log(
      `Employee Name : ${element.emp_name} and Company ${element.emp_dept}`
    );
  }
}
console.log(" ");
console.log("_____step3___________");

for (const element of arrayemp) {
  const empname = element.emp_name;
  if (empname.charAt(0) == "r") {
    console.log(
      `Employee Name : ${element.emp_name} Id: ${element.emp_id} Depeartment: ${element.emp_dept} Salary: ${element.emp_salary} Company: ${element.emp_company}`
    );
  }
}

console.log(" ");
console.log("_____step4___________");
for (const element of arrayemp) {
  const empsalary = element.emp_salary;
  if (empsalary > 75000) {
    console.log(
      `Employee Name : ${element.emp_name} Company: ${element.emp_company} Salary: ${element.emp_salary}`
    );
  }
}

console.log(" ");
console.log("_____step5___________");
for (const element of arrayemp) {
  const empsalary = element.emp_salary;
  const emp_dept = element.emp_dept;

  if (empsalary >= 75000 && emp_dept == "IT") {
    console.log(
      `Employee Name : ${element.emp_name} Id: ${element.emp_id} Depeartment: ${element.emp_dept} Salary: ${element.emp_salary} Company: ${element.emp_company}`
    );
  }
}

console.log(" ");
console.log("_____step6___________");
for (const element of arrayemp) {
  const comp = element.emp_company;
  if (comp == "Infy") {
    console.log(
      `Employee Name : ${element.emp_name} Id: ${element.emp_id} Depeartment: ${element.emp_dept} Salary: ${element.emp_salary} Company: ${element.emp_company}`
    );
  }
}
