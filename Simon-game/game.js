// Testing Jquery.
/*
$(document).ready( () => {
    alert("The DOM is ready");
});
// Same that 
$( () => {
    alert('The DOM is ready.');
});


*/

let gamePattern = [];
let buttonColours = [ "red", "blue", "green", "yellow" ];
let userClickedPattern = [];
let level = 0;
let started = false;
// on click do this.
$(".btn").on("click", function(){
    // Create a new variable  to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    // adds th clicked button to th array.
    userClickedPattern.push(userChosenColour);
    // In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. 
    playSound(userChosenColour);
    // animate the buttons.
    animatePress(userChosenColour);
    // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
        
});


$(document).on("keypress", function () {
    // If a key trigger our function the game starts, else I don't know.
    this ? nextSequence() : $("h1").text("Press a key to start.");
    started = true;
});


//Create a function called checkAnswer(), it should take one input with the name currentLevel.
function checkAnswer(currentLevel){
    //An if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // If the user got the most recent answer, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
            // Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);
            }
    } else {
        playSound("wrong");
        // adds  a class and change h1 text.
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        // After 200 milliseconds remove the "game-over" class
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        // Calls our function.
        startOver();
    }
}

// Generate a random number between 0 and 3.
function nextSequence(){
    //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
     userClickedPattern = [];
    // rounds a number to the nearest integer
    let randomNumber = Math.floor(Math.random() * 4 );
    // returns a random color from the array.
    let randomChosenColour = buttonColours[randomNumber];
    // adds the randomColor to gamePatern.
    gamePattern.push(randomChosenColour);
    // select our button by id and make some animations.
    $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    // adds 1 to level value.
    level++;
    // Sets a dynamic text 
    $("h1").text("Level "+ level);

};

// A function that plays a sound, takes a single input parameter called name.
function playSound(name){
    // Dynamic path
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

// Create a new function, takes a single input parameter called currentColour. 
function animatePress(currentColour){

    // add pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColour).addClass("pressed");

    // Remove the pressed class after a 100 milliseconds.
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }