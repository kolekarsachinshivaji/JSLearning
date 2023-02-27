

function interview(gradScore,hscScore,sscScore,candidateName){
if (gradScore>=70 || hscScore>=80 || sscScore>90) {
    console.log(`Congrats ${candidateName} You are Eligible for TCS Interview`);
} else {
    console.log(`${candidateName} You are Not Eligible for TCS Interview`);
}

}
interview(80,86,90,"sachin");
interview(70,65,55,"kuldeep");
interview(60,79,88,"Abhijeet");
