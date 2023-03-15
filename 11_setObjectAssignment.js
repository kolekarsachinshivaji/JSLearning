class Bank{
    constructor(bankName,location,accountNo,ifsc,intrestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.intrestRate=intrestRate;

    }
   
}
const axis_bank = new Bank("Axis Bank","Pune",123457711,"AXIS001","10%");
const sbi_bank = new Bank("State Bank Of India","Pune",123456789,"SBI001","11%");
const icic_bank = new Bank("ICIC Bank","Pune",543212324,"ICIC002","12%");
const kotak_bank = new Bank("KOTAk Bank","Pune",987654365,"SBI001","7%");
const hdfc_bank = new Bank("HDFC Bank","Pune",10203055,"AXIS001","12%");
const panjab_bank = new Bank("PANJAB Bank","Pune",41424344,"SBI001","9%");
console.log();
const setOfBank = new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(panjab_bank);

console.log("__________Travesed Set Object____________");

for (const bank of setOfBank) {
    console.log(`Bank Name: ${bank.bankName}   And its Location: ${bank.location}`);
}