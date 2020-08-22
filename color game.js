var numofSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mod");


init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();
}



function reset() {
	 colors = generateRandomColors(numofSquares);
	 
	 pickedColor = pickColor();
	 colorDisplay.textContent = pickedColor;
	 resetButton.textContent = "NEW COLORS";
	 messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
  	if(colors[i]){
  	   squares[i].style.display = "block";
  	   squares[i].style.background = colors[i];
  	} else {
  		squares[i].style.display = "none";
	}
 }
  	h1.style.background = "steelblue";  	 
}

resetButton.addEventListener("click", function(){
	reset();
})
   	
	function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
	
	// add click listeners to squares
    squares[i].addEventListener("click", function(){
    // grab colo of clicked square
		var clickedColor = this.style.background;
	// compare color to picked color 
	
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT!";
			resetButton.textContent = "PLAY AGAIN"
            changeColors(clickedColor);
			h1.style.background = pickedColor;
		} else {
			this.style.background = "skyblue";
			messageDisplay.textContent = "TRY AGAIN"
		}
	});
  }
	}




   	function setUpModeButtons() {
   		// mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numofSquares = 3: numofSquares = 6; 
	
		// if(this.textContent === "EASY"){
		// 	 numofSquares = 3;
		// } else {
		// 	numofSquares = 6;
		// }
	reset();
	  });
     }
   	}





	function changeColors(color) {
		for(var i = 0; i < squares.length; i++) {
  			squares[i].style.background = color;
		}
	}

	function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	}

	function generateRandomColors(num) {
		var  arr = [];
		for(var i = 0; i < num; i++ ) {
        arr.push(randomColor());
        }
		return arr;
	}

	function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"; 
	}