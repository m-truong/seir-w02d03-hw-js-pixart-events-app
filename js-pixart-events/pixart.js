console.log("Hello World");

// Cached DOM variables
const button = document.querySelector("set-color");
// Retreive the input.value 
const input = document.querySelector("input");
// Get form DOM element
const form = document.querySelector("form");
// Retrieve brush-element
const brush = document.querySelector(".brush"); // needs a .class-selector
// Create a div underneath 
// const div = document.querySelector("");


// When I click the "set Color" button
// form.addEventListener for enter or button click
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    // get the value of the input 
    let userInput = input.value; 
    // reassign the background-color using the userInput
    brush.style.background = userInput; 

    input.value = ""; 
});

const squares = () => {
    let squareDiv; 
    for (let k = 0 ; k < 20 ; k ++) {
        squareDiv = document.createElement("div");
        // .appendChild(squareDiv);
    }
}

squares(); 


// JS Button addsEventListener 
// button.addEventListener("click", () => {

// }); 




