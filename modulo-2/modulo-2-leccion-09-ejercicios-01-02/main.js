// let get100numbers = [];
let numbers = [];

function get100numbers() {
  for (i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
  return numbers;
}

function get100numbersReverse() {
  let numbersReverse = get100numbers().reverse();
  console.log(numbersReverse);
}

get100numbers();
get100numbersReverse();

// console.log(get100numbers);

// get100numbers.reverse();

// console.log(get100numbers);
