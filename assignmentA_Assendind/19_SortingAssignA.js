const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log("______Reverse_Array______");
const reverseArray = arrayRollNumbers.reverse();
console.log(reverseArray);
console.log("______Array_Sorting_Issue____");
const issu=arrayRollNumbers.sort()
console.log(issu);
console.log("______Sorted_Array_____");
const assendingOrder = arrayRollNumbers.sort((a,b)=>{
  return a>b ?1:-1;
})
console.log(assendingOrder);
console.log("______Gretest_No_From_Array___");
const max=assendingOrder[assendingOrder.length-1]
//let t=arrayRollNumbers[0];
// for (let i = 0; i < arrayRollNumbers.length; i++) {
//   if (arrayRollNumbers[i]>t) {
//     t=arrayRollNumbers[i]
//   }
    
//   }
//   console.log(t);
console.log(max);
console.log("______Smallest_No_From_Array______");
const smallestNo=assendingOrder[0]
console.log(smallestNo);
//let t=arrayRollNumbers[0];
//for (let i = 0; i < arrayRollNumbers.length; i++) {
  // if (arrayRollNumbers[i]<t) {
  //   t=arrayRollNumbers[i]
  // }
    
  // }
  // console.log(t);
console.log("______Duplicate_No_Removed_From_Array______");

// for (let i = 0; i < arrayRollNumbers.length; i++) {
//   let k=0;
//   for (let j = i+1; j < arrayRollNumbers.length; j++) {
    
//     if (arrayRollNumbers[i]==arrayRollNumbers[j]) {
//       k++;
//     }
//   }
//   if (k==0) {
//     console.log(arrayRollNumbers[i]);
//   }
// }


const newSet=new Set()
for (let i = 0; i < arrayRollNumbers.length; i++) {
  newSet.add(arrayRollNumbers[i]);
  
}
console.log(newSet);