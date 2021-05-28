// variables
const insert = document.querySelector(".insert");

document.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">${event.key} <small>😍 key</small></div>

    <div class="key">${event.keyCode}<small>😍 keyCode</small></div>
 
    <div class="key">${event.code}<small>😍 code</small></div>
    `;
});
