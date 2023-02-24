function maleMarrageEligibility(gender,age,boyName){
var result = (gender=="Male" && age>=21)? `Hey ${boyName} you are Eligible for a marrage`:`Hey ${boyName} you are Not Eligible for a marrage`;
return result;
}
var res = maleMarrageEligibility("Male",25,"Bilgates");
console.log(res);
var res = maleMarrageEligibility("Male",17,"stew jobs");
console.log(res);


console.log("-----------------------------------------------------------------------");

function femaleMarrageEligibility(gender,age,girlName){
var result = gender=="Female" && age>=18 ? `hey ${girlName} you are Eligibale for a marrage` :`hey ${girlName} you are Not Eligibale for a marrage`;
return result;
}
var res = femaleMarrageEligibility("Female",16,"Jenefer");
console.log(res);
var res = femaleMarrageEligibility("Female",27,"Malinda Gates");
console.log(res);
