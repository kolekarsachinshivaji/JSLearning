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
const sbi_bank = new Bank("SBI","Pune",123456789,"SBI001","11%");
const icic_bank = new Bank("ICIC Bank","Pune",543212324,"ICIC002","12%");
const kotak_bank = new Bank("KOTAk Bank","Pune",987654365,"SBI001","7%");
const hdfc_bank = new Bank("HDFC Bank","Pune",10203055,"AXIS001","12%");
const panjab_bank = new Bank("PANJAB Bank","Pune",41424344,"SBI001","9%");

const mapOfBank = new Map();
mapOfBank.set("AXIS01",axis_bank);
mapOfBank.set("SBI02",sbi_bank);
mapOfBank.set("ICIC03",icic_bank);
mapOfBank.set("KOTAK04",kotak_bank);
mapOfBank.set("HDFC05",hdfc_bank);
mapOfBank.set("PANJAB06",panjab_bank);

console.log("_____________Traversed Map Objet______________");
const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) {
  const element = mapOfBank.get(key);
  console.log(`Bank Name: ${element.bankName}      AcountNo: ${element.accountNo}           Intrestrate: ${element.intrestRate}`);
}
   









