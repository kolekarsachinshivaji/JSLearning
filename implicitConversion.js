//numric string used with + gives string type

var result;
 result = '3' + 2;
 console.log(result);

 result = '3' + true;
 console.log(result);

 result ='3' + undefined;
  console.log(result);

  result = '3' + null;

  console.log(result);

  // implkicit boolean conversion to number

  var result;

  result = '4' - true;
  console.log(result);

  result = 4 + true;
  console.log(result);

  result = 4 + false;
  console.log(result);

  // implicit string conversion to number

  var result;

  result = '4' - '2';
  console.log(result);

  result = '4' - 2;
  console.log(result);

  result = '4' * 2;
  console.log(result);

  result = "4" / 2;
  console.log(result);

// undefined used with number,boolean or null given NaN
// arithmatic operation of un defined with number ,boolean or null gives NsN
var result;

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);

//Explicit conversion : Convert Number Strings and boolean values to numbers
// in that case we can use Number();

result = Number('324');
console.log(result);

result = Number('324e-1')
console.log(result);

//Boolean to number

result = Number(true);
console.log(result);

result = Number(false);
console.log(result);

// Explicit conversion : Invalid String to number return NaN
//if a string is an invalid number,the result will be NaN

var result;

result = Number('hello');
console.log(result);

result = Number(undefined);
console.log(result);

result = Number(NaN);
console.log(result);

//Explicit conversion string to number using + operator

var numberInString  = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;

console.log(typeof myNumber);

// Explicit conversion : number to string data type conversion using tostring() method

var myNumber = 100;
console.log(typeof myNumber);

var afterConversion = myNumber.toString();

console.log(typeof afterConversion);