var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


// for (i = 0; i < squares.length; i++) {
//   squares[i].style.backgroundColor = colors[i];
// }
// for (i = 0; i < squares.length; i++) {
//   squares[i].addEventListener("click", function () {
//     alert("option was clicked");
//   });
// }

// for (i = 0; i <= squares.length; i++) {
//   squares[i].addEventListener("click", function () {
//     pickedColor = colors[1];
//     var clickedColor = this.style.backgroundColor;
//     if (pickedColor === clickedColor) {
//       alert("Right You are good at guessing!");
//     } else {
//       this.style.backgroundColor = "grey";
//       alert("Wrong Choice!");
//     }
//   });
// }

init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        // h1.style.background = clickedColor;
      } else {
        this.style.background = "#808080";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  
function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
    h1.style.background = "steelblue";
  }
  resetButton.addEventListener("click", function () {
    reset();
  });
  function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
      //change each color to match given color
      squares[i].style.background = color;
    }
  }
  
  function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
      //get random color and push into arr
      arr.push(randomColor());
    }
    //return that array
    return arr;
  }
function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from  0 -255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from  0 -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}





