const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// Ejercicio 03

// const greetings = users.map((user) => {
//   if (user.isPremium) {
//     return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
//   } else {
//     return `Bienvenida ${user.name}`;
//   }
// });

const greetings = users.map((user) =>
  user.isPremium
    ? `Bienvenida ${user.name}. Gracias por confiar en nosotros`
    : `Bienvenida ${user.name}`
);

console.log(greetings);

// Ejercicio 04

const premiumUsers = users.filter((user) => user.isPremium);

console.log(premiumUsers);
