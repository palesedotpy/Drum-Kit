
const buttonsList = document.querySelectorAll(".button");

function playSound(sound) {
    let audio = new Audio(`sounds/${sound}.wav`);
    audio.currentTime = 0;
    audio.play();
}

var buttonsMatches = {
    'a' : 'clap',
    's' : 'hihat',
    'd' : 'kick',
    'f' : 'openhat',
    'q' : 'boom',
    'e' : 'ride',
    'r' : 'snare',
    't' : 'tom',
    'v' : 'tink'
}

document.addEventListener("keydown", (event) => {
    let pressedKey = event.key;
    playSound(buttonsMatches[pressedKey]);
})

buttonsList.forEach((button) => {
    button.addEventListener("click", () => { 
        playSound(button.id);
        console.log(button.id);
    });
});