// variables
const leftPage = document.querySelector(".left-page");
const rightPage = document.querySelector(".right-page");
const container = document.querySelector(".container1");

leftPage.addEventListener("mouseenter", () => container.classList.add("left"));
leftPage.addEventListener("mouseleave", () =>
  container.classList.remove("left")
);

rightPage.addEventListener("mouseenter", () =>
  container.classList.add("right")
);
rightPage.addEventListener("mouseleave", () =>
  container.classList.remove("right")
);
