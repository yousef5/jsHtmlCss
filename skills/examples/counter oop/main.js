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
  constructor(choose, value) {
    (this.choose = choose),
      (this.value = value),
      (this.valueEL = this.choose.querySelector(".value")),
      (this.valueEL.textContent = this.value);
    this.btnincrease = this.choose.querySelector(".increase");
    this.btnincrease.addEventListener("click", this.increase.bind(this));
    this.btnreset = this.choose.querySelector(".reset");
    this.btnreset.addEventListener("click", this.reset.bind(this));
    this.btndecrease = this.choose.querySelector(".decrease");
    this.btndecrease.addEventListener("click", this.decrease.bind(this));
  }

  increase() {
    this.value++;
    this.valueEL.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueEL.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueEL.textContent = this.value;
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

const counter1 = new counterCL(getElement("counter1"), 100);
const counter = new counterCL(getElement("counter2"), 200);
