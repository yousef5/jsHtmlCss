// variables
const btn = document.getElementById("btn");
const toasts = document.querySelector(".toasts");
const message = ["message1", "message2", "message3", "message4", "message5"];
const classStyle = ["messageBlue", "messageRed", "messageGreen"];
btn.addEventListener("click", function () {
  const el = document.createElement("div");
  el.classList.add(classStyle[getRandomStyle()]);
  el.textContent = message[getRandomMessage()];
  toasts.appendChild(el);

  setTimeout(() => {
   el.remove()   
  }, 3000);
});

function getRandomMessage() {
  return Math.floor(Math.random() * message.length);
}

function getRandomStyle() {
  return Math.floor(Math.random() * classStyle.length);
}
