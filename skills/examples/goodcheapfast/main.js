// variables
const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", function (e) {
   doThisTrick(e.target)
  });
});

function doThisTrick(clickone){
    if (good.checked && cheap.checked && fast.checked) {
        if (clickone === good) {
          fast.checked = false;
        } else if (clickone === cheap) {
          good.checked = false;
        } else if (clickone === fast) {
          cheap.checked = false;
        }
      } 
}