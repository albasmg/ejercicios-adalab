const numbers = [1, 5, 6, 7, 8];
let numbersAddition = 0;

function addNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    numbersAddition += numbers[i];
  }
  return numbersAddition;
}

function calculateAverage() {
  return numbersAddition / numbers.length;
}

addNumbers();
calculateAverage();

console.log(calculateAverage());
