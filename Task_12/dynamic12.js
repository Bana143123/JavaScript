function checkRange() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);


    const inRange = (number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99);

    document.getElementById('result').innerText = "Result: " + inRange;
};
