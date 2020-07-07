const numbers = [1, 2, 3];

const ulElement = document.querySelector('.listElement');

for (const number of numbers) {
  const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  const liContent = document.createTextNode(number);
  liElement.appendChild(liContent);
}
