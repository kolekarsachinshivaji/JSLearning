const array =[3,4,5,8,90,50,1,44,78,51];
const sum=array.reduce((runningTotal,value)=>{
   return runningTotal+value
})
console.log(sum);


const even = array.filter((element)=>{
  return  element%2==0;
    
})
console.log(even);
const sumeven =even.reduce((running,value)=>{
return running+value
});
console.log(sumeven);

console.log("find thhe numbers which are multiple of three and return its addtion");

const sum2=array.filter((element)=>{
    return element%3==0
}).reduce((runningtotal,value)=>{
    return runningtotal+value
})
console.log(sum2);