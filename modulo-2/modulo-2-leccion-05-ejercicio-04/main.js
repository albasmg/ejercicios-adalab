const container = document.querySelector(".paragraph");

window.addEventListener("scroll", () => {
  const blueClass = "blue";
  const pinkClass = "pink";

  if (window.scrollY <= 250) {
    container.classList.add(blueClass);
    container.classList.remove(pinkClass);
  } else {
    container.classList.add(pinkClass);
    container.classList.remove(blueClass);
  }
});
