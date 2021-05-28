// variables

const search = document.getElementById('search');
const btn = document.getElementById('btn')
const input = document.getElementById('input')

// add event click to btn to toggle 
// active to search div
//depand on css active in search 
// will change input and button
btn.addEventListener('click',()=>{
    search.classList.toggle('active')
})