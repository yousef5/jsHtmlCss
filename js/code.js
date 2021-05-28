const showCode = document.getElementById("showCode");
const code = document.getElementById("single-code");
const codingBlocks = document.querySelectorAll(".coding");

const removeAll = function (e) {
  codingBlocks.forEach((block) => {
    block.classList.remove("not-activate");
    block.classList.remove("activate");
  });
};
//show code
showCode.addEventListener("click", (e) => {
  e.preventDefault();
  code.classList.toggle("show-single-code");
});

code.addEventListener("click", function (e) {
  const el = e.target;
  removeAll();
  if (
    el.classList.contains("code-html") ||
    el.classList.contains("code-css") ||
    el.classList.contains("code-js")
  ) {
    codingBlocks.forEach((block) => {
      if (block !== el) {
        block.classList.add("not-activate");
      } else {
        el.classList.add("activate");
      }
    });
  }
});
document.addEventListener("keydown", function (e) {
 if(e.key === "Escape"){
   return removeAll()
 }
});
