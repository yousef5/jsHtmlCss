
const mdn = document.getElementById("master-mdn");
const mdnSide = document.getElementById("mdn-side");
const closeMdn = document.getElementById("close-mdn-side");
const mdnLinks = document.querySelectorAll(".mdn-link");
const mdns = document.querySelectorAll(".single-mdn");
const overlay = document.getElementById('overlay');


console.log(showCode);
//show side menu of mdn ex
mdn.addEventListener("click", (e) => {
  e.preventDefault();
  mdnSide.classList.add("show-side-mdn");
});

closeMdn.addEventListener("click", (e) => {
  e.preventDefault();
  mdnSide.classList.remove("show-side-mdn");
});

// function to show and hide mdn and overlay
mdnLinks.forEach((mdnLink)=>{
    mdnLink.addEventListener('click',(e)=>{
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href').slice(1);
  const el = document.getElementById(id)
  el.classList.add('show-mdn')
  overlay.classList.add('show-overlay')    
  })
})

// remove mdn and overlay
overlay.addEventListener('click',(e)=>{
  e.currentTarget.classList.remove('show-overlay')
  mdns.forEach((mdn)=>{
    mdn.classList.remove('show-mdn')
  })
})

