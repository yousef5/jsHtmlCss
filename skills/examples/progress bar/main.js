//variables
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progressBar = document.getElementById("progress");

const circles = document.querySelectorAll(".circle");
let start = 0;

function progressEdit() {
    // circle edit
  circles.forEach((circle, i) => {
    if (i <= start) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });


  //progress bar edit
  const widthBar =
    (document.querySelectorAll(".active").length - 1) /
    (document.querySelectorAll(".circle").length - 1);
  console.log(widthBar);
  progressBar.style.width = `${widthBar * 100}%`;


  //button edit
  if (
    document.querySelectorAll(".active").length ===
    document.querySelectorAll(".circle").length
  ) {
    next.disabled = true;
    next.classList.add("disable");
  } else if (document.querySelectorAll(".active").length === 1) {
    prev.disabled = true;
    prev.classList.add("disable");
  } else {
    next.disabled = false;
    prev.disabled = false;
    next.classList.remove("disable");
    prev.classList.remove("disable");
  }
}

progressEdit();

function progressPlus() {
  start++;
  progressEdit();
}
function progressMins() {
  start--;
  progressEdit();
}

next.addEventListener("click", progressPlus);
prev.addEventListener("click", progressMins);
