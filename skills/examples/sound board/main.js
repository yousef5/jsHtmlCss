// variables
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  // create btn for each sound in button div
  const btn = document.createElement("button");
  btn.innerHTML = sound;
  btn.classList.add("btn");

  //play sound when click button
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.querySelector(".buttons").appendChild(btn);
});

//stop sound
function stopSounds() {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause();
  });
}
