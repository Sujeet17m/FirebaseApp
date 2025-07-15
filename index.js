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

// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import {getDatabase , ref ,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL : "https://fproject-ee352-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }
// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database , "Shopping-List")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("confirmation-text")

// addButtonEl.addEventListener("click",function(){
//     let inputValue = inputFieldEl.value

//     push(shoppingListInDB,inputValue)

//     console.log(`${inputValue}`);

//     clearinp()

//     shoplist(inputValue)

// })

// function clearinp(){ 
//     inputFieldEl.value=""
// }

// function shoplist(itemValue){
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }



// let scrimbausers = {
//     "00" : "sindr@scr.com",
//     "01" : "mindr@scr.com",
//     "02" : "vindr@scr.com"
// }

// // console.log(Object.values(scrimbausers));
// // console.log(Object.keys(scrimbausers));
// console.log(Object.entries(scrimbausers));

// let scrimbaUsersEmails = {
//     "01" : "abc @scr.com",
//     "02" : "def@scr.com"
// }
// console.log(Object.values(scrimbaUsersEmails));

// let scrimbaUsersIDs = {
//     "03" : "abcdef@scr.com",
//     "04" : "deffek@scr.com"
// }
// console.log(Object.keys(scrimbaUsersIDs));


// let scrimbaUsersEntries = {
//     "01" : "abcijk@scr.com",
//     "02" : "deflmn@scr.com"
// }
// console.log(Object.entries(scrimbaUsersEntries));


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://playground-3fef2-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const booksInDB = ref(database, "books")

// const booksEl = document.getElementById("books")

// onValue(booksInDB, function(snapshot) {
//     let booksArray = Object.values(snapshot.val())
    
//     clearBooksListEl()
    
//     // Challenge: Write a for loop where you console log each book.
//     for (let i = 0; i < booksArray.length; i++) {
//         let currentBook = booksArray[i]
        
//         // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging
//         appendBookToBooksListEl(currentBook)
//     }
// })

// function clearBooksListEl() {
//     booksEl.innerHTML = ""
// }

// function appendBookToBooksListEl(bookValue) {
//     booksEl.innerHTML += `<li>${bookValue}</li>`
// }

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Firebase setup
const appSettings = {
    databaseURL: "https://playground-3fef2-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

// DOM elements
const booksEl = document.getElementById("books")
const inputEl = document.getElementById("book-input")
const addButtonEl = document.getElementById("add-button")

// Listen for realtime updates
onValue(booksInDB, function(snapshot) {
    if (snapshot.exists()) {
        let booksArray = Object.values(snapshot.val())
        clearBooksListEl()

        for (let book of booksArray) {
            appendBookToBooksListEl(book)
        }
    } else {
        booksEl.innerHTML = "<li>No books found.</li>"
    }
})

// Add book button click
addButtonEl.addEventListener("click", function() {
    let inputValue = inputEl.value.trim()
    if (inputValue !== "") {
        push(booksInDB, inputValue)
        inputEl.value = ""
    }
})

// Helpers
function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}
