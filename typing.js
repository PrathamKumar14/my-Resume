//jshint esversion: 6

var i = 0;
var txt = "Hey there ! I am Pratham a Web Developer.";
var speed = 100; /* The speed/duration of the effect in milliseconds */




function typeWriter() {

  if (i < txt.length) {
    if (i < 16) {
      document.getElementById("effect1").innerHTML += txt.charAt(i);
      i++;
    } else if (i >= 16 && i < 24) {
      document.getElementById("effect2").innerHTML += txt.charAt(i);
      i++;
    } else {
      document.getElementById("effect3").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }

}

setInterval(() => {
  setTimeout(function() {
    if (cursor) {
      document.getElementById('cursor').innerHTML = "|";
      document.getElementById('cursor').style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById('cursor').innerHTML = "|";
      document.getElementById('cursor').style.opacity = 1;
      cursor = true;
    }
  }, 3900);

}, 400);
