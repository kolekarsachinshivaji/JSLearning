const array = [3,4,5,8,90,50,1];
let emptyarray=[];
array.forEach(element => {
    if(element>=50){
        emptyarray.push(element);
    }
});
console.log(emptyarray);


const arrayElements = array.filter(element=> element>=50)
console.log(arrayElements);


const evenArray = array.filter(element=>element%2==0)
console.log(evenArray);