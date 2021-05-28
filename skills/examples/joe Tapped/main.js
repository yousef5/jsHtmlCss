// variables
const buttonGroup = document.querySelector(".button-group");

buttonGroup.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  //   guard clause stop here
  if (!clicked) return;
  //   remove active from all button
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active-btn"));
  // remove active from all contents
  document
    .querySelectorAll(".content")
    .forEach((cont) => cont.classList.remove("show-object"));
  // add active to the clicked one
  clicked.classList.add("active-btn");

  //   add active to wanted content
  document
    .querySelector(`.content--${clicked.dataset.content}`)
    .classList.add("show-object");
});
