var timer;
var count = [];
var secondsLeft = 20;

//Adds click events, resets count, sets timeout for alert, and changes button's 
//inner html to 20 for timer purposes
var start = function(){
  addEvents();
  count = 0;
  setTimeout(function(){ alert("You clicked on " +count+ " pictures");}, 20000);
  startTimer();
  document.getElementById("start").innerHTML = "20";
}

//Adds click events to every image
function addEvents(){
  for(var i = 0; i < document.getElementsByClassName("face").length; i++){
    document.getElementsByClassName("face")[i].addEventListener("click", counter)
  }
}

//Adds to count after each click and removes the click event for that image.
function counter(){
  count++;
  this.removeEventListener('click', counter);
}

//Adds click event for start button
document.getElementById("start").addEventListener("click", start);

//Starts timer
function startTimer(){
  secondsLeft = 20
  timer = setInterval(myTimer, 1000);
}

//Runs timer
function myTimer(){
  if(secondsLeft > 0){
    document.getElementById("start").innerHTML = secondsLeft-=1;
  }
  else{
    document.getElementById("start").innerHTML = "Start";
    clearInterval(timer);
  }
}