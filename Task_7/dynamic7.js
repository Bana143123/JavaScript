function Sum(){
    const num1 = parseInt(document.getElementById("input1").value);
    const num2 = parseInt(document.getElementById("input2").value);

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerText = "The Entered Numbers Are Not Valid";
        return;
    };
    let sum = num1 + num2;
    if (num1 === num2){
        sum *=3;
    };
    document.getElementById("result").innerText = `Result : ${sum} `;

};