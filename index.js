import { add } from './function.js';

console.log(add(10, 20));

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value;
    console.log(inputValue);
});

