const blenderButton = document.getElementById("blender-button");
const blenderSound = document.getElementById("blender-sound");
const buttonSound = document.getElementById("blender-button-sound");

blenderButton.addEventListener("click", () => {
    const blender = document.getElementById("blender");
    blender.classList.toggle("active")
    hacerBrrBrr()
});

function hacerBrrBrr() {
    if (blenderSound.paused) {
        buttonSound.play();
        blenderSound.play();
    } else {
        buttonSound.play()
        blenderSound.pause()
        blenderSound.currentTime = 0;
    }
}