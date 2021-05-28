// variables
const slides = document.querySelectorAll(".slide");

const dotContainer = document.querySelector(".dots-container");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const slider = function () {
  let curSlide = 0;
  const maxLength = slides.length;

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function () {
    const allDots = dotContainer.querySelectorAll(".dot");
    allDots.forEach((d, i) => {
      d.classList.remove("active-dot");
      const dotSlide = d.getAttribute("data-slide");

      if (+dotSlide === curSlide) {
        d.classList.add("active-dot");
      }
    });
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxLength - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot();
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxLength - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activeDot();
  };

  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);

  const goWithDot = function () {
    const allDots = dotContainer.querySelectorAll(".dot");
    allDots.forEach((e, i) => {
      e.addEventListener("click", function (e) {
        const el = e.target;
        const dotSlide = +el.getAttribute("data-slide");
        curSlide = dotSlide
        goToSlide(curSlide);
        activeDot();
      });
    });
  };
  const init = function () {
    goToSlide(curSlide);
    createDots();
    activeDot();
    goWithDot();
  };
  init();
};
slider();
