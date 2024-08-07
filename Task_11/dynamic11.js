function check(){
    let nu = parseInt(document.getElementById("input1").value);
    if (isNaN(nu)){
        document.getElementById("result").innerText = "Entered Input Was Not Valid number .";
    }
    if (nu%3 == 0 || nu%7 == 0){
        document.getElementById("result").innerText = `The Given Number ${nu} Was Multiple of 3 or 7 .`;
    }

}