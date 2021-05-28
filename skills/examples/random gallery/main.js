// variables
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlays");
const close = document.getElementById('close')


//function to make random
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}


//function to show overlay with img 
function showOverlays(img) {
  overlay.classList.add("showInner");
  overlay.children[0].querySelector("img").src = img;
}


//function add item with html
const generateItem = function ([v, h]) {
  return `<div class = "item h${h} v${v}">
    <img src="images/${randomNumber(12)}.jpg">
    <div class="overlay-view"><span ><i class="fa fa-search"></i></span></div>
    </div>`;
};

//make array to use it to loop 
const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]);

const mainGallery = digits.map(generateItem).join(" ");

gallery.innerHTML = mainGallery;

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    const el = e.currentTarget;
    const srcImg = el.querySelector("img").src;
    return showOverlays(srcImg)
  });
});

close.addEventListener('click',function(e){
    overlay.classList.remove('showInner')
})
