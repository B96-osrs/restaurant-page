function createContactContainer(mainDiv) {
    let container = document.createElement("div");
    container.classList.add("contact-container")
    mainDiv.appendChild(container);
    console.log("contactContainer created");
    printContactDetails(container);
    printHours(container);
    printLocationImage(container);
}



function printHours(parent) {
    let listOfWorkDays = document.createElement("ul");
    listOfWorkDays.setAttribute("id","hours-list");
    parent.appendChild(listOfWorkDays);
    
    createWorkDay("Monday","09:00 - 22:00",listOfWorkDays);
    createWorkDay("Tuesday","09:00 - 22:00",listOfWorkDays); 
    createWorkDay("Wednesday","09:00 - 22:00",listOfWorkDays); 
    createWorkDay("Thursday","09:00 - 22:00",listOfWorkDays); 
    createWorkDay("Friday","09:00 - 01:00",listOfWorkDays); 
    createWorkDay("Monday","09:00 - 01:00",listOfWorkDays); 
    createWorkDay("Monday","Closed",listOfWorkDays); 
}


function createWorkDay(weekDay, openHours, parentNode) {
    let day = document.createElement("li");
    day.textContent = weekDay + ": " + openHours;
    parentNode.appendChild(day); 
}

function printLocationImage(parent) {
    let locationImage = document.createElement("div");
    locationImage.setAttribute("id","location-image");
    parent.appendChild(locationImage);
}

function printContactDetails(parent) {
    let contactInformation = document.createElement("div");
    contactInformation.classList.add("contact-information");
    parent.appendChild(contactInformation);
    let adressText = document.createElement("div");
    adressText.textContent = "Steinweg 17A";
    let phoneText = document.createElement("div");
    phoneText.textContent = "+43 678 951 4589"
    let emailText = document.createElement("div");
    emailText.textContent = "losteria@pizza.at"

    contactInformation.appendChild(adressText);
    contactInformation.appendChild(phoneText);
    contactInformation.appendChild(emailText);
}

export {
    createContactContainer,
};