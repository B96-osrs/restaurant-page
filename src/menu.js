function createMenuContainer(mainDiv) {
    let container = document.createElement("div");
    container.classList.add("menu-container")
    mainDiv.appendChild(container);
    console.log("menucontainer created");
    container.appendChild(createMenuItem("Margarita","Tomato sauce, Mozarella, Oregano, Garlic","11$","./img/margarita.jpg"));
    container.appendChild(createMenuItem("Carbonara","Tomato sauce, Cheddar, Oregano, Garlic, Mushrooms, Bacon","14$","./img/carbonara.jpg"));
    container.appendChild(createMenuItem("Pepperoni","Tomato sauce, Cheese, Oregano, Pepperoni, Garlic","13$","./img/pepperoni.jpg"));
    return container;
}


function printMenu(parent) {
    let menuItemOne = document.createElement("div");
    menuItemOne.classList.add("menu-item");
    parent.appendChild(menuItemOne);
}

function createMenuItem(name, ingredientList, price, imageSource) {
    let card = document.createElement("div");
    card.classList.add("card");

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
    card.appendChild(itemImage);
    card.appendChild(itemName);
    card.appendChild(itemIngredient);
    card.appendChild(itemPrice);
    return card;
}


export {
    createMenuContainer,
};