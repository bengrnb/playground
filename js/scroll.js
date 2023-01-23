const sections = document.querySelectorAll(".section");

window.onscroll = () => {
    // if you are not at the about section and not at the case study section
    if (scrollY < sections[0].offsetTop-60 && scrollY < sections[1].offsetTop-60) {
        document.querySelector("#home-nav").classList.add("active-nav");
        document.querySelector("#about-nav").classList.remove("active-nav");
        document.querySelector("#case-nav").classList.remove("active-nav");
    }
    // if you are at the about section and not at the case study section
    else if (scrollY >= sections[0].offsetTop-60 && scrollY < sections[1].offsetTop-60) {
        document.querySelector("#about-nav").classList.add("active-nav");
        document.querySelector("#home-nav").classList.remove("active-nav");
        document.querySelector("#case-nav").classList.remove("active-nav");
    }
    // if you are past the about section and at the case study section
    else if (scrollY > sections[0].offsetTop-60 && scrollY >= sections[1].offsetTop-60) {
        document.querySelector("#case-nav").classList.add("active-nav");
        document.querySelector("#about-nav").classList.remove("active-nav");
        document.querySelector("#home-nav").classList.remove("active-nav");
    }
}
const home = document.querySelector('#home-nav')
const about = document.querySelector('#about-nav')
const caseStudy = document.querySelector('#case-nav')
const aboutButton = document.querySelector('#about-button')
const caseButton = document.querySelector('#case-study-button')
home.addEventListener("click", () => {
    document.querySelector('#fold').scrollIntoView({
        behavior: 'smooth'
      });
})
about.addEventListener("click", () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
})
caseStudy.addEventListener("click", () => {
    document.querySelector('#case-studies').scrollIntoView({
        behavior: 'smooth'
      });
})
aboutButton.addEventListener("click", () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
})
caseButton.addEventListener("click", () => {
    document.querySelector('#case-studies').scrollIntoView({
        behavior: 'smooth'
      });
})

