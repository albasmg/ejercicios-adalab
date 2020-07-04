'use strict';

const adalabers = [
  {
    name: 'Maria',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucia',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocio',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
];

function countAdalabers() {
  return adalabers.length;
}

console.log(countAdalabers());

function getAverageAge() {
  let adalabersAge = 0;

  for (let i = 0; i < adalabers.length; i++) {
    adalabersAge = adalabersAge + adalabers[i].age;
  }
  return adalabersAge / adalabers.length;
}

console.log(getAverageAge());

function getTheYoungest() {
  let minAge = adalabers[0].age;
  let youngestAdalaber = '';

  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age < minAge) {
      minAge = adalabers[i].age;
      youngestAdalaber = adalabers[i].name;
    }
  }
  return youngestAdalaber;
}

console.log(getTheYoungest());

function getNumberOfDesigners() {
  let numberOfDesigners = 0;

  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].job === 'diseñadora') {
      numberOfDesigners++;
    }
  }

  return numberOfDesigners;
}

console.log(getNumberOfDesigners());
