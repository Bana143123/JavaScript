function evaluateNumbers() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.textContent = 'Please enter valid numbers.';
        return;
    }

    if (checkNumbers(num1, num2, num3)) {
        result.textContent = 'Condition met: Yes, one of the numbers is greater than or equal to 20 and less than at least one of the other two.';
    } else {
        result.textContent = 'Condition not met: No, none of the numbers meet the criteria.';
    }
}

function checkNumbers(a, b, c) {
    if (a >= 20 && (a < b || a < c)) {
        return true;
    }
    if (b >= 20 && (b < a || b < c)) {
        return true;
    }
    if (c >= 20 && (c < a || c < b)) {
        return true;
    }
    return false;
}
