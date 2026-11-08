const textElement = document.getElementById("myDiv");
const changeTextButton = document.getElementById("changeTextBtn");

changeTextButton.addEventListener("click", function () {
    textElement.textContent = "Der Text wurde geändert!";
});

const myList = document.getElementById("myList");
const addItemButton = document.getElementById("addItemBtn");

addItemButton.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Neuer Eintrag";
    myList.appendChild(newItem);
});

const list = document.getElementById("myList");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
    const item = document.createElement("li");
    item.textContent = "Neuer Eintrag";
    list.appendChild(item);
});

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
    greeting.textContent = "Hallo " + nameInput.value + "!";
    nameInput.placeholder = "Noch einen Namen eingeben";
});

const testButton = document.getElementById("testButton");

testButton.addEventListener("click", function () {
    testButton.textContent = "Fertig!";
    testButton.disabled = true;
});