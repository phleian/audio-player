
//audio playlist source was from MicroTech Tutorial
function soundtrack() {
  $('#soundtrack') [0].src = $('#playlist li a') [0];
  $('#playlist li a').click(function(e){
    e.preventDefault();
    $('#soundtrack') [0].src = this; // this allows the file to be play into the audio instead of opening it as a file.
    $('#soundtrack') [0].play();  
  });
};
soundtrack();
