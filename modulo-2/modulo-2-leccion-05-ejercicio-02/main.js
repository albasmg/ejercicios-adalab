const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const inputValue = document.querySelector(".input").value;
  document.querySelector(".paragraph").innerHTML = inputValue;
});
