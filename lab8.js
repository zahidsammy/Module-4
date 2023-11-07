//Calculate the number of days between your birthdate and the current date:

const birthdate = moment('1990-01-01'); // Replace with your birthdate
const currentDate = moment();
const daysDifference = currentDate.diff(birthdate, 'days');
console.log('Days difference:', daysDifference);


//Display the number of years, months, and days between your birthdate and the current date:

const years = currentDate.diff(birthdate, 'years');
const months = currentDate.diff(birthdate, 'months') % 12;
const days = currentDate.diff(birthdate, 'days') % 30; // An approximate value for months
console.log(`${years} years, ${months} months, and ${days} days`);


//Given two dates, display the date closest to the current date:
const date1 = moment('2023-05-15'); // Replace with the first date
const date2 = moment('2023-07-20'); // Replace with the second date

const closestDate = currentDate.diff(date1) < currentDate.diff(date2) ? date1 : date2;
console.log('Closest date:', closestDate.format('YYYY-MM-DD'));


//Given two dates, display whether the first date is before or after the second date:
if (date1.isBefore(date2)) {
    console.log('Date 1 is before Date 2');
} else if (date1.isAfter(date2)) {
    console.log('Date 1 is after Date 2');
} else {
    console.log('Date 1 and Date 2 are the same');
}


//Display the current time in London:

const londonTime = moment().tz('Europe/London');
console.log('Current time in London:', londonTime.format('YYYY-MM-DD HH:mm:ss'));