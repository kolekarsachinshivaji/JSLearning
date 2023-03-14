const bankSbi ={
    name : "State Bank Of India",
    accountNo : "1234567",
    ifscCode : "SBI000012",
    branchCode : "PUN1234"
};
const bankLocation ={
    street : "Mumbai Highway",
    city : "Pune",
    pin : 411052
};

console.log("_____Cloned by  Object.assign operator_________");
const newObj = Object.assign(bankSbi);
console.log(newObj);
const clonedObject = Object.assign(bankLocation);
console.log(clonedObject);
console.log("_____Cloned by Spread operator operator_________");
const obj = {...bankSbi};
console.log(obj);
const clonedObj = {...bankLocation};
console.log(clonedObj);


const rateOfIntrest ={

homeLoanIntrest : "14%",
PersonalLoanIntrest : "10%",
dueintrest : "9%"
};



const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfIntrest);
console.table(sbiDetails);

console.log("__________traversed Object Using Loop__________");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
    }
}






