import {createHomeContainer, navigationBar,} from "./home.js";
import {createMenuContainer} from "./menu.js";
import "./style.css";

const mainContent = document.querySelector(".content");
console.log(mainContent);
const navBar = navigationBar(mainContent);
navBar.printNav();
createHomeContainer(mainContent);

function clearPage() {
    while(mainContent.childNodes.length > 1) {
        mainContent.removeChild(mainContent.lastChild); //clear previous content
    }
}

navBar.homeButton.addEventListener("click", function(event) {
    clearPage();
    createHomeContainer(mainContent);

});

navBar.menuButton.addEventListener("click", function(event) {
    clearPage();
    createMenuContainer(mainContent);

});
navBar.contactButton.addEventListener("click", function(event) {
    clearPage();
    createMenuContainer(mainContent);

});








