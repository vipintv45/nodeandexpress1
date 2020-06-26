
var x = document.getElementById("exampleInputEmail1")

function ValidateEmail()
{
    
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(x.value.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");

return false;
}
}