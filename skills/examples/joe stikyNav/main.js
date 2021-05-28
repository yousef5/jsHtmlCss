// variables
const nav = document.getElementById("nav");
const navHeight = nav.getBoundingClientRect().height;
const section1 = document.getElementById("section1");

//second step
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    console.log(entry);
  } else {
    nav.classList.remove("sticky");
  }
};

// first Step
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

//third step
headerObserver.observe(section1);
