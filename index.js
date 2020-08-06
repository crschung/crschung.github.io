function playBGM(){
    var myAudio = new Audio('music/Our Moment - Full Lyrics Video Persona 3 Dancing Moon Night.mp3');
    if(myAudio.duration > 0 || !myAudio.paused){
      myAudio.pause();
    }
    else{
      myAudio.play();
    }
}
