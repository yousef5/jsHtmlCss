// variables
const imgL = document.querySelectorAll('img[data-src]')

const imgrevel = function(entries,observer){
    const [entry] = entries
    if(!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src
  
    entry.target.addEventListener('load',function(e){
        e.target.classList.remove('lazy-img')        
    })

    observer.unobserve(entry.target)
}



const imgObserver = new IntersectionObserver(imgrevel,{
    root : null,
    threshold : 0.8
})

imgL.forEach((i)=>{
   imgObserver.observe(i) 
})