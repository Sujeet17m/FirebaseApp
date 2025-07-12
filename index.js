// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase , ref ,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// // console.log(add(10, 20));

// const appSettings = {
//     databaseURL : "https://playground-3fef2-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const moviesInDB = ref(database , "movies")

// const inputFieldEl = document.getElementById("input-field");
// const addButtonEl = document.getElementById("add-button");

// addButtonEl.addEventListener("click", function () {
//     let inputValue = inputFieldEl.value;

//     push(moviesInDB ,inputValue)

//     console.log(`${inputValue} added to the database`);
// });

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase , ref ,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://fproject-ee352-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database , "Shopping-List")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click",function(){
    let inputValue = inputFieldEl.value

    push(shoppingListInDB,inputValue)

    console.log(`${inputValue}`);
    
})

