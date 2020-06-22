const dinnerPrice = 128;
const numberOfPeople = 9;
const sake = 2;
const allPrice = dinnerPrice - sake;
const eachOnePrice = allPrice / numberOfPeople;
const anasPrice = eachOnePrice + sake;

console.log(anasPrice);

document.querySelector(".price").innerHTML = anasPrice;
