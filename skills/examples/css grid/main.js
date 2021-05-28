// variables
const boxContainer = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");

const modeChoose = document.getElementById("mode");
const gridSection = document.getElementById("grid-section");
const gridTTemplateColumns = document.getElementById("grid-template-columns");
const gridTTemplateRows = document.getElementById("grid-template-rows");
const gap = document.getElementById("gap");
const spBox = document.getElementById('ClassName')
const gridColumn = document.getElementById('gridColumn')
const gridRow = document.getElementById('gridRow')

let currentCode = 0;
modeChoose.addEventListener("change", () => {
  if (modeChoose.value === "grid") {
    gridSection.style.visibility = "visible";
    gridSection.style.opacity = 1;
    boxContainer.style.display = "grid";
  } else {
    gridSection.style.visibility = "hidden";
    gridSection.style.opacity = 0;
    boxContainer.style.display = "block";
  }
});

gridSection.addEventListener("change", function (e) {
  if (gridTTemplateColumns.value !== "") {
    boxContainer.style.gridTemplateColumns = gridTTemplateColumns.value;
  } else {
    boxContainer.style.gridTemplateColumns = "none";
  }
  if (gridTTemplateRows.value !== "") {
    boxContainer.style.gridTemplateRows = gridTTemplateRows.value;
  } else {
    boxContainer.style.gridTemplateRows = "none";
  }
  if (gap.value !== "") {
    boxContainer.style.gap = gap.value;
  } else {
    boxContainer.style.gap = 0;
  }
});
