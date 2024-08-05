function str(){
    const st = document.getElementById("input1").value;
    console.log(typeof st)
    if (st.startsWith("Py")){
        document.getElementById("result").innerText = "Result Was :" + st;
    }else{
        new_st = "Py" + st;
        document.getElementById("result").innerText = "Result Was :" + new_st;
    };
};