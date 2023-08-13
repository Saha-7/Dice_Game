const dice = document.getElementById('dice-btn');
const reset = document.getElementById('reset-btn');
let isGameActive = true; // Variable to track game status
let scores = [0, 0]; // Player scores

function diceGame() {
    if (!isGameActive) return; // Exit function if game is disabled

    // DICE 1
    var randomDice = Math.floor((Math.random() * 6) + 1);
    var diceLocation = "img/" + "Dice-" + randomDice + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    // DICE 2
    var randomDice2 = Math.floor((Math.random() * 6) + 1);
    var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

    // Update scores
    scores[0] += randomDice;
    scores[1] += randomDice2;

    // Update scoreboard
    document.getElementById("score1").textContent = scores[0];
    document.getElementById("score2").textContent = scores[1];

    // Checking for a winner
    if (scores[0] >= 30 || scores[1] >= 30) {
        isGameActive = false;
        if (scores[0] > scores[1]) {
            document.querySelector("h1").innerHTML = " &#128681; Player 1 Wins! 🏆";
        } else if (scores[0] < scores[1]) {
            document.querySelector("h1").innerHTML = "🏆 Player 2 Wins! &#128681;";
        } else {
            document.querySelector("h1").innerHTML = "&#128681; It's a Draw! &#128681;";
        }
        dice.innerHTML = "Game Over";
    } else {
        dice.innerHTML = "Roll Dice";
    }
}

function resetGame() {
    isGameActive = true; // Enable the game
    scores = [0, 0]; // Reset scores
    document.querySelector("h1").innerHTML = ""; // Clear winner message
    document.getElementById("score1").textContent = "0"; // Reset scoreboard
    document.getElementById("score2").textContent = "0";
    const img1 = document.querySelectorAll("img")[0];
    const img2 = document.querySelectorAll("img")[1];
    img1.setAttribute("src", "img/Dice-1.png");
    img2.setAttribute("src", "img/Dice-1.png");
    dice.innerHTML = "Roll Dice"; // Change button text back
}



