//👉 variables
// const boxes = document.querySelectorAll('.box')
// //👉 invoke scroll fn to show first 3 box at start
// scrollAnimation();

// //👉 add event to window scroll
// window.addEventListener('scroll',scrollAnimation)

// function scrollAnimation(){
//   //👉 add window hieght to see 3 box 
//   const actionWindowHiegth = window.innerHeight / 4 * 3 
  
//   boxes.forEach((box)=>{
//     //👉 get the box top
//     const boxTop = box.getBoundingClientRect().top;
//     //👉 add contition to show box depand on its top
//     if(boxTop < actionWindowHiegth){
//       box.classList.add('show')
//     }else{
//       box.classList.remove('show')
//     }

//   })

// }

//👉👉👉👉new way 👉👉👉👉
const showStatus = document.querySelector('.showStatus')
const boxes = document.querySelectorAll('.box')
let options ={
  root : null,
  threshold :0,
  rootMargin : '-150px'
}

const showBox = function(entries){
entries.forEach((entry)=>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  }else{
    entry.target.classList.remove('show')
  }
})
}
const boxobserve = new IntersectionObserver(showBox,options)
boxes.forEach((box)=>{
  boxobserve.observe(box)
})