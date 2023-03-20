console.log("_____Step 1______");
let arrow = () => {
  console.log("Good Morning, Today is Monday");
};
arrow();
console.log("_____Step 2______");
let arrow2 = (num1, num2, num3 = 1) => {
  const result = num1 * num2 * num3;
  console.log(result);
};
arrow2(5, 5, 2);
arrow2(10, 4);

console.log("_____Step 3______");

let arrow3 = (arg1, arg2, arg3, arg4, arg5) => {
  return arg1 + arg2 + arg3 + arg4 + arg5;
};
let result = arrow3(100, 100, 200, 349, 756);
console.log(`Return The Addition of Passed 5 arguments is: ${result}`);
let result2 = arrow3("I am", " learning", " ES6", " Features", " in depth");
console.log(`Return The concatination of Passed 5 string is: ${result2}`);
