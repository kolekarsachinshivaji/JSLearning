
console.log("----------if else------------------");

function maleMarriageEligibility(gender,age,boyName){
  if(gender=="Male"&&age>=21){
console.log(`Hey ${boyName} you are eligible for Marriage`);
  }else{
    console.log(`Hey ${boyName} you are NOt eligible for Marriage`);
  }
 
}
maleMarriageEligibility("Male",25,"Bilgates");
maleMarriageEligibility("Male",17,"Stew jobs");

console.log("----------------------------------------------------------------");


function femaleMarriageEligibility(gender,age,fNName){
  if(gender=="FeMale"&&age>=18){
console.log(`Congrats ${fNName} Congrats you are eligible for Marriage`);
  }else{
    console.log(`Hey ${fNName} you are NOt eligible for Marriage`);
  }
 
}
femaleMarriageEligibility("FeMale",25,"Milinda");
femaleMarriageEligibility("FeMale",17,"Jenny");