// variables
const imgContainer = document.querySelector(".imgContianer");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const imgs = document.querySelectorAll(".img");
let idx = 0;

let interval = setInterval(changeImg, 2000);

function changeImg() {
  idx++;
  if (idx >= imgs.length) {
    idx = 0;
  }

  if (idx < 0) {
    idx = imgs.length - 1;
  }
 console.log(idx);
  imgContainer.style.transform = `translateX(${-idx * 350}px)`
}


function reset(){
    clearInterval(interval);
    interval = setInterval(changeImg,2000)
}


next.addEventListener('click',function(){
    reset();
    idx++;
    if (idx >= imgs.length) {
      idx = 0;
    }
  
    if (idx < 0) {
      idx = imgs.length - 1;
    }
    imgContainer.style.transform = `translateX(${-idx * 350}px)`
})
prev.addEventListener('click',function(){
    reset();
    idx--;
    if (idx >= imgs.length) {
      idx = 0;
    }
  
    if (idx < 0) {
      idx = imgs.length - 1;
    }
    imgContainer.style.transform = `translateX(${-idx * 350}px)`
})