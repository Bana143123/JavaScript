function getMiddleThreeCharacters() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    if (inputString.length < 3 || inputString.length % 2 === 0) {
        resultElement.textContent = "The string length must be odd and at least 3 characters long.";
        return;
    }

    const middleIndex = Math.floor(inputString.length / 2);
    const result = inputString.substring(middleIndex - 1, middleIndex + 2);

    resultElement.textContent = `The middle three characters are: "${result}"`;
}
