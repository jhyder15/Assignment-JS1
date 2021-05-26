
function message()
{
    var msg = document.getElementById('message').value;
    // console.log(msg);
    return msg;
}
function output(func)
{
    var msg1 = func();
    var user = document.getElementById('name').value;
    document.getElementById('result').innerHTML = user + "'s Message: "+ msg1;
}
