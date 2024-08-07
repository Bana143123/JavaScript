function findLargest(){
    const n1 = parseInt(document.getElementById("number1").value);
    const n2 = parseInt(document.getElementById("number2").value);
    if ((n1 >= 40 && n1 <= 60) &&(n2 >= 40 && n2 <= 60)){
        document.getElementById("result").innerText = `${Math.max(n1,n2)} Was Largest Number`;
    }else
    {
        document.getElementById("result").innerText = "Both Numbers Must Be In Range of 40 - 60 range Inclusive."
    };

};