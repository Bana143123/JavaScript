function valid(){
    const st = document.getElementById("string1").value;
    if (st.startsWith("Los") || st.startsWith("New")){
        document.getElementById("result").innerText = st;
    }else{
        document.getElementById("result").innerText = "  (blank)"
    }
}