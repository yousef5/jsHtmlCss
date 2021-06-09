// variables
const btns = document.querySelectorAll("div ul li");
const pics = document.querySelectorAll(".content");

btns.forEach((btn, idx) => {
    console.log(btn);
  btn.addEventListener("click", function (e) {
    hidePics();
    removeActiveBtn();
    pics[idx].classList.add('show-content')
    e.currentTarget.classList.add('show-btn')
  });
});

function hidePics() {
  pics.forEach((pic) => pic.classList.remove("show-content"));
}
function removeActiveBtn() {
  btns.forEach((btn) => btn.classList.remove("show-btn"));
}
