function isLeapYear(year){
    if (year%4==0){
        if (year%100==0){
            if (year%400==0){
                return true
            }
            else{
                return false
            }
        }else{
            return true
        }
    }else{
        return false
    }
}

function checkLeapYear(){
   const out = document.getElementById("in").value
   const year = parseInt(out);
   if(isNaN(year)){
    document.getElementById("id").innerText="Kindly Enter the required input year";
   }else{
    const result = isLeapYear(year)
        ? `${year} was a Leap Year` 
        : `${year} was not a Leap Year`
    document.getElementById("res").innerText=result;
    
   }
};