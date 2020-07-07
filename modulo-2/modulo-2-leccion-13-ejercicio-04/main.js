const pins = [2389, 2384, 2837, 5232, 8998];

const pairPins = pins.filter((number) => number % 2 === 0);

console.log(pairPins);
