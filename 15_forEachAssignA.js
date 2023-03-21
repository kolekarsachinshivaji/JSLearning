const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log("_____step1__________");
arrayNumbers.forEach((elements,index)=>{
    console.log(`Index No: ${index} Eelements: ${elements}`);
})
console.log("_____step2__________");
arrayNumbers.forEach(elements=>{
    if(elements>=0){
        console.log(elements);
    }
})
console.log("_____step3__________");
let arr=[];
arrayNumbers.forEach((elements) =>{
   if (elements<0) {
   arr.push(elements)
}
})
console.log(arr);

console.log("_____step4__________");
arrayNumbers.forEach(elements=>{
    if (elements%2==0) {
        console.log(elements);
    }
})
console.log("_____step5__________");
let sum=0;
arrayNumbers.forEach(elements=>{
    
    sum=sum+elements;
    
})
console.log(sum);
console.log("_____step6__________");
arrayNumbers.forEach((elements,index)=>{
    if (index%2==0) {
        console.log(elements);
    }
})