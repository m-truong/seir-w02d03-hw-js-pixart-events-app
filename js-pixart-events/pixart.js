const input = document.querySelector("input");
const form = document.querySelector("form");
const brush = document.querySelector(".brush"); 
const body = document.querySelector("body");


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let userInput = input.value;
    brush.style.background = userInput;
});

const squares = () => {
    for (let k = 0; k < 8000; k++) {
        let squareDiv;
        squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.addEventListener("mousemove", (evt) => {
            squareDiv.style.background = input.value;
        });
        body.appendChild(squareDiv);
    }
}

squares();


