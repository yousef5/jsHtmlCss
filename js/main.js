const linkContainer = document.querySelectorAll(".linkContainer");
const masterLink = document.querySelectorAll(".master-link");
const frame = document.querySelector(".masterFrame");
const subLinks = document.querySelectorAll(".sub-link");
const showSideBtn = document.getElementById("showSide");
const tools = document.getElementById("tool");
const counts = document.querySelectorAll(".count");
const sideBar = document.getElementById("sideBar");
const countAll = document.querySelector(".countAll");


// show side
// sideBar.classList.add("hideWidth");
showSideBtn.addEventListener("click", function () {
  sideBar.classList.toggle("hideWidth");
});
// show sub menu in main side bar
masterLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.currentTarget;
    const parent = el.parentNode;
    console.log(parent);
    parent.classList.toggle("show-links");
  });
});

subLinks.forEach((subLink) => {
  subLink.addEventListener("click", (e) => {
    e.preventDefault();
    subLinks.forEach((sub) => {
      sub.classList.remove("active");
    });
    const id = e.currentTarget.getAttribute("href");
    frame.src = id;
    e.currentTarget.classList.add("active");
  });
});

subLinks.forEach((subLink) => {
  subLink.addEventListener("mouseover", (e) => {
    //i need axis
    const el = e.currentTarget;
    const top = el.getBoundingClientRect().top;
    const data = el.getAttribute("data-learn");

    tools.innerHTML = `<img src="${data}"></img>`;
    tools.style.top = `${top}px`;
    tools.style.width = `300px`;
    tools.style.display = `block`;
    tools.style.left = `360px`;
  });
  subLink.addEventListener("mouseleave", (e) => {
    tools.style.display = `none`;
  });
});
//add count to sublink
counts.forEach((count) => {
  console.log(count);
  const el = count.closest(".linkContainer");
  const el2 = el.querySelector(".subContainer");
  const el2ChildrenCount = el2.children.length;
  count.innerHTML = el2ChildrenCount;
});

//add countall
countAll.innerHTML = subLinks.length;


