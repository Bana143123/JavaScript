function concatenateAndDisplay() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const resultElement = document.getElementById('result');

    
    const minLength = Math.min(string1.length, string2.length);

    const adjustedString1 = string1.substring(0, minLength);
    const adjustedString2 = string2.substring(0, minLength);

    const result = adjustedString1 + adjustedString2;

    resultElement.textContent = `Concatenated result: "${result}"`;
}
