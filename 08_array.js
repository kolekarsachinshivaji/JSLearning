
var arrayOfNumbers = [0,2,5,4,6,7,4,8];
console.log(arrayOfNumbers);
//console.table(arrayOfNumbers);
const totalArrayElements = arrayOfNumbers.length
console.log(`Total no of elements avalilable in arry is: ${totalArrayElements}`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`is 8 Available: ${is8Available}`);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`index of 8 element is : ${indexOf8}`);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`index of 100 element is : ${indexOf100}`);

var arrayOfNumbers =[10,20,25,15,30,45];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value At Index 2 is :${valueAtIndex2}`);

arrayOfNumbers[3]=35;
console.log(arrayOfNumbers);

arrayOfNumbers[1]=50;
console.log(arrayOfNumbers);

console.log("Adding element in the last using push()");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);

console.log("Adding element in the First using unshift()");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

console.log("Removing element in the last using pop()");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

console.log("Removing element in the First using shift()");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

console.log("===slice(StartIndex)===");
const arrayFromIndex3= arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("===slice(StartIndex,endIndex)===");
const startEnd = arrayOfNumbers.slice(2,5);
console.log(arrayOfNumbers);

console.log("===splice(StartIndex)===");
const splicedArray = arrayOfNumbers.splice(3);
console.log(splicedArray);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);

var arrayOfNumbers3 = [ 10, 20, 25, 15, 40, 45];
const spliced = arrayOfNumbers3.splice(1,1);
console.log(spliced);



// const removeElement = arrayOfNumbers.splice(3,1);
// console.log(removeElement);
var arrayOfNumbers =[10,20,25,15,40,45];
const removeElement = arrayOfNumbers.splice(1,2);
console.log(removeElement);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====splice() to replace one elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);


console.log("------------------------------------------------------------------------------------");

let arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
 
const firstElement = arraySeasonalFruits[0];
console.log(`First Element : ${firstElement}`);

const lastElement = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`Last Element : ${lastElement}`);

console.log("---------------------------------------------------------------------------------");
console.log(arraySeasonalFruits);
console.log("**********added papaya before banana*************");
arraySeasonalFruits.unshift("papaya");
console.log(arraySeasonalFruits);

console.log("****************Remove Mango*****************");

 arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(arraySeasonalFruits);
 console.log("___Removed___");
const removeMango = arraySeasonalFruits.splice(3,1);

console.log(arraySeasonalFruits);

console.log("---------Insert `Pineapple` last position--------");
arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
console.log("___Added___");
arraySeasonalFruits.push("Pineapple")
console.log(arraySeasonalFruits);

arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
