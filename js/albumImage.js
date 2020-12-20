// plays audio on hover (would be better if an array is used but then it'll get too complicated)

function audioSoundTrackPlay() {
  var cali = document.getElementById('cali');
  cali.play();
}

//audio stops and will continue where it left off when the mouse hovered off when mouse hover on
function audioSoundTrackStop() {
  var cali = document.getElementById('cali');
  cali.pause();
  
}

//plays audio on hover

function mediaPlay() {
  var l85 = document.getElementById('l85')
  l85.play();
}

//stops audio on hover and will start again from zero when the mouse hovers on again
function mediaStop() {
  var l85 = document.getElementById('l85')
  l85.pause();
  l85.currentTime = 0;
}