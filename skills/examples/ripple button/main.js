// variables
const buttons = document.querySelectorAll('button')

buttons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        const x = e.clientX;
        const y = e.clientY

        const top = e.target.offsetTop
        const left = e.target.offsetLeft

        const spaceX = x - left
        const spaceY = y - top

        const el = document.createElement('span')
        el.classList.add('circle')
        el.style.top = `${spaceY}px`
        el.style.left = `${spaceX}px`
        
        this.appendChild(el)

        console.log(this);
        setTimeout(() => {
            el.remove()
        }, 1000);
    })
})
