const hoursInADay = 24;
const daysInAYear = 365;
const hoursInAYear = hoursInADay * daysInAYear;
const age = 24;
const hoursLived = age * hoursInAYear;

console.log(hoursLived);

document.querySelector(".hoursLived").innerHTML = hoursLived;
