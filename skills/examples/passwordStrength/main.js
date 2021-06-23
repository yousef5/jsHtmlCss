// variables
const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", function (e) {
  const pass = e.target.value;
  const passLength = pass.length;
  const blur = `blur(${(20 - passLength) * 2}px)`;
  background.style.filter = blur;
});
