function primeNumbers(startValue,totalprime) {
   let count =0;
   let num = startValue;
   const arrayOfPrime = [];
   while (count<+totalprime) {
      let isPrimeNum = isPrimeNumber(num);
      if (isPrimeNumber) {
         count++;
         arrayOfPrime.push(num);
      }
      num++;
   }
console.log(arrayOfPrime);
}

 function isPrimeNumber(num) {
   
for (let index = 2; index <= num; index++) {
  if (num%index==0) {
   return true;
   }
   
}
return false;


 }
 isPrimeNumber(10,50)



