var numSquares = 6; //number of squares
var colors = []; //array of colors
var pickedColor; //color to guess

var squares = document.querySelectorAll(".square"); //select all squares
var colorDisplay = document.querySelector("#color-display"); //select color display
var messageDisplay = document.querySelector("#message"); //select message
var h1 = document.querySelector("h1"); //select h1
var resetButton = document.querySelector("#reset") //select reset button;
var modeButtons = document.querySelectorAll(".mode"); //select mode buttons
var easyButton = document.querySelector(".mode"); //select easy button

init(); //start game

function init() { //start game
	colorDisplay.textContent = pickedColor; //display color

	setupSquares(); //setup squares
	setupMode(); //setup mode
	reset(); //reset game
}

resetButton.addEventListener("click", function () { //reset button
	reset(); //reset game
});

function setupSquares() { //setup squares
	for (var i = 0; i < squares.length; i++) { //loop through squares
		squares[i].style.backgroundColor = colors[i]; //set background color

		squares[i].addEventListener("click", function () { //add click event
			var clickedColor = this.style.backgroundColor; //get color of clicked square

			if (clickedColor === pickedColor) { //if correct
				messageDisplay.textContent = "Correct"; //display correct
				resetButton.textContent = "Play Again"; //change reset button text

				changeColors(pickedColor); //change all colors
			} else { //if incorrect
				this.style.backgroundColor = "#232323"; //change color to black
				messageDisplay.textContent = "try again"; //display try again
			}
		});
	}
}

function setupMode() { //setup mode 
	for (var i = 0; i < modeButtons.length; i++) { //loop through mode buttons

		modeButtons[i].addEventListener("click", function () { //add click event

			for (var i = 0; i < modeButtons.length; i++) { //loop through mode buttons
				modeButtons[i].classList.remove("selected"); //remove selected class
			}
			this.classList.add("selected"); //add selected class
			if (this.textContent === "Easy") { //if easy
				numSquares = 3; //set number of squares to 3
			} else { //if hard
				numSquares = 6; //set number of squares to 6
			}
			reset(); //reset game
		});
	}
}

function reset() { //reset game
	colors = genRandomColors(numSquares); //generate random colors
	pickedColor = chooseColor(); //choose random color
	colorDisplay.textContent = pickedColor; //display color

	h1.style.backgroundColor = "#2C8E99"; //change h1 background color
	resetButton.textContent = "New Colors"; //change reset button text
	messageDisplay.textContent = ""; //clear message

	for (var i = 0; i < squares.length; i++) { //loop through squares
		if (colors[i]) { //if color exists
			squares[i].style.display = "block"; //display square
			squares[i].style.backgroundColor = colors[i]; //set background color
		} else { //if color does not exist
			squares[i].style.display = "none"; //hide square
		}
	}
}

function changeColors(color) { //change colors
	for (var i = 0; i < squares.length; i++) { //loop through squares
		squares[i].style.backgroundColor = color; //set background color
		h1.style.backgroundColor = color; //set h1 background color
	}
}

function chooseColor() { //choose random color
	var random = Math.floor(Math.random() * colors.length); //generate random number
	return colors[random]; //return random color 
}

function genRandomColors(num) { //generate random colors
	var arr = []; //create array
	for (var i = 0; i < num; i++) { //loop through num
		arr.push(makeColor()); //push random color to array
	}
	return arr; //return array
}

function makeColor() { //generate random color
	var r = Math.floor(Math.random() * 256); //generate random number
	var g = Math.floor(Math.random() * 256); //generate random number
	var b = Math.floor(Math.random() * 256); //generate random number
	return "rgb(" + r + ", " + g + ", " + b + ")"; //return random color
}