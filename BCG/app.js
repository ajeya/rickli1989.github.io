let [a, b, ...args] = process.argv;

const DAYS_IN_MONTH = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10:31,
  11:30,
  12:31
};

//validate if the input date is separated by /
export const validateDates = (START_DATE, END_DATE) => {
  let start_parts = START_DATE.split('/');
  let end_parts = END_DATE.split('/');
  if(start_parts.length != 3 && end_parts.length != 3){
    return "INVALID_START_END_DATA";
  }else if(start_parts.length != 3 || end_parts.length != 3){
    if(start_parts.length != 3){
      return "INVALID_START_DATE";
    }else{
      return "INVALID_END_DATE";
    }
  }else{
    if(start_parts[2] < 1901 || end_parts[2] > 2999)
      return "OUT_OF_RANGE"
    return "VALID";
  }
}

//check if it is leapyear
export const isLeapYear = year => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)

//calculate how many days from start date to end of start date year
export const calculateDaysInStartYear = (start_day, start_month, start_year) => {
  let totalDays = 0;

  for(let i = parseInt(start_month)+1; i <= 12; i++){
    if(i == 2){
      if(isLeapYear(start_year))
        totalDays += 29;
      else
        totalDays += 28;
    }else
      totalDays += DAYS_IN_MONTH[i];
  }

  totalDays += start_month == 2 ? ( isLeapYear(start_year) ? 29 - start_day : 28 - start_day ) : (DAYS_IN_MONTH[start_month] - start_day)
  return totalDays;
}

//calculate how many days from end date to end of end date year
export const calculateDaysInEndYear = (end_day, end_month, end_year) => {
  let totalDays = 0;

  for(let i = parseInt(end_month)+1; i <= 12; i++){
    if(i == 2){
      if(isLeapYear(end_year))
        totalDays += 29;
      else
        totalDays += 28;
    }else
      totalDays += DAYS_IN_MONTH[i];
  }

  totalDays += end_month == 2 ? ( isLeapYear(end_year) ? 29 - end_day : 28 - end_day ) : (DAYS_IN_MONTH[end_month] - end_day)
  return totalDays;
}

//calculate how many days between start year and end year
export const calculateDaysBetween = (start_year, end_year) => {
  let totalDays = 0;
  for(let i = parseInt(start_year)+1; i < parseInt(end_year); i++){
    if(isLeapYear(i))
      totalDays += 366;
    else
      totalDays += 365;
  }
  return totalDays;
}

//calculate how many days elapsed in between start date and end date
export const calculateElapseDays = (START_DATE, END_DATE) => {
  if(START_DATE == END_DATE)
    return 0;
  var [start_day, start_month, start_year] = START_DATE.split('/');
  var [end_day, end_month, end_year] = END_DATE.split('/');
  if(parseInt(start_year) > parseInt(end_year) || (parseInt(start_year) == parseInt(end_year) && parseInt(start_month, 10) > parseInt(end_month, 10)) || (parseInt(start_year) == parseInt(end_year) && parseInt(start_month, 10) == parseInt(end_month, 10) && parseInt(start_day,10) > parseInt(end_day,10))){
    var [start_day, start_month, start_year] = END_DATE.split('/');
    var [end_day, end_month, end_year] = START_DATE.split('/');
  }

  var howManyDaysInStartYear = calculateDaysInStartYear(parseInt(start_day,10), parseInt(start_month, 10), start_year);
  var howManyDaysInEndYear = calculateDaysInStartYear(parseInt(end_day,10), parseInt(end_month, 10), end_year);
  var howManyDaysBetween = calculateDaysBetween(start_year, end_year);

  if(start_year == end_year){
    return howManyDaysInStartYear - howManyDaysInEndYear - 1;
  }else{
    return howManyDaysBetween + howManyDaysInStartYear + (isLeapYear(end_year) ? (366 - howManyDaysInEndYear) : (365 - howManyDaysInEndYear)) - 1;
  }
}


if(args.length != 2){
  console.error("It only accepts two parameters");
} else{
  let START_DATE = args[0];
  let END_DATE = args[1];
  let result = validateDates(START_DATE, END_DATE);
  if(result == 'VALID'){
    var totalDays = calculateElapseDays(START_DATE, END_DATE);
    console.log('The number of full days elapsed in between ' + START_DATE + ' and ' +  END_DATE + ' is ' + totalDays);
  }else{
      if(result == "INVALID_START_END_DATA")
        console.error('Invalid start date and end data');
      if(result == "INVALID_START_DATE")
        console.error('Invalid start date');
      if(result == "INVALID_END_DATE")
        console.error('Invalid end date');
      if(result == "OUT_OF_RANGE")
        console.error('The date is out of range, please select between 01/01/1901 and 31/12/2999');
    }
  }



