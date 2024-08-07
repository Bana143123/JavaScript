function Largest(){
    const n1 = parseInt(document.getElementById("number1").value);
    const n2 = parseInt(document.getElementById("number2").value);
    const n3 = parseInt(document.getElementById("number3").value);
    if (n1>n2 && n1>n3){
        document.getElementById("result").innerText = `${n1} is Greatest Number`
    }else if(n2>n3){
        document.getElementById("result").innerText = `${n2} is Greatest Number`
    }else{
        document.getElementById("result").innerText = `${n3} is Greatest Number`
    }
};