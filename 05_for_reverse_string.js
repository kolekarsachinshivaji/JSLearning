


var reverseString = function(str){
var Reverse = ""
for (let index = str.length-1; index>=0; index--) {
    var charAt = str.charAt(index);
    Reverse = Reverse + charAt;
}
return Reverse;

}
var result = reverseString("Do it anyhow");
console.log(`Reverse String is: ${result}`);





var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);
  

var str = "i am Angular hamp";
for (let index = 0; index<=str.length; index++) {
    
    
}







var a = function(str){
    var reverse=""
for (let index = str.length-1; index>=0; index--) {
    
    var b = str.charAt(index);
    reverse= reverse + b;
    
}
return reverse;
}
var result = a("sachin");
console.log(result);










var  sachin = function(params) {
   var reverse=""
    for (let index = params.length-1; index >=0; index--) {
      
     var a =  params.charAt(index);
if (a==" ") {
    break;
}
        reverse = reverse + a;
    }

return reverse;

}
var result = sachin("virat kohali");
console.log(result);



var reverseString = function(str){
    var Reverse=[];
    var j=0;
    for (let index = str.length-1; index>=0; index--) {
      Reverse[j]=str[index];
      j++; 
    }
    console.log(Reverse);
    
    
    }
    reverseString("Sachin Do it anyhow");
    