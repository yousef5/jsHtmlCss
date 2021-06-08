// variables

const slider = document.querySelector(".slider");
const label = document.querySelector(".label");

slider.addEventListener("input", function (e) {
  const value = e.target.value;
  const sliderWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");
  const labelWidthNumber = +labelWidth.substring(0, labelWidth.length - 2);
  const sliderWidthNumber = +sliderWidth.substring(0, sliderWidth.length - 2);
  const min = +e.target.min;
  const max = +e.target.max;
  const left = value * (sliderWidthNumber / max) - (labelWidthNumber / 2) + scale(value, min, max, 10, -10);
  console.log(left);
  console.log(sliderWidthNumber);
  label.style.left = `${left}px`;
  label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }