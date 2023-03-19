function stringPalindrome(str) {
    let reverse = "";
for (let index = str.length; index >=0 ; index--) {
let  char=str.charAt(index);
reverse=reverse+char
    
}
if(str==reverse){
console.log(`${str} This String is Palindrome`);
}
else{
console.log(`${str} This String is Not Palindrome`);
}


}
stringPalindrome("kanak");