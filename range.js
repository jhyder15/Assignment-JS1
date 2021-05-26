function check(num){
    if (num>=50 && num<=100)
    {
        document.getElementById("result").innerHTML = "The Number "+num+" lies between 50 to 100"
    }
    else
    {
        document.getElementById("result").innerHTML = "The Number "+num+" does not lies between 50 to 100"
    }
}