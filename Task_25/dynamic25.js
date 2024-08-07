function modifyString(str) {
    if (str.length > 0 && (str.charAt(0) === 'P' || str.charAt(str.length - 1) === 'P')) {
        if (str.charAt(0) === 'P') {
            str = str.substring(1);
        }
        if (str.charAt(str.length - 1) === 'P') {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
}

function modifyAndDisplayString() {
    const inputString = document.getElementById('inputString').value;
    const result = modifyString(inputString);
    document.getElementById('result').textContent = result;
}
