const navLinks = document.querySelectorAll(".link-Nav");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const wantedSectionName = e.target.getAttribute("href").slice(1);
    const wantedSection = document.querySelector(`#${wantedSectionName}`)
    wantedSection.scrollIntoView({ behavior: "smooth" });
  });
});


