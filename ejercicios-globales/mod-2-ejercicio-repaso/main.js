"use strict";

const name = document.querySelector(".js-user-name");
const password = document.querySelector(".js-user-password");
const button = document.querySelector(".js-login-button");

let attemps = 0;
const userInfo = {
  name: "front23",
  password: "bicicleta",
};

function logIn() {
  attemps++;
  if (name.value === userInfo.name && password.value === userInfo.password) {
    alert("Estás dentro!");
  } else if (attemps < 4) {
    alert("Tienes otro intento");
  } else {
    alert("Estás fuera!");
  }
}

button.addEventListener("click", logIn);
