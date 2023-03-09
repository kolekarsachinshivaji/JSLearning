let professor={
    name: "Mohit Sharma",
    id: 1234,
    age: 40,
    city: "Sangola",
    collegeName: "Sangola College Sangola",
    dipartment: "Computer Science",
    degrees:{
        engineering:"CSC",
        PHD: "Adv Computing",
    },
    certificate: ['Haker Rank Participation','Certificate in IFE course','Certificate in Adv Programing'],
    show: function() {
        // console.log("teachers total degrees are",this.degrees);
    }

}
console.log("teachers degrees are",professor.degrees);
//add new properties experience 14 yaers
professor.totalExperoence="14 Years"
console.log("Added new property is total experience",professor.totalExperoence);
console.log(professor);
console.log("modified city value Sangola to pune");
professor.city="pune"
console.log(professor);
professor.certificate[professor.certificate.push("Oracle Certified")];
console.log("Added one New Certificate Athe end od Array==>",professor.certificate);
console.log("The last element of Array Certificate is:",professor.certificate[professor.certificate.length-1]);

