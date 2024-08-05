let str = 'Hi All Welcome';
let interval = null;

function rotateString() {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    document.getElementById('output').innerHTML = str;
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(rotateString, 500);
    }
});

document.getElementById('stopButton').addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});
