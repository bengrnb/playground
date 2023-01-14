const sections = document.querySelectorAll(".section");

window.onscroll = () => {
    // if you are not at the about section and not at the case study section
    if (scrollY < sections[0].offsetTop-60 && scrollY < sections[1].offsetTop-60) {
        document.querySelector("#home-nav").classList.add("active-nav");
        document.querySelector("#about-nav").classList.remove("active-nav");
        document.querySelector("#case-nav").classList.remove("active-nav");
        console.log("At fold")
    }
    // if you are at the about section and not at the case study section
    else if (scrollY >= sections[0].offsetTop-60 && scrollY < sections[1].offsetTop-60) {
        document.querySelector("#about-nav").classList.add("active-nav");
        document.querySelector("#home-nav").classList.remove("active-nav");
        document.querySelector("#case-nav").classList.remove("active-nav");
        console.log("At about")
    }
    // if you are past the about section and at the case study section
    else if (scrollY > sections[0].offsetTop-60 && scrollY >= sections[1].offsetTop-60) {
        document.querySelector("#case-nav").classList.add("active-nav");
        document.querySelector("#about-nav").classList.remove("active-nav");
        document.querySelector("#home-nav").classList.remove("active-nav");
        console.log("At case study")

    }
}