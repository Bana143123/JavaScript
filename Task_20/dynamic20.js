function conc(){
    const st1 = document.getElementById("str1").value;
    const st2 = document.getElementById("str2").value;
    const s1 = st1.slice(1,)
    const s2 = st2.slice(1,)
    const s = s1 + s2
    document.getElementById("result").innerText = `Concatenation of Two Strings After Exception of First Character : ${s}`
    
}