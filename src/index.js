import {createHomeContainer} from "./home.js";
import {createMenuContainer} from "./menu.js";
import {createContactContainer} from "./contact.js";
import {navigationBar} from "./navigation.js";
import "./style.css";


const mainContent = document.querySelector(".content");
console.log(mainContent);
const navBar = navigationBar(mainContent);
navBar.printNav();
createHomeContainer(mainContent);

function clearPage() {
    mainContent.removeChild(mainContent.lastChild); //clear previous content
}

navBar.homeButton.addEventListener("click", function(event) {
    clearPage();
    navBar.printNav();
    createHomeContainer(mainContent);

});

navBar.menuButton.addEventListener("click", function(event) {
    clearPage();
    navBar.printNav();
    createMenuContainer(mainContent);

});
navBar.contactButton.addEventListener("click", function(event) {
    console.log("contact menu created");
    clearPage();
    createContactContainer(mainContent);

});








