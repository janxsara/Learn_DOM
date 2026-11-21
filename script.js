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

const testDiv = document.getElementById("testDiv");
const changeDivButton = document.getElementById("changeDivButton");

changeDivButton.addEventListener("click", function () {
    testDiv.textContent = "Der Bereich wurde verändert!";
    testDiv.style.backgroundColor = "lightblue";
    testDiv.style.padding = "20px";
});

const testTable = document.getElementById("testTable");
const addRowButton = document.getElementById("addRowButton");

addRowButton.addEventListener("click", function () {
    const row = testTable.insertRow(-1);

    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);

    nameCell.textContent = "Sara";
    ageCell.textContent = "20";
});

const testList = document.getElementById("testList");
const removeItemButton = document.getElementById("removeItemButton");

removeItemButton.addEventListener("click", function () {
    if (testList.children.length > 0) {
        testList.removeChild(testList.lastElementChild);
    }
});

const colorSelect = document.getElementById("colorSelect");
const colorOutput = document.getElementById("colorOutput");

colorSelect.addEventListener("change", function () {
    colorOutput.textContent = "Gewählte Farbe: " + colorSelect.value;
    colorOutput.style.color = colorSelect.value;
});

const testCanvas = document.getElementById("testCanvas");
const drawButton = document.getElementById("drawButton");
const context = testCanvas.getContext("2d");

drawButton.addEventListener("click", function () {
    context.fillStyle = "lightblue";
    context.fillRect(30, 30, 150, 80);
});

const testForm = document.getElementById("testForm");
const formOutput = document.getElementById("formOutput");

testForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const subject = testForm.elements.namedItem("subject").value;
    formOutput.textContent = "Dein Lieblingsfach: " + subject;
});