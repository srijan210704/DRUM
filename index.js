var drums = document.querySelectorAll(".drum");

// Add event listeners to each drum button
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML); // Trigger button animation
    });
}

// Add event listener for keydown event
document.addEventListener("keydown", function(event) {
    makesound(event.key); // Pass the event key directly
    buttonAnimation(event.key); // Trigger button animation
});

function makesound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Invalid key: " + key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // Add the pressed class to the button

    // Remove the pressed class after a short delay
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200); // slightly longer delay for animation completion
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // Add the pressed class to the button

    // Remove the pressed class after a short delay
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200); // slightly longer delay for animation completion
}