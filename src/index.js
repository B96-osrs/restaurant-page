import {createContainer, navigationBar, printHeadline, printAbout, printHomeImage} from "./home.js";
import "./style.css";

console.log("Setup was successfull!");
const mainContent = document.querySelector(".content");
console.log(mainContent);
const navBar = navigationBar(mainContent);
navBar.printNav();

navBar.homeButton.addEventListener("click", function(event) {
    const homeContainer = createContainer(mainContent);
    printHeadline(homeContainer);
    printHomeImage(homeContainer);
    printAbout(homeContainer);

});

navBar.menuButton.addEventListener("click", function(event) {

});





