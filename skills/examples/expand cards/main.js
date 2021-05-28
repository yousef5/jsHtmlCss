//choose all panel 
const panels = document.querySelectorAll('.panel')
// add event to panel on click
panels.forEach((panel)=>{
    panel.addEventListener('click',(e)=>{
        removeActive();
        const el = e.currentTarget
        el.classList.add('active')
    })
})


//fucntion to remove active 
function removeActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}