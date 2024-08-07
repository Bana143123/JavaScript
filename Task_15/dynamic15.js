function inRange(num) {
    return (num >= 40 && num <= 60) || (num >= 70 && num <= 100);
}

function checkNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const inRange1 = inRange(num1);
    const inRange2 = inRange(num2);

    let result;

    if (inRange1 && inRange2) {
        result = "Both numbers are in the specified ranges.";
    } else if (inRange1) {
        result = "The first number is in the specified ranges.";
    } else if (inRange2) {
        result = "The second number is in the specified ranges.";
    } else {
        result = "Neither number is in the specified ranges.";
    }

    document.getElementById('result').textContent = result;
}
