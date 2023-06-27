
var randomNo1=Math.random();
randomNo1=randomNo1*6;
randomNo1=Math.floor(randomNo1);
randomNo1=randomNo1+1;

var randomDiceImage="dice"+randomNo1+".png";
var randomImageSource="images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNo1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"
}
else if (randomNumber2 > randomNo1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
else {
    document.querySelector("h1").innerHTML = "Draw!";
}