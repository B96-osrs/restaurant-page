import image1 from "./img/margarita.jpg";
import image2 from "./img/carbonara.jpg";
import image3 from "./img/pepperoni.jpg";
import image4 from "./img/hawai.jpg";
import image5 from "./img/vegetarian.jpg";
import image6 from "./img/mushroom.jpg";

function createMenuContainer(mainDiv) {
    let container = document.createElement("div");
    container.classList.add("menu-container")
    mainDiv.appendChild(container);
    console.log("menucontainer created");
    container.appendChild(createMenuItem("Margarita","Tomato sauce, Mozarella, Oregano, Garlic","11$",image1));
    container.appendChild(createMenuItem("Carbonara","Tomato sauce, Cheddar, Oregano, Garlic, Bacon, Mushrooms","14$",image2));
    container.appendChild(createMenuItem("Pepperoni","Tomato sauce, Cheese, Oregano, Pepperoni, Garlic","13$",image3));
    container.appendChild(createMenuItem("Hawaiian","Tomato sauce, Cheese, Oregano, Pineapple","12$",image4));
    container.appendChild(createMenuItem("Vegetarian","Tomato sauce, Cheese, Oregano, Garlic, Spinach, Artichoke","13$",image5));
    container.appendChild(createMenuItem("Mushroom","Tomato sauce, Oregano, Garlic, Mushroom, Goat Cheese","13$",image6));
    return container;
}

function createMenuItem(name, ingredientList, price, imageSource) {
    let card = document.createElement("div");
    card.classList.add("card");

    let itemImage = document.createElement("img");
    itemImage.src = imageSource;

    let itemName = document.createElement("div");
    itemName.setAttribute("id","card-name");
    itemName.textContent = name;

    let itemIngredient = document.createElement("div");
    itemIngredient.setAttribute("id","card-ingredient");
    itemIngredient.textContent = ingredientList;

    let itemPrice = document.createElement("div");
    itemPrice.setAttribute("id","card-price");
    itemPrice.textContent = price;
    console.log(imageSource);
    card.appendChild(itemName);
    card.appendChild(itemImage);
    card.appendChild(itemIngredient);
    card.appendChild(itemPrice);
    return card;
}

export {
    createMenuContainer,
};