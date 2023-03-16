// const IndexNav = () => {
//     return <p>Look here</p>
// }
document.querySelector("#index-navigation").innerHTML =
`<nav>
    <div class="nav-container">
        <div class="nav-items-container">
            <div class="nav-item">
                <a href="./" id="home-nav" class="active-nav">Home</a>
                <div id="home-nav-line" class="nav-line-active"></div>
            </div>
            <div class="nav-item">
                <a href="./#about" id="about-nav" class="inactive-nav">About</a>
                <div id="about-nav-line" class="nav-line-inactive"></div>
            </div>
            <div class="nav-item">
                <a href="./#case-studies" id="case-nav" class="inactive-nav">Projects</a>
                <div id="case-nav-line" class="nav-line-inactive"></div>
            </div>
            <div class="nav-item">
                <a href="./#design-work" id="design-nav" class="inactive-nav">Design Work</a>
                <div id="design-nav-line" class="nav-line-inactive"></div>
            </div>
        </div>
    </div>
</nav>`