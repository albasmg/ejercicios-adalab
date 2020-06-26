const paragraph = document.querySelector(".paragraph");

paragraph.addEventListener("mouseover", () => {
  const newParagraph = document.createElement("p");
  const container = document.querySelector(".container");

  newParagraph.innerHTML = paragraph.innerHTML;
  container.appendChild(newParagraph);
});
