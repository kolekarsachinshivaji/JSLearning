class Vehicle {
  constructor(vehiclename, price, color, mileage, company) {
    this.vehiclename = vehiclename;
    this.price = price;
    this.color = color;
    this.mileage = mileage;
    this.company = company;
  }
}
const swift = new Vehicle("Swift Dizer", "7Lakh", "gray", "22kmpl", "Suzuki");
console.log(swift);
const creta = new Vehicle("Creta", "19Lakh", "white", "17kmpl", "Hyundai");
console.log(creta);
const thar = new Vehicle("Thar", "20Lakh", "Black", "15kmpl", "Mahindra");
console.log(thar);
const scorpio = new Vehicle("Scorpio", "20Lakh", "white", "14kmpl", "Mahindra");
console.log(scorpio);
const fortuner = new Vehicle("Fortuner", "50Lakh", "white", "8kmpl", "Toyota");
console.log(fortuner);

class College {
  constructor(clgName, location, university, precident) {
    this.clgName = clgName;
    this.location = location;
    this.university = university;
    this.precident = precident;
  }
}

const sangolaclg = new College(
  "Sangola College Sangola",
  "Sangola",
  "Punyashloak Ahilyadevi Holkar University",
  "Baburao Gaikwad"
);

const vidnyan = new College(
  "vidnyan Mahavidhyalay  Sangola",
  "Sangola",
  "Punyashloak Ahilyadevi Holkar University",
  "Hon.Dr.Ganapatraoji Annasaheb Deshmukh"
);

const sinhgad = new College(
  "Sinhgad College  Of Engineering pune",
  "Pune",
  "Pune University",
  "M.N Navale"
);

const iicmr = new College(
  "IICMR Mca College",
  "Pune",
  "Pune University",
  "Dr Rajiv Bahl"
);

let traverseObject = function (params) {
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      const element = params[key];
      console.log(`${key} : ${element}`);
    }
  }
};
traverseObject(sangolaclg);
console.log("");
traverseObject(vidnyan);
console.log("");
traverseObject(sinhgad);
console.log("");
traverseObject(iicmr);

let isprime = function (num) {
  if (num <= 1) {
    `${num} is Not prime`;
  }

  
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      `${num} is Not prime`;
    }
  }

  return `${num} is prime`;
};
var result = isprime(11);
console.log("  ");
console.log(result);
