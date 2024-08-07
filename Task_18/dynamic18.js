function hasSameRightmostDigit(num1, num2, num3) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;
    const digit3 = num3 % 10;

    return (digit1 === digit2) || (digit1 === digit3) || (digit2 === digit3);
};

function checkDigits() {
    const num1 = parseInt(document.getElementById('number1').value, 10);
    const num2 = parseInt(document.getElementById('number2').value, 10);
    const num3 = parseInt(document.getElementById('number3').value, 10);

    const result = hasSameRightmostDigit(num1, num2, num3);
    document.getElementById('result').textContent = `Result: ${result ? "Two or more numbers have the same rightmost digit" : "No two numbers have the same rightmost digit"}`;
};
