
var count = [];
var secondsCount = 0;

var start = function(){
  addEvents();
  count = 0;
  setTimeout(function(){ alert("You clicked on " +count+ " pictures");}, 20000);
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