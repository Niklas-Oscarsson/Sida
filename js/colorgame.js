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


function init(){
  //Game initiation
  Display.textContent=picked;
  for (var i = 0;i<squares.length;i++){
    squares[i].addEventListener("click", function () {
      if(this.style.backgroundColor === picked){
        check.textContent="Correct";
        reset.textContent="Play again?"
        swap(squares);
        back.style.backgroundColor = this.style.backgroundColor;
      }
      else{
        this.style.backgroundColor = "#232323"
        check.textContent="fail!";
      }
  });
}
  //mode event
  for (var i=0;i<mode.length;i++){
  mode[i].addEventListener("click", function(){
    mode[0].classList.remove("active");
    mode[1].classList.remove("active");
    this.classList.add("active");
    this.textContent==="EASY" ? diff=3: diff=6;
    resetting();
  })
}
  //reset button
  reset.addEventListener("click", function () {
  resetting();
})
  resetting();
}
function resetting(){
  colors=genCol(diff);
  picked=pickColor();
  Display.textContent=picked;
  reset.textContent="New colors"
  check.textContent="";
  back.style.backgroundColor="steelblue";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    }
    else{
      squares[i].style.display="none";
    }
  }
}
function swap(any){
  for (var i = 0;i < any.length;i++){
    any[i].style.backgroundColor = picked;
  }
  head.style.backgroundColor = picked;
}
function pickColor(){
  var X= Math.floor(Math.random()* colors.length);
  return colors[X];
}
function genCol(num){
  var arr=[];
  for(var c=0;c<num;c++){
    arr.push(ranCol());
  }
  return arr;
}
function ranCol(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}
