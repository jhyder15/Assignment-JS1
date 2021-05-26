var num1 = parseInt(prompt("Enter First Number:"));
var num2 = parseInt(prompt("Enter Second Number:"));
var num3 = parseInt(prompt("Enter Third Number:"));

console.log(num1, num2, num3);

if ( num1 >= num2 && num1 >= num3)
{
    document.write("The Largest Number : " + num1);
    console.log("The Largest Number : " + num1);
}
else if(num2 >= num1 && num2 >= num3)
{
    document.write("The Largest Number : " + num2);
    console.log("The Largest Number : " + num2);
    
}
else{
    document.write("The Largest Number : " + num3);
    console.log("The Largest Number : " + num3);
}