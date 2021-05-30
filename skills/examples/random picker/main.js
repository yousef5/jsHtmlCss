// variables
const tagsContainer = document.querySelector(".tags");
const inputTxt = document.getElementById("txt");

inputTxt.addEventListener("keyup", function (e) {
  
  createTag(e.target.value);

  if (e.key === "Enter") {
    inputTxt.value = "";
    selectionPicker();
  }

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
    tagSpan.classList.add("tagg");
    tagSpan.textContent = tag;
    tagsContainer.appendChild(tagSpan);
  });
}
//////////////////////////////////////////////////////////////
function selectionPicker() {
  const times = 30;
  const interval = setInterval(() => {
    const randomtag = pickRandomTag();
    console.log(randomtag);
    highlight(randomtag);

    setTimeout(() => {
      unHighlight(randomtag);
    }, 200);
  }, 200);

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomtag = pickRandomTag();
      highlight(randomtag)
    }, 200);

  }, times * 200);
}
//////////////////////////////////////////////////////////////
function highlight(tag) {
  tag.classList.add("highlight");
}
function unHighlight(tag) {
  tag.classList.remove("highlight");
}

const pickRandomTag = function () {
  const allTags = document.querySelectorAll(".tagg");
  return allTags[Math.floor(Math.random() * allTags.length)];
};
