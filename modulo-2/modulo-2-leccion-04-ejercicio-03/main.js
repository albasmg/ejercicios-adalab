function iva(price) {
  const ivaOfPrice = price * 0.21;
  const finalPrice = price + ivaOfPrice;
  return `Precio sin IVA: ${price}, IVA: ${ivaOfPrice} y total ${finalPrice}`;
}

console.log(iva(100));
