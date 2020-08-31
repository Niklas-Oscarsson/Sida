var diff=6;
var colors=[];
var picked;
var squares= document.querySelectorAll(".square");
var Display=document.getElementById("pickedOne");
var check=document.getElementById("check");
var reset=document.getElementById("reset");
var head=document.getElementById("Head");
var back=document.querySelector("h1");
var mode=document.querySelectorAll(".difficult")

init();

/*
This function initializes the game
*/
function init() {
  //Game initiation
  Display.textContent=picked;
  
  // Iterate over the squares and add a click listener
  for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function () {
      // Check if the background color equals to the picked color
      if(this.style.backgroundColor === picked) {
        // Display the win
        check.textContent="Correct";
        reset.textContent="Play again?"
        swap(squares);
        back.style.backgroundColor = this.style.backgroundColor;
      } else {
        // Display the loss
        this.style.backgroundColor = "#232323"
        check.textContent="fail!";
      }
    });
  }
  
  // Iterate over the different modes and add a click listener
  for (let i=0; i < mode.length; i++){
    mode[i].addEventListener("click", function() {
      mode[0].classList.remove("active");
      mode[1].classList.remove("active");
      this.classList.add("active");
      // When clicked, the difficulty will be switched to easy
      this.textContent === "EASY" ? diff=3: diff=6;
      resetting();
    });
  }
  
  //Adding event listener for the reset button
  reset.addEventListener("click", function () {
    // When the buttion is clicked it will reset the game
    resetting();
  });
  
  resetting();
}

/*
This function will reset the game so a new round can be played
*/
function resetting(){
  // Genreate random colors based on the difficulty
  colors=genCol(diff);
  // Pick a random color from the generated colors
  picked=pickColor();
  
  // Displays the picked color
  Display.textContent=picked;
  reset.textContent="New colors"
  check.textContent="";
  back.style.backgroundColor="steelblue";
  
  // Iterate over the squares and set the background color to the respecive genreated color
  for (var i = 0; i < squares.length; i++) {
    // Checks if the color array is not null at the current index
    if(colors[i]) {
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    } else {
      // If there is no color avalible at the current index, the square will not be displayed
      squares[i].style.display="none";
    }
  }
}

/*
This function will swap the backgrond color of the tiles, with the header background color
*/
function swap(any) {
  for (let i = 0; i < any.length; i++){
    any[i].style.backgroundColor = picked;
  }
  head.style.backgroundColor = picked;
}

/*
This function will pick a color from the  
*/
function pickColor(){
  var X= Math.floor(Math.random()* colors.length);
  return this.colors[X];
}

/*
This function will generate a given amount of colors in from of an array 
*/
function genCol(num) {
  const arr = [];
  
  for(let c=0; c < num; c++){
    arr.push(ranCol());
  }
  
  return arr;
}

/*
This function will generate a random color
*/
function ranCol(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return "rgb(" + r +", " + g + ", " + b + ")";
}
