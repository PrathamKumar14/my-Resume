

var i = 0;
var txt = "Hey there ! I am Pratham a Web Developer.";
var speed = 100; /* The speed/duration of the effect in milliseconds */




  function typeWriter() {

    if (i < txt.length) {
      if(i < 16) {
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
