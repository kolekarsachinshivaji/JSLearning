
//WAP to print numbers 0 to 10
// let index=0;
// while (index<=10) {
//     console.log(index);
//     index ++;
// }

// var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
// var index=0;
// while (arrayOfNumbers.length) {
//     const element = arrayOfNumbers[index];
//     console.log(index);
//     index ++;
// }
console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}