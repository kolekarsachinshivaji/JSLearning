
var check_leap_year = function (leapYear){
if (leapYear=="number" || leapYear == undefined || leapYear==null||isNaN(leapYear)) {
    console.log(`Please enter valid data`);
} else if(leapYear%4==0 && leapYear%100!=0 || leapYear%400==0){
    console.log(`${leapYear} is Leap year`);
}
else{
    console.log(`${leapYear} is not Leap Year`);
}

}
check_leap_year (2020);
check_leap_year (1999);
check_leap_year (1600);
check_leap_year (2022);
check_leap_year (1945);
check_leap_year (null);
check_leap_year ("Twenty Twenty");
check_leap_year (undefined);
check_leap_year (NaN);
check_leap_year (1750);