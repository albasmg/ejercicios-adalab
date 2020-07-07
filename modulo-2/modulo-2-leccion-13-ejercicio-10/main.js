const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidenceUser = users.find((user) => user.pin === 5232);
console.log(incidenceUser);

const incidenceUserPosition = users.findIndex((user) => user.pin === 5232);
console.log(incidenceUserPosition);

const finalUsers = users.splice(3, 1);
console.log(users);
