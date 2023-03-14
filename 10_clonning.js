// const person = {
//     fullName : "Ms Dhoni",
//     age : 38
// }

// Object.freeze(person);
// person.city = "Ranchi";

// let player1 = person;

// console.log(player1);

// n1 = 100
// n2 = n1
// console.log(n2);
// n1 = 200
// console.log(n2);

// let s1 = 'Hey JS'
// let s2 = s1
// console.log(s2);

// let  b1 = true
// let b2 = b1 
// console.log(b2);



// let n1 = 100;// 200
// let n2 = n1;  // Deep clone
// console.log(n2);// 100
// n1 = 200;
// console.log(n2);//

// let as1 = "Hey JS";
// let as2 = s1; // Deep clone

// let ab1 = true;
// let ab2 = b1; // Deep clone
"--------------------------------------------------------------------------------------------------------------------"
const person = {
    fullName: "MS Dhoni",
    age : 38
}
const player = person; // Shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);


console.log("Deep clone using spread operator");
const newPlayer = { ...person }; // Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person ==> ${person.fullName} ${person.age}`);


console.log("Deep clone using spread String.json()");
const bank = {
    bankName: "SBI Bank",
    accountNo: 3456789,
    bankAddress: {
        city: "Banglore",
        PIN: 5556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 999999;
console.log(`bank==> ${bank.bankAddress.PIN}`);// 
console.log(`newBank==> ${newBank.bankAddress.PIN}`);//