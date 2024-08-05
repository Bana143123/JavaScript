
function Diff(){
    const input=document.getElementById("input1").value;
    const d = parseInt(input)
    console.log(d)
    if (isNaN(d)){
        document.getElementById("result").innerText="Please Enter Correct Input Number";
    }else{
        const ext = d - 13;
        document.getElementById("result").innerText= `The Final Result was ${ext*2}`;
    };
};
