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

 const empMap =new Map()

 empMap.set(1,emp_anil);
 empMap.set(2,emp_radha);
 empMap.set(3,emp_rishi);
 empMap.set(4,emp_sonali);
 empMap.set(5,emp_monika);
 empMap.set(6,emp_vinay);
 empMap.set(7,emp_mahi);

 empMap.forEach( (obj,key)=>{
console.log(`${key} ===> Id ${obj.emp_id} Name: ${obj.emp_name} Department: ${obj.emp_dept} salary: ${obj.emp_salary} Company: ${obj.emp_company}`);
 })