function checkIncreasingMode(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        return "Strict mode";
    } else if (num1 <= num2 && num2 <= num3) {
        return "Soft mode";
    } else {
        return "Not increasing";
    }
}

function checkMode() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const num3 = parseFloat(document.getElementById('number3').value);

    const result = checkIncreasingMode(num1, num2, num3);
    document.getElementById('result').textContent = `Result: ${result}`;
}
