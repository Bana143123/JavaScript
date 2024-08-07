function add(){
    const V1 = document.getElementById("str1").value;
    if (V1.length < 3){
        document.getElementById("result").innerText = `Length Of The String Must Be Greater Than Or Equal To 3`
    }else{
        const lat = V1.slice(V1.length-3,)
        const fin = lat + V1.slice(0,V1.length-3)
        document.getElementById("result").innerText = `The Expected Outcome Was : ${fin}`
    }
}