// variables
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

function playSlide() {
  let currentSlide = 0;

  showSlide(currentSlide);
  bodyBg(currentSlide);

  left.addEventListener("click", function () {
      if(currentSlide === 0){
          currentSlide = slides.length - 1 
      }else{
        currentSlide--;
      }
    
    showSlide(currentSlide);
    bodyBg(currentSlide);
  });

  right.addEventListener("click", function () {
      if(currentSlide >= (slides.length - 1)){
          currentSlide = 0
      }else{
        currentSlide++;
      }
    
    showSlide(currentSlide);
    bodyBg(currentSlide);
  });
}

function showSlide(arrIndex) {
removeActive();
  slides[arrIndex].classList.add("active");
}

function bodyBg(arrIndex) {
  document.body.style.background = slides[arrIndex].style.background;
}

function removeActive(){
    slides.forEach(slide => slide.classList.remove('active'))
}
playSlide();
