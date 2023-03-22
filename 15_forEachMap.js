const mapOfNumbers  = new Map();
mapOfNumbers.set("one",1);
mapOfNumbers.set("Two",2);
mapOfNumbers.set("Three",3);
mapOfNumbers.set("one",11);
mapOfNumbers.set("Five",5);
mapOfNumbers.set("Six",6);

mapOfNumbers.forEach((key,value)=>{
console.log(key,value);
} );