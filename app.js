var volumenControl = document.querySelector("volumeControl");
volumeControl.addEventListener("change", changeVolume);

function changeVolume(event){
  player.volume = volumenControl.value;
}
function initialize(event)

var player = document.querySelector("audio");
player.addEventListener("play", hello);

function hello(event){
  console.log("hello");
  console.log(event);
}

var skipbutton = document.querySelector("skipButton");
skipButton.addEventListener("click", playmusic);

var rewindButton = document.querySelector("rewindButton");
rewindButton.addEventListener("click", playmusic);


var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMusic);


function playMusic(event){
   player.play();
}
window.addEventListener("load", initialize);

function initialize(event){
   pauseButton.hidden = true;
}
var skipButton = document.querySelector("#skipButton");
skipButton.addEventListener("click", skip10sec);

function skip10sec(event){
   player.currentTime = player.currentTime + 10;
}

function back10sec(event){
  player.currentTime = player.currentTime - 10;

}
