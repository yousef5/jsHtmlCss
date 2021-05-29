// variables
const template = document.querySelector('.template')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')

openBtn.addEventListener('click',function(){
    template.classList.add('showNav')
})
closeBtn.addEventListener('click',function(){
    template.classList.remove('showNav')
})

