// variables
const toggle = document.getElementById("toggle");
const nav = document.querySelector('nav')

toggle.addEventListener('click',function(e){
    nav.classList.toggle('active')
})
