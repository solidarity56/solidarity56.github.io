//Defining variable based on unique ID

var audio1 = document.getElementById("audioID");
var audio2 = document.getElementById("audioID2");

//Example of an HTML Audio/Video Method

function playAudio1() {
  audio1.volume = 0.3;
  audio1.play();
}

function playAudio2() {
  audio2.volume = 0.3;
  audio2.play();
}