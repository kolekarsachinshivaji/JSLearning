
function stringHandson(){

    var string="   Hey you are doing good,keep it up    ";
    console.log("printed the string as it is :",string);

    var stringLength=string.length;
    console.log("Length of string:",stringLength);

    var removeSpace=string.trim();
    console.log("After trim:",removeSpace);
    var trimLength = removeSpace.length;
    console.log("length of string After Removing space:",trimLength);

    var result = stringLength-trimLength;
    console.log("total number of Removed space:",result);

    var firstChar = removeSpace.charAt(0);
    var lastChar = removeSpace.charAt(removeSpace.length-1);
    console.log("First char of string and Last char of string:",firstChar,lastChar);

   var words = removeSpace.split(" ");
   

   console.log("Total number of words:",words.length);

   var indexNumber = removeSpace.indexOf("good");
   console.log("index number of good is:",indexNumber);

  var sub = removeSpace.substring(22);
   console.log("index 22 using substring:",sub);

   var slice= removeSpace.slice(22);
   console.log("index 22 using slice:",slice);

   var a = removeSpace.includes("up");
console.log("string end with up:",a);

var b = removeSpace.includes("Hey");
console.log("string start with Hey:",b);


}
stringHandson();