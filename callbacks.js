function doAssignment(callback) {
  //AJAY
  console.log("solving Assignment");
  console.log("Step 1 to 10 all are solved now");
  callback();
}
function copyAssignment() {
  //AJINKYA
  console.log("Thank You Ajju,let me copy Assignment");
  console.log("Ohh finally copyed assignment");
}
doAssignment(copyAssignment);

function greet() {
  console.log("Good Morning........");
}
setTimeout(greet, 4000);
function firstclass() {
  console.log("we can return function from another function");
  function innerFunction() {
    console.log("inner function");
  }
  return innerFunction;
}
let inner = firstclass();
inner();
