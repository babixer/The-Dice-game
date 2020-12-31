// First we generate random numbers by using JavaScript Maths

// Player 1

var randomNumber1 = Math.floor(Math.random() * 6 + 1); 

// Selecting the images within the folder

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


// Player 2


var randomNumber2 = Math.floor(Math.random()* 6 + 1);

// Selecting the images within the folder

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);



// Finally let users know who won by changing the innerHTML text 

 if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "Player 1 wins";


    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    } 


