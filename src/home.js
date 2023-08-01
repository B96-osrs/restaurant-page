function createHomeContainer(mainDiv) {
    let container = document.createElement("div");
    container.classList.add("home-container")
    mainDiv.appendChild(container);
    console.log("homecontainer created");

    printHeadline(container);
    printHomeImage(container);
    printAbout(container);
    return container;
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
    aboutText.textContent = "In the L'Osteria, the door opens and you immediately feel like you're in a typical Italian osteria: People - families, friends, couples, young and old - come together to eat well." +  
    "It's a bit loud, lively, and the delicious scent of authentic Italian cuisine fills the air. It's an open, welcoming place where you can be yourself and feel at home."
    parent.appendChild(aboutText);
}


export {
    createHomeContainer,
};