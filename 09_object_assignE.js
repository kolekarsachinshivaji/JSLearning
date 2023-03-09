let sbiBank={
    bankName:"State Bank Of India",
    location: "Pune",
    accountNo: 10203040,
    ifsc: "SBIP00267",
    intrestRate: "7%",

    showDetailsofSbiBank:function () {
        console.log(`bankName-${this.bankName}, location-${this.location}, accountNo-${this.accountNo}, ifsc-${this.ifsc}, intrestRate-${this.intrestRate}`);
    
    },
     axisBank:{
        bankName:"Axis Bank",
        location: "Pune",
        accountNo: 11121516,
        ifsc: "AXIS001516",
        intrestRate: "9%",
        showDetailsofSbiBank:function () {
            console.log(`bankName-${this.bankName}, location-${this.location}, accountNo-${this.accountNo}, ifsc-${this.ifsc}, intrestRate-${this.intrestRate}`);
          
        },


    },
    hdfcBank:{
        bankName:"HDFC Bank",
        location: "Pune",
        accountNo: 64325763547,
        ifsc: "HDFCS001112",
        intrestRate: "8%",
        showDetailsofSbiBank:function () {
            console.log(`bankName-${this.bankName}, location-${this.location}, accountNo-${this.accountNo}, ifsc-${this.ifsc}, intrestRate-${this.intrestRate}`);
        }
        },
        yesBank:{
            bankName:"Yes Bank",
            location: "Pune",
            accountNo: 4647232623,
            ifsc: "YES002122",
            intrestRate: "11%",
            showDetailsofSbiBank:function () {
                console.log(`bankName-${this.bankName}, location-${this.location}, accountNo-${this.accountNo}, ifsc-${this.ifsc}, intrestRate-${this.intrestRate}`);
              
            },
    
        }
    
}
sbiBank.showDetailsofSbiBank();
sbiBank.axisBank.showDetailsofSbiBank();
sbiBank.hdfcBank.showDetailsofSbiBank();
sbiBank.yesBank.showDetailsofSbiBank();