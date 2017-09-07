//buttons
var score = document.getElementById("score");
var clock = document.getElementById("clock");

//variables
var clicks = 0;//clicks
var timer = 15;//countdown timer
var beenClicked = false;
var intervalId

//functions
function tick() {
    timer--;
    clock.textContent = timer;
    if (timer === 0) {
        clearInterval(intervalId);
        displayScore();
        displayReward();
        showElement();
    }
}

function showElement() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
}


//Get number of clicks
//Display in element "final-score"
function displayScore() {
    var finalScore = document.getElementById('final-score');
    finalScore.textContent = "Score: " + clicks;
}

//Get element "reward"
//Display text dependant on number of clicks
function displayReward () {
    var reward = document.getElementById('reward')
    if (clicks <= 50) {
        reward.textContent = "You couldn't even beat my grandma.";
    } else if (51 <= clicks <= 100) {
        reward.textContent = "Good... Not great.";
    } else if (101 <= clicks <= 150) {
        reward.textContent = "Color me mildly impressed.";
    } else if (clicks >= 151) {
        reward.textContent = "God, is that you?";
    }
}

//event listenres

document.getElementById("click-button").onclick = function() {
    if (beenClicked === false) {
        beenClicked = true;
        intervalId = setInterval(tick, 1000);
    }
    clicks++;
    score.textContent = "Score: " + clicks;
}

document.getElementById("restart-button").onclick = function() {
    window.location.reload();
}

document.getElementById("restart-button-2").onclick = function() {
    window.location.reload();
}