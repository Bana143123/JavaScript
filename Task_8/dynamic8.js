function Abs(){
    const diff = parseInt(document.getElementById("input1").value);
    console.log(diff)
    if (isNaN(diff)){
        document.getElementById("result").innerText = "The Entered Element Was Not Valid";
        return;
    }
    const difference = Math.abs(diff - 19);
    const result = diff > 19 ? difference * 3 : difference;
    document.getElementById("result").innerText = `The Calculating Absolute Difference Was ${result}`;

    };