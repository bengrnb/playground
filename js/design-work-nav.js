document.querySelector("header").innerHTML =
`<nav>
    <div class="nav-container">
        <div class="nav-items-container">
            <div class="nav-item">
                <a href="./" id="home-nav" class="inactive-nav">Home</a>
                <div id="home-nav-line" class="nav-line-inactive"></div>
            </div>
            <div class="nav-item">
                <a href="./#about" id="about-nav" class="inactive-nav">About</a>
                <div id="about-nav-line" class="nav-line-inactive"></div>
            </div>
            <div class="nav-item">
                <a href="./#projects" id="case-nav" class="inactive-nav">Projects</a>
                <div id="case-nav-line" class="nav-line-inactive"></div>
            </div>
            <div class="nav-item">
                <a href="./#design-work" id="design-nav" class="active-nav">Design Work</a>
                <div id="design-nav-line" class="nav-line-active"></div>
            </div>
        </div>
    </div>
</nav>
<div class="nav-buttons-container">
<a href="https://www.linkedin.com/in/bengrnb/" class="nav-buttons" target="_blank">Linkedin</a>
<a href="./files/BGreenberg-Resume.pdf" target="_blank" class="nav-buttons">Resume</a>
</div>`