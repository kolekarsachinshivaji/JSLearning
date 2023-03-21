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

  const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log("______Step1____________");
  arrayOfEmployee.forEach(element=>{
    const company=element.emp_company;
    if (company=="TCS") {
        console.log(`Employee Name: ${element.emp_name} Company Name: ${element.emp_company}`);
    }
  })
  console.log(" ");
  console.log("______Step2____________");
  arrayOfEmployee.forEach(element=>{
    const salary=element.emp_salary;
    if (salary>=50000) {
        console.log(`Employee Id: ${element.emp_id}Employee Name: ${element.emp_name} EmployeeDepartment: ${element.emp_dept} Employee Salary: ${element.emp_salary} Company Name: ${element.emp_company}`);
    }
  })

  console.log(" ");
  console.log("______Step3____________");
  let sum=0;
  arrayOfEmployee.forEach(element=>{
    const salary=element.emp_salary;
    sum=sum+salary;
  })
  console.log(`Sum of all EMployee salary is: ${sum}`);
  let sum1=0;
  let avrage;
  console.log("______Step4____________");
  arrayOfEmployee.forEach(element=>{
    const salary=element.emp_salary;
    sum1=sum1+salary;
     avrage=sum/arrayOfEmployee.length;

  })
  console.log(`Total Salary avrage is : ${avrage}`);

  console.log("______Step5____________");
  arrayOfEmployee.forEach(element=>{
    const empdpt =element.emp_dept;
    if (empdpt=="IT"||empdpt=="HR") {
       const sal= element.emp_salary;
       if (sal>=75000) {
        console.log(`Employee Id: ${element.emp_id}Employee Name: ${element.emp_name} EmployeeDepartment: ${element.emp_dept} Employee Salary: ${element.emp_salary} Company Name: ${element.emp_company}`);
       }
    }
  })