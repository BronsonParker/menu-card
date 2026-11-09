// Setting variables and stuff for the menu form when parsed
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

// Makes Submit Button do its thang
function handleSubmit(event) {
    // Keeps page from reloading after you use button
    event.preventDefault();
    // Parses the JSON into readable objects
    let menu = JSON.parse(input.value);
    // This is what puts the count into the text area we made for it
    count.textContent = "We have " + menu.length + " items on the menu."
    // This is what puts the menu items in the area we made
    menuText.textContent = "";
    for (let i= 0; i < menu.length; i++) {
        menuText.textContent = menuText.textContent + menu[i].name + " - $" + menu[i].price + "\n";
    }
}

form.addEventListener("submit", handleSubmit);


