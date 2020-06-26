const button = document.querySelector(".button");

button.addEventListener("click", function showMessage() {
  console.log("hola");
  document.querySelector(".message").innerHTML =
    "Mi primer click, ¡ole yo y la mujer que me parió!";
});
