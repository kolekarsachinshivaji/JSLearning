    console.log("______step1__________");
    const array = [20,11,40,25,37,49,9,90,60,2,19];
    const numbers = array.filter((element)=>element>50);
    console.log("Numbers are greater than 50:",numbers);
    console.log("______step2__________");
    const even = array.filter(element=>element%2==0);
    console.log("even numbers:",even);
    console.log("______step3__________");
    const odd = array.filter(element=>element%2!=0);
    console.log("Odd Numbers:",odd);
    console.log("______step4__________");
    const multipleOfFive = array.filter(element=>element%5==0);
    console.log(`Multiple Of Five:`,multipleOfFive);
    console.log("______step5__________");
    const number = array.filter(element=>element>20&&element<50);
    console.log(`Numbers between 20 and 50:`,number);