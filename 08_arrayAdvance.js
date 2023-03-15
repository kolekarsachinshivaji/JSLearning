
const arrayOfNames = ["Anil","Sunil","Sita","Bill","Elon"];
const result=arrayOfNames.join(":");
console.log(result);
console.log(typeof result);

console.log("Resize an Array");
arrayOfNames.length=3;
console.log(arrayOfNames.length);
console.log(arrayOfNames);

arrayOfNames.length=7;
console.table(arrayOfNames);


const array =[3,4,5,6,7,2,4,5];
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element);
};
console.log(setOfElements);

const myset = [...new Set(array)];
console.log(myset);