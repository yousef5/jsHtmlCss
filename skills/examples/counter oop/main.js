// const counter = function (choose, value) {
//   this.choose = choose;
//   this.value = value;
//   this.valueEl = this.choose.querySelector(".value");
//   this.valueEl.textContent = this.value;

//   //button
//   this.decreaseBtn = this.choose.querySelector(".decrease");
//   this.resetBtn = this.choose.querySelector(".reset");
//   this.increaseBtn = this.choose.querySelector(".increase");

//   //
//   this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
//   this.resetBtn.addEventListener('click',this.reset.bind(this))
//   this.increaseBtn.addEventListener('click',this.increase.bind(this))
// };

// // prototype
// counter.prototype.decrease = function () {
//   this.value--;
//   this.valueEl.textContent = this.value;
// };

// counter.prototype.reset = function () {
//   this.value = 0;
//   this.valueEl.textContent = this.value;
// };
// counter.prototype.increase = function () {
//   this.value++;
//   this.valueEl.textContent = this.value;
// };

// const counter1 = new counter(getElement("counter1"), 50);
// const counter2 = new counter(getElement("counter2"), 100);
class counterCL {
  valueEL = this.choose.querySelector(".value");
  
  constructor(choose, value) {
    (this.choose = choose), (this.value = value);
  }
}
function getElement(el) {
  const element = document.querySelector(`.${el}`);
  if (element) {
    return element;
  } else {
    throw new Error(`you choose this ${el} and its not exit`);
  }
}
