const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("*********Added 10 in each element of Array***********");
const newarr = arrayNumbers.map((element)=>{
return element+10;

})
console.log(newarr);
console.log("*********Square of Element***********");
const square = arrayNumbers.map((element)=>{
return element*element;
})
console.log(square);

console.log("*******Added index value of element*********");

const arr= arrayNumbers.map((element,index)=>{

return element+index;
});
console.log(arr);