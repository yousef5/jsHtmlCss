// variables
const tagsContainer = document.querySelector(".tags");
const inputTxt = document.getElementById("txt");

inputTxt.addEventListener("keyup", function (e) {
  createTag(e.target.value);
});
//////////////////////////////////////////////////////////////

function createTag(input) {
  const alltags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsContainer.innerHTML = "";
  alltags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.textContent = tag;
    tagsContainer.appendChild(tagSpan);
  });
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
function highlight(tag){
    tag.classList.add('highlight')
}
function unHighlight(tag){
    tag.classList.remove('highlight')
}