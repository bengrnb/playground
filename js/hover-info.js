const projectCard = document.querySelectorAll(".project-card")
const projectDetails = document.querySelectorAll(".project-card-info-details")

projectCard.forEach(project => project.addEventListener('mouseenter', (e) => {
    e.target.children[1].children[1].classList.add('show')
    e.target.children[1].children[1].classList.remove('hide')
}))
projectCard.forEach(project => project.addEventListener('mouseleave', (e) => {
    e.target.children[1].children[1].classList.add('hide')
    e.target.children[1].children[1].classList.remove('show')
}))