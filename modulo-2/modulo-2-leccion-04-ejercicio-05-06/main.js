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

console.log(getEl(".hola"));
