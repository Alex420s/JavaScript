var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    /* Our code will go through all of the buttons in turn, selecting them and adding the event listener,
    until the end of all our buttons.
    */
   // when we click the button the event listener will trigger the function
    document.querySelectorAll(".drum")[i].
    addEventListener("click", function() {
    // the button that triggered the event.
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    

    });
}

// Add an EventListener and calls our makeSound function.
document.addEventListener('keydown', function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key){
        case'w':
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

    // default covers all of the other scenarios that we haven't specified.
        default: console.log(key);
    }
}

// Sets an animation using the key pressed.

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }