function revnpalin(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if (newString == str)
    {
        document.write("Your Entered string is Palindrome. " + newString);
    }
    else
    {
        document.write("Your Entered string is not a Palindrome. " + newString);
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = revnpalin(string);
console.log(result);