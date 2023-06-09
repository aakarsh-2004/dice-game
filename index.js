
function diceGame(){

    var randomNumberOne = Math.floor(Math.random()*6) + 1
    var randomNumberTwo = Math.floor(Math.random()*6) + 1

    var imageOne = document.querySelector('.img1');
    var myRslt = 0
    imageOne.addEventListener('click', function() {
        var finalResult = "./images/dice" + String(randomNumberOne) + ".png"
        document.querySelector('.img1').setAttribute("src", finalResult);
        var imageTwo = document.querySelector('.img2');
        var finalResult = "./images/dice" + String(randomNumberTwo) + ".png"
        document.querySelector('.img2').setAttribute("src", finalResult);
        showWinner();
        playMore();
    })

function showWinner() {
    document.querySelector(".result").classList.toggle("result-clicked");
    if (randomNumberOne > randomNumberTwo) {
        document.querySelector(".result-clicked").innerHTML = "Player One Wins!"
    }
    else if (randomNumberOne === randomNumberTwo) {
        document.querySelector(".result-clicked").innerHTML = "It is a Draw!"
    }
    else {
        document.querySelector(".result-clicked").innerHTML = "Player Two wins!"
    }
}


function playMore() {
    var usrChoice = prompt("Do you want to play more (Yes/No)").toUpperCase();
    if (usrChoice === "YES") {
        diceGame()
    }
}
}
diceGame()


