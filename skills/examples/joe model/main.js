//= variables
const overlay = document.querySelector('.overlay2')
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open')
const closeModal = document.querySelector('.close')


const showModal = function(e){
    overlay.classList.add('overlay--show')
    modal.classList.add('modal--show')
}

const hideModal = function(e){
    overlay.classList.remove('overlay--show')
    modal.classList.remove('modal--show')
    console.log('lolo');

}


openModal.addEventListener('click',showModal)
closeModal.addEventListener('click',hideModal)
overlay.addEventListener('click',hideModal)

document.addEventListener('keydown',function(e){
if(e.key ==="Escape" && modal.classList.contains('modal--show'))hideModal()  
})