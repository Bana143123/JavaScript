function findingclosest(){
    const value1 = parseInt(document.getElementById("number1").value);
    const value2 = parseInt(document.getElementById("number2").value);
    const diff1 = Math.abs(value1 - 100);
    console.log(diff1)
    const diff2 = Math.abs(value2 - 100);
    console.log(diff2)
    if (diff1 > diff2){
        document.getElementById("result").innerText = `${value2} Was Closest Number.`;
    }else if(diff2>diff1){
        document.getElementById("result").innerText = `${value1} Was Closest Number.`;
    }else{
        document.getElementById("result").innerText = `Both ${value1} and ${value2} Have Equal Distance to 100.`;
    };
}