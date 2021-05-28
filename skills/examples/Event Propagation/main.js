// variables
const mainContainer = document.querySelector(".main--container");

const subContainer = document.querySelector('.sub--container')

const boxes = document.querySelectorAll('.box')


const randomNumber = function(min,max){
return Math.floor(Math.random() * (max - min + 1) + min)
} 

const randomBg = function(e){
return `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`
}

//to stop propagation 
boxes.forEach(box=>{
    box.addEventListener('click', function(e){
        this.style.background = randomBg()
        alert(`
        e.target = ${e.target.classList}
        e.currentTarget = ${e.currentTarget.classList}
        this = ${this.classList}
        `)
       //e.stopPropagation()
    })
    
})


subContainer.addEventListener('click', function(e){
    this.style.background = randomBg()
    alert(`
    e.target = ${e.target.classList}
    e.currentTarget = ${e.currentTarget.classList}
    this = ${this.classList}
    `) 
   
})

//if you want to disable Bubbling and use capture  use true  
//el.addEventListener('click', listener, true)
mainContainer.addEventListener('click', function(e){
    this.style.background = randomBg()
    alert(`
    e.target = ${e.target.classList}
    e.currentTarget = ${e.currentTarget.classList}
    this = ${this.classList}
    `) 
},true)