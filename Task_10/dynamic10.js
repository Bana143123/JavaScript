function swapFirstLast() {
    const inputString = document.getElementById('inputString').value;

    if (inputString.length < 1) {
        document.getElementById('result').innerText = "Please enter a string with at least 1 character.";
        return;
    }


    if (inputString.length === 1) {
        document.getElementById('result').innerText = "Result: " + inputString;
        return;
    }

    const firstChar = inputString[0];
    const lastChar = inputString[inputString.length - 1];

    const newString = lastChar + inputString.slice(1, -1) + firstChar;

    document.getElementById('result').innerText = "Result: " + newString;
}
