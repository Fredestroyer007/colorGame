var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            // Set the value of numSquares
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            // Reset the game
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            
            // Compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);

    // Pick a new random color from array
    pickedColor = colors[pickColor()];
    
    // Change colorDisplay color from array
    colorDisplay.textContent = pickedColor;
        
    // Change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            // Show the squares
            squares[i].style.display = "block";
            // Add colors to squares
            squares[i].style.backgroundColor = colors[i];  
        } else {
            // Hide the squares
            squares[i].style.display = "none";
        }  
    }
    
    // Change color of h1
    h1.style.backgroundColor = "steelblue";
    
    // Reset the text for new game
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = ""
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color) {
    // Loop throught all squares
    for(var i = 0; i < colors.length; i++) {
        // Change each color to match given color   
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);

    return random;
}

function generateRandomColors(num) {
    // Make an array
    var arr = []

    // Repeat num times
    for(var i = 0; i < num; i++) {
        // Get random color and push into arr
        arr.push(randomColor());
    }

    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);

    // Pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);

    // Pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}