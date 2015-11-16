var timer
var count = [];
var secondsLeft = 20

var start = function(){
  addEvents();
  count = 0;
  setTimeout(function(){ alert("You clicked on " +count+ " pictures");}, 20000);
  startTimer();
  document.getElementById("start").innerHTML = "20";
}

function addEvents(){
  for(var i = 0; i < document.getElementsByClassName("face").length; i++){
    document.getElementsByClassName("face")[i].addEventListener("click", counter)
  }
}

function counter(){
  count++;
  this.removeEventListener('click', counter);
}

document.getElementById("start").addEventListener("click", start);

function startTimer(){
  secondsLeft = 20
  timer = setInterval(myTimer, 1000);
}

function myTimer(){
  if(secondsLeft > 0){
    document.getElementById("start").innerHTML = secondsLeft-=1;
  }
  else{
    document.getElementById("start").innerHTML = "Start";
    clearInterval(timer);
  }
}