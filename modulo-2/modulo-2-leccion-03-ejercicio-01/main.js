"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const finalSrcValue = userAvatar || DEFAULT_AVATAR;

console.log(finalSrcValue);

document.querySelector(".user__avatar").setAttribute("src", finalSrcValue);
