//👉 variables
const bg = document.getElementById("bg");
const txt = document.getElementById("text");

//👉add load to 0 and make it global
let load = 0;

// add blurry fn to interval
// when add it to interval it call it
// automatic
let int = setInterval(blurry, 30);

//👉make fn to increase load and
//👉blur bg and hide text
function blurry() {
  //👉make load increase
  load++;
  //👉add load to text with %
  txt.innerHTML = `${load} %`;
  //👉 add blur to bg using scale fn
  bg.style.filter = `blur(${scale(load, 100, 50)}px)`;
  //👉 add opacity to txt using scale fn
  txt.style.opacity = scale(load,100, 1)
  //👉add condition to stop interval
  if (load > 99) {
    clearInterval(int);
  }
}

//👉 fn to scale load in opacity desc
//👉and blur desc
//👉n =propMax - (load * propMAX)/ScaleMax
function scale(scaleNow, scaleMax, PropMax) {
  return PropMax - (scaleNow * PropMax) / scaleMax;
}
