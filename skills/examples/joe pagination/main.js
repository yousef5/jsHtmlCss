// variables
const navLinks = document.querySelectorAll(".nav-link");

const navContainer = document.querySelector(".nav-links");

const btns = document.querySelectorAll(".btn");



const moveToSection = function(e){
    e.preventDefault();
    const CurrentBtn = e.target;
    const sectionName = CurrentBtn.getAttribute("href").slice(1);
    const goToSection = document.querySelector(`.${sectionName}`).getBoundingClientRect();


    console.log(window.pageXOffset,
        window.pageYOffset)

        console.log(document.documentElement.clientHeight,document.documentElement.clientWidth);

        // scrolling
        //  window.scrollTo({
        //      left : goToSection.left + window.pageXOffset,
        //      top : goToSection.top + window.pageYOffset,
        //      behavior : 'smooth'
        //  })
        if(sectionName === 'section1'){
                  // scrolling
         window.scrollTo({
             left : goToSection.left + window.pageXOffset,
             top : goToSection.top + window.pageYOffset + '5rem',
             behavior : 'smooth'
         })  
        }else{
            document.querySelector(`.${sectionName}`).scrollIntoView({behavior : 'smooth'})
        }
  }


btns.forEach((btn) =>
btn.addEventListener("click", moveToSection))

navContainer.addEventListener('click',moveToSection)