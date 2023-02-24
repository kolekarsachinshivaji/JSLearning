
function interview(gradScore,hscScore,sscScore,candidateName){
var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Coongrates ${candidateName} you are Eligible for TCS Interview` : `Unfortunately ${candidateName} Not Eligible for Interview`;
console.log(result);

}
interview(80,86,90,"Sachin");
interview(70,65,55,"Kuldeep");
interview(60,79,88,"Akash");
