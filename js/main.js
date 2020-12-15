function playTabSound() {
    var buttonsound = document.getElementById("clicksound")
    buttonsound.play()
}

function playHoverSound(soundobj) {
    var hoversound=document.getElementById("hoversound");
    hoversound.play();
}

function stopHoverSound(soundobj) {
    var hoversound=document.getElementById("hoversound");
    hoversound.pause();
    hoversound.currentTime = 0;
}