
// // with fn constructor
// function getElement(el) {
//   const element = document.querySelector(`.${el}`);
//   if (element) {
//     return element;
//   } else {
//     throw new Error(
//       `your selection is "${el}" and this is wrong plz take a look ya joe`
//     );
//   }
// }

// function gallery(element) {
//   this.container = element;
//   this.imgsArray = [...element.querySelectorAll(".imgCard")];

//   // buttons
//   this.closeBtn = getElement("close-model");
//   this.modelMainImg = getElement("main-img-model");
//   this.modelMainTitle = getElement("main-img-title");
//   this.model = getElement("model");
//   this.modelLinks = getElement("model-links");
//   this.nextBtn = getElement("next-model");
//   this.prevBtn = getElement("prev-model");
//   this.nextImg = this.nextImg.bind(this);
//   this.prevImg = this.prevImg.bind(this);
//   this.closeModel = this.closeModel.bind(this);
//   this.chooseImg = this.chooseImg.bind(this);
//   this.container.addEventListener(
//     "click",
//     function (e) {
//       if (e.target.classList.contains("imgCard")) {
//         this.showModel(e.target, this.imgsArray);
//       }
//     }.bind(this)
//   );
// }

// gallery.prototype.showModel = function (selectedImg, list) {
//   console.log(list);
//   this.setMainImg(selectedImg);
//   this.modelLinks.innerHTML = list
//     .map(function (img) {
//       return `<img src="${
//         img.src
//       }" data-title="${img.dataset.title}" data-id="${img.dataset.id}" class="${selectedImg.dataset.id === img.dataset.id ? "model-link selected" : "model-link"}">`;
//     })
//     .join("");
//   this.closeBtn.addEventListener("click", this.closeModel);
//   this.model.classList.add("showModels");
//   this.nextBtn.addEventListener("click", this.nextImg);
//   this.prevBtn.addEventListener("click", this.prevImg);
//   this.modelLinks.addEventListener("click", this.chooseImg);
// };

// gallery.prototype.setMainImg = function (selectImg) {
//   this.modelMainImg.src = selectImg.src;
//   this.modelMainTitle.textContent = selectImg.dataset.title;
// };

// gallery.prototype.closeModel = function () {
//   this.model.classList.remove("showModels");
//   this.closeBtn.removeEventListener("click", this.closeModel);
//   this.nextBtn.removeEventListener("click", this.nextImg);
//   this.prevBtn.removeEventListener("click", this.prevImg);
//   this.modelLinks.removeEventListener("click", this.chooseImg);
// };

// gallery.prototype.nextImg = function () {
//   const selected = this.modelLinks.querySelector(".selected");
//   const next = selected.nextElementSibling || this.modelLinks.firstElementChild;
//   selected.classList.remove("selected");
//   next.classList.add("selected");
//   this.setMainImg(next);
// };

// gallery.prototype.prevImg = function () {
//   const selected = this.modelLinks.querySelector(".selected");
//   const prev =
//     selected.previousElementSibling || this.modelLinks.lastElementChild;
//   selected.classList.remove("selected");
//   prev.classList.add("selected");
//   this.setMainImg(prev);
// };

// gallery.prototype.chooseImg = function (e) {
//   if (e.target.classList.contains("model-link")) {
//     const newselect = e.target;
//     const oldselect = this.modelLinks.querySelector(".selected");
//     oldselect.classList.remove("selected");
//     newselect.classList.add("selected");
//     this.setMainImg(newselect);
//   }
// };

// const technologyGallery = new gallery(getElement("section-tech"));
// const foodGallery = new gallery(getElement("section-food"));
// const characterGallery = new gallery(getElement("section-character"));


// with class
function getElement(el) {
  const element = document.querySelector(`.${el}`);
  if (element) {
    return element;
  } else {
    throw new Error(
      `you want to select this "${el}" and this element this not exit`
    );
  }
}

class gallery {
  constructor(element) {
    // selection
    this.container = element;
    this.list = [...element.querySelectorAll(".imgCard")];
    this.model = getElement("model");
    this.mainImg = getElement("main-img-model");
    this.mainTitle = getElement("main-img-title");
    this.modelLinks = getElement("model-links");
    this.closeBtn = getElement("close-model");
    this.nextBtn = getElement("next-model");
    this.prevBtn = getElement("prev-model");

    // binding
    this.closeModel = this.closeModel.bind(this);
    this.nextimg = this.nextimg.bind(this);
    this.previmg = this.previmg.bind(this);
    this.chooseImg = this.chooseImg.bind(this)

    // master function in constructor
    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("imgCard")) {
          this.showModel(e.target, this.list);
          console.log(e.target);
        }
      }.bind(this)
    );
  }

  showModel(selectImg, list) {
    this.showMainImg(selectImg);
    this.modelLinks.innerHTML = list
      .map(function (img) {
        return `<img src="${
          img.src
        }" data-title="${img.dataset.title}" data-id="${img.dataset.id}" class="${selectImg.dataset.id === img.dataset.id ? "selected model-link" : "model-link"}">`;
      })
      .join("");
    this.model.classList.add("showModels");

    // events
    this.closeBtn.addEventListener("click", this.closeModel);
    this.nextBtn.addEventListener("click", this.nextimg);
    this.prevBtn.addEventListener("click", this.previmg);
    this.modelLinks.addEventListener('click',this.chooseImg)
  }

  closeModel() {
    this.model.classList.remove("showModels");
    this.closeBtn.removeEventListener("click", this.closeModel);
    this.nextBtn.removeEventListener("click", this.nextimg);
    this.prevBtn.removeEventListener("click", this.previmg);
    this.modelLinks.removeEventListener('click',this.chooseImg)
  }

  showMainImg(selectImg) {
    this.mainImg.src = selectImg.src;
    this.mainTitle.textContent = selectImg.dataset.title;
  }

  nextimg() {
    const selectImg = getElement("selected");
    const next =
      selectImg.nextElementSibling || this.modelLinks.firstElementChild;
    selectImg.classList.remove("selected");
    next.classList.add("selected");
    this.showMainImg(next);
  }
  previmg() {
    const selectImg = getElement("selected");
    const prev =
      selectImg.previousElementSibling || this.modelLinks.lastElementChild;
    selectImg.classList.remove("selected");
    prev.classList.add("selected");
    this.showMainImg(prev);
  }

  chooseImg(e) {
    if(e.target.classList.contains('model-link')){
      const oldselected = this.modelLinks.querySelector(".selected");
      oldselected.classList.remove("selected");
      e.target.classList.add("selected");
      this.showMainImg(e.target)
    }
  }
}

const technologyGallery = new gallery(getElement("section-tech"));
const foodGallery = new gallery(getElement("section-food"));
const characterGallery = new gallery(getElement("section-character"));
