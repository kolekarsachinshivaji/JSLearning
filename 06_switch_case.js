function weekday(day) {
  switch (day) {
    case 1:
      console.log(`day of the week is ${day}: Monday`);
      break;
    case 2:
      console.log(`day of the week is ${day}:Tuesday`);
      break;
    case 3:
      console.log(`day of the week is ${day}: Wed`);
      break;
    case 4:
      console.log(`day of the week is ${day}: Thursday`);
      break;
    case 5:
      console.log(`day of the week is ${day}: Friday`);
      break;
    case 6:
      console.log(`day of the week is ${day}: Saturday`);
      break;
    case 6:
      console.log(`day of the week is ${day}: Monday`);
      break;
    
    case 7:
      console.log(`day of the week is ${day}: Sunday`);
      break;
    default:
        console.log(`invalid day ${day} input valid data`);
      break;
  }
}
weekday(7); //1 to 7
