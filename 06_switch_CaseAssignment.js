function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month Number ${monthNumber} is january `);
      break;
    case 2:
      console.log(`Month Number ${monthNumber} is February `);
      break;
    case 3:
      console.log(`Month Number ${monthNumber} is March `);
      break;
    case 4:
      console.log(`Month Number ${monthNumber} is April `);
      break;
    case 5:
      console.log(`Month Number ${monthNumber} is May `);
      break;
    case 6:
      console.log(`Month Number ${monthNumber} is June `);
      break;
    case 7:
      console.log(`Month Number ${monthNumber} is july `);
      break;
    case 8:
      console.log(`Month Number ${monthNumber} is August `);
      break;
    case 9:
      console.log(`Month Number ${monthNumber} is September `);
      break;
    case 10:
      console.log(`Month Number ${monthNumber} is Octomber `);
      break;
    case 11:
      console.log(`Month Number ${monthNumber} is November `);
      break;
    case 12:
      console.log(`Month Number ${monthNumber} is December `);
      break;
    default: console.log(`Enter the valid Month Number`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
