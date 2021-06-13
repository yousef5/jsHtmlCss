const navLinks = document.querySelectorAll(".link-Nav");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const links = document.querySelector('.links-Nav')
const linksContainer = document.querySelector('.links-container')
const navToggle = document.getElementById('nav-toggle')
const up = document.getElementById('up')

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const wantedSectionName = e.target.getAttribute("href").slice(1);
    const wantedSection = document.querySelector(`#${wantedSectionName}`);
    linksContainer.style.height = `0`
    wantedSection.scrollIntoView({ behavior: "smooth"});
  });

});

// add sticky nav
const navHeight = nav.getBoundingClientRect().height
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky-nav");
    up.classList.add('shows')
    console.log(entry);
  } else {
    nav.classList.remove("sticky-nav");
    up.classList.remove('shows')
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight + 100}px`
});
headerObserver.observe(header);

// open nav 

navToggle.addEventListener('click',function(){
  const navlinksHieght = linksContainer.getBoundingClientRect().height
  if(navlinksHieght === 0){
    linksContainer.style.height = `286px`
  }else {
    linksContainer.style.height = `0`
  }
  console.log(navlinksHieght);
})



window.addEventListener('resize',function(){
  if(this.innerWidth > 920){
    links.style.height = `100%`
  }else{
    links.style.height = `0`
  }
})


up.addEventListener('click',function(e){
  e.preventDefault()
  header.scrollIntoView({behavior: 'smooth'})
})
