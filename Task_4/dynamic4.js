const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const guess = parseInt(guessInput);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById('result').innerText = "Please enter a valid number between 1 and 10.";
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('result').innerText = "Good Work!";
    } else {
        document.getElementById('result').innerText = "Not matched. The correct number was " + randomNumber + ".";
    }
}
