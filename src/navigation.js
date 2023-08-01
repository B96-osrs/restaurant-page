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
    return {homeButton, menuButton, contactButton, printNav};
}


export {
    navigationBar,
};