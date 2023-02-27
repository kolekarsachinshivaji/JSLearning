
console.log("-----------------------------Vote Eligibility------------------------------------")
function voteEligibility(age){
if (age<=0 || age>120 || age==undefined) {
  return console.log(`age ${age} is invalid Data`);
}
if (age>=18) {
  console.log(`age ${age} he is Eligible for Voting`);
} else {
  console.log(`age ${age} he is Not Eligible for Voting`);
}

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility( );
voteEligibility(null);

console.log("-----------------------------Grade Calculation------------------------------------")

function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100 || typeof marks != "number" || isNaN(marks)) {
    console.log(`Please provide the valid marks - ${marks}`);
  }
else if(marks>=90) {
  console.log(`Funtastic marks: ${marks},your Grade is A+`);
}else if(marks<35) {
  console.log(`Fail : ${marks} result fail`);
}
else if(marks>=75 && marks<90) {
  console.log(`Excellent marks : ${marks} you grade is A`);
}else if(marks>=50 && marks<75) {
  console.log(`Good marks : ${marks} you grade is B`);
}else if(marks>=35 && marks<50) {
  console.log(`marks is : ${marks} you grade is C, Need improvement`);
}


}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(0/0);
gradeCalculation(null);



























