function getEl(className) {
  const getContent = document.querySelector(className);
  if (!getContent) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${className}`
    );
  } else {
    return getContent.innerHTML;
  }
}

const paragraph = getEl(".paragraph");
console.log(paragraph);

const number = parseInt(paragraph);
console.log(number);

function pairOrOdd(numberPairOrOdd) {
  return numberPairOrOdd % 2 === 0 ? true : false;
}

console.log(pairOrOdd(number));

if (pairOrOdd(number) === true) {
  console.log("Este numero es par");
} else {
  console.log("Este numero es impar");
}
