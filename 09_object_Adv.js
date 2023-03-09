const employee ={
    id:1234,
    name:"Elon Musk",
    country: "us",
    city: "silicon Valley"

}
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
    }
}
const keysOfemployee = Object.keys(employee);
console.log(keysOfemployee);

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);