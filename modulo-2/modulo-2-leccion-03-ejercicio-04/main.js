// const dogAge = 5;
// const dogFirstYear = 15;
// const dogSecondYear = dogFirstYear + 9;
// const followingYears = dogSecondYear + 5 * (dogAge - 2);

// if (dogAge === dogFirstYear) {
//   console.log("El perro tiene 15 años humanos");
// } else if (dogAge === 2) {
//   console.log(`El perro tiene ${dogSecondYear} años humanos`);
// } else {
//   console.log(`El perro tiene ${followingYears} años humanos`);
// }

const dogAge = 2;
let humanAge = 0;

if (dogAge >= 1) {
  humanAge = humanAge + 15;
}

if (dogAge >= 2) {
  humanAge = humanAge + 9;
}

if (dogAge >= 3) {
  humanAge = humanAge + 5 * (dogAge - 2);
}

console.log(`-> Final Result: ${humanAge}`);
