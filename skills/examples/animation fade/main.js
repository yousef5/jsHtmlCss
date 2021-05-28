// variables
const imgContainer = document.querySelector('.img-container')



const fadePics = function(e){
    const el = e.target
    if(el.classList.contains('img-card')){
      el.closest('.img-container').querySelectorAll('img').forEach(card => {
        card.style.filter = 'none'
          if(card !== el)
          card.style.filter = `blur(${this}px)`
          console.log(this);
      });
    }

}



imgContainer.addEventListener('mouseover', fadePics.bind(10))
imgContainer.addEventListener('mouseleave', fadePics.bind(0))

