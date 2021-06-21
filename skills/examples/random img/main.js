// variables

const container = document.querySelector(".imgGallery");
const url = `https://source.unsplash.com/random/`;
const rows = 5;

for (let i = 0; i < 3 * rows; i++) {
  const img = document.createElement("img");
  img.src = `${url}${lastUrl()}`;
  container.insertAdjacentElement('beforeend',img)
}



function lastUrl(){
    return `${getRandomNumber()}*${getRandomNumber()}`
}
function getRandomNumber(){
    return Math.floor((Math.random() * 15) +300)
}

console.log(lastUrl());

