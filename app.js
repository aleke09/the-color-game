var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector('#reset');
var modeBtns = document.querySelectorAll(".mode"); 

init();

function init(){

    setUpModeBtn();

    listenerForSquares();
    
    reset();
}

function setUpModeBtn(){
    for (var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener('click', function(){
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function listenerForSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listener to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.background;
            // compare color to pickedcolor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!!!";
                resetBtn.textContent = 'Play Again?';
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
            
        });
    }
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    resetBtn.textContent = "new color";
    messageDisplay.textContent= "";
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block'; 
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = ' steelblue';
}

// easyBtn.addEventListener('click', function(){
//     numOfSquares = 3;
//     easyBtn.classList.add('selected');
//     hardBtn.classList.remove('selected');
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     messageDisplay.textContent= "";
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if (colors[i]){
//             squares[i].style.background = colors[i];
//         }else{
//             squares[i].style.display = 'none';
//         }
//     }
//     h1.style.background = ' steelblue';
// });

// hardBtn.addEventListener('click', function(){
//     numOfSquares = 6;
//     easyBtn.classList.remove('selected');
//     hardBtn.classList.add('selected');
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     messageDisplay.textContent= "";
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.display = 'block';
//     }
//     h1.style.background = ' steelblue';
// });

resetBtn.addEventListener('click', function(){
    reset();
    // // generate random colors
    // colors = generateRandomColors(numOfSquares);
    // // pick a new random color from array
    // pickedColor = pickColor();
    // this.textContent = "new color";
    // messageDisplay.textContent= "";
    // // change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // // change colors of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = ' steelblue';
});

function changeColors(color){
    // loop through al squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.background = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    // pick a 'red' from 0 - 255
   var r = Math.floor(Math.random() * 256);
    // pick a 'green' from 0 - 255
   var g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0 - 255
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")"

}