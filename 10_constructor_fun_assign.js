function Bank(bankName,location,ifcsCode,branchcode) {
    this.bankName=bankName;
    this.location=location;
    this.ifcsCode=ifcsCode;
    this.branchcode=branchcode;
    this.show=function () {
        console.log(`Bank Name: ${this.bankName} Bank Location: ${this.location} IFSC Code: ${this.ifcsCode} Baranch Code: ${this.branchcode}`);
    }

}
Bank.prototype.openTime ="9 AM IST";
Bank.prototype.closeTime ="6 pM IST";

let yesBank = new Bank("Yes Bank","Pune","Yes00182","PUN0014");
yesBank.show();
console.log(`YES Bank open Time ${yesBank.openTime}`);
console.log(`YES Bank close Time ${yesBank.closeTime}`);
let sbi = new Bank("SBI Bank","Sangola","SBI00112","PAN0012");
sbi.show();
let mahBank = new Bank("Maharashatra Bank","Solapur","MAH00102","MAH0022");
mahBank.show();
let axis = new Bank("AXIS Bank","Pandharpur","AXIS00192","PAN0021");
axis.show();


console.log("--------------------------");
console.log(`SBI Bank Bank open Time ${sbi.openTime}`);
console.log(`SBI Bank Bank close Time ${sbi.closeTime}`);
console.log("-------------------------------------");
console.log(`AXIS Bank open Time ${axis.openTime}`);
console.log(`AXIS Bank close Time ${axis.closeTime}`);
console.log("---------------------------------------");



console.log(`Bank Name ${yesBank.bankName} Branchcode ${yesBank.branchcode} And Open time is ${yesBank.openTime}`);