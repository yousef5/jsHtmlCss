// variables
const section = document.querySelectorAll(".section");
const sectionRevels = document.querySelectorAll(".revels-content");

//second step
const revels = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

    entry.target.children[0].classList.remove("hidden--revels");
    console.log(entry.target,"intersectin");

};

// first Step
const sectionObserver = new IntersectionObserver(revels, {
  root: null,
  threshold: 0.2,
});

//third step
section.forEach((block) => {
  sectionObserver.observe(block);
});

sectionRevels.forEach((e) => {
  e.classList.add("hidden--revels");
});
