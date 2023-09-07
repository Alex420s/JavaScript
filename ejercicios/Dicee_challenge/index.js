var randomNumber1 = Math.floor(Math.random() * 6) +1; // 1-6

var randomDiceImage = "dice" + randomNumber1 +".png"; // "dice1.png - dice6.png"

var randomIMageSource = "images/" +randomDiceImage; //"images/dice#.png"

var image1 = document.querySelectorAll("img")[0]; //img 1° tag

image1.setAttribute("src", randomIMageSource) // Dynamic image1 source


var randomNumber2 = Math.floor(Math.random() * 6) +1; // 1-6

var randomIMageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomIMageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2  wins!";   
}
else {
    document.getElementsByTagName("h1").innerHTML = "Draw!";
}