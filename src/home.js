
function createContainer(mainDiv) {
    let container = document.createElement("div");
    container.classList.add("home-container")
    mainDiv.appendChild(container);
    console.log("createcontainer was executed");
    return container;
}

function navigationBar(parent) {
    let navBar = document.createElement("div");
    navBar.classList.add("nav-bar");
    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let contactButton = document.createElement("button");


    function printNav() {
        homeButton.setAttribute("id","home-button");
        homeButton.textContent = "Home";
        menuButton.setAttribute("id","menu-button");
        menuButton.textContent = "Menu";
        contactButton.setAttribute("id","contact-button");
        
        contactButton.textContent = "Contact";
        parent.appendChild(navBar);
        navBar.appendChild(homeButton);
        navBar.appendChild(menuButton);
        navBar.appendChild(contactButton);
    }
    return {homeButton, menuButton, contactButton,printNav};
}

function printHeadline(parent) {
    let headlineText = document.createElement("div");
    headlineText.textContent = "L'Osteria"
    headlineText.classList.add("home-headline");
    parent.appendChild(headlineText);
    console.log("prinheadline was executed");
    return headlineText;
}

function printHomeImage(parent) {
    let homeImage = document.createElement("div");
    homeImage.setAttribute("id","home-image");
    parent.appendChild(homeImage);
}

function printAbout(parent) {
    let aboutText = document.createElement("div");
    aboutText.setAttribute("id","about-text");
    aboutText.textContent = "In der L’Osteria geht die Türe auf und schon fühlt man sich wie in einer typisch italienischen Osteria: Hier kommen Menschen – Familien, Freunde, Pärchen, Jung und Alt – zusammen, um gut zu essen." +  
    "Es ist ein bisschen laut, lebhaft und über allem schwebt der köstliche Duft der echten italienischen Küche. Ein offener, herzlicher Ort, an dem man so sein darf, wie man ist und sich wie zu Hause fühlt."
    parent.appendChild(aboutText);
}


export {
    createContainer,
    navigationBar,
    printHeadline,
    printAbout,
    printHomeImage
};