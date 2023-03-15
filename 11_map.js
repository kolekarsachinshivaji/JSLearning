const mapOfNumbers  = new Map();
mapOfNumbers.set("one",1);
mapOfNumbers.set("Two",2);
mapOfNumbers.set("Three",3);
mapOfNumbers.set("one",11);
mapOfNumbers.set("Five",5);
mapOfNumbers.set("Six",6);
console.log(mapOfNumbers.size);

console.log(mapOfNumbers.get("Two"));
console.log(mapOfNumbers.get("Three"));
console.log(mapOfNumbers.get("one"));

mapOfNumbers.delete("Two");
console.table(mapOfNumbers);
console.log(mapOfNumbers.has("one"));

console.log(mapOfNumbers.has("two"));
const keysOfMap = mapOfNumbers.keys();
// console.log(keysOfMap);

for (const key of keysOfMap) {
    console.log(key,mapOfNumbers.get(key));
}