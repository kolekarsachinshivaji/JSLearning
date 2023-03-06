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

console.log("**********Insert an element-`Dragon fruit` Before `Water Melon`***********");
arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
console.log("___Added___");
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("*********Replace element `Orange` With `Kiwi`**********");
arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(1,1,"kiwi")
console.log("___Replaced___");
console.log(arraySeasonalFruits);

console.log("*********Log the elements starting from index 1 to 4**********");
arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
console.log("___Loged__");
 const oneToFour =arraySeasonalFruits.slice(1,5)
console.log(oneToFour);

console.log("*********Last 3 elements log on console**********");
arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
console.log("___Loged last 3 elements__");
const lastThreeElements = arraySeasonalFruits.splice(arraySeasonalFruits.length-3)
console.log(lastThreeElements);