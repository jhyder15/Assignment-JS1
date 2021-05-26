
var temp;

function convertTofahr(celsius) 
{
    console.log("Celsius Temp : "+ celsius);
    temp = Math.round(celsius);
    var fahrenheit = Math.round(temp * 9 / 5 + 32);
    document.getElementById("result").innerHTML = temp+'\xB0C is ' + fahrenheit + ' \xB0F.';
    console.log("Temp in Fahrenheit : "+ fahrenheit);
}
function convertTocel(fahr) 
{
    console.log("Fahrenheit Temp : "+ fahr);
    temp = Math.round(fahr);
    var celsius = Math.round((temp-32)* 5 / 9);
    document.getElementById("result2").innerHTML = temp+' \xB0F is ' + celsius + '\xB0C .';
    console.log("Temp in Celsius : "+ celsius);
}