
var p= document.getElementById("exampleInputPassword1");
var e= document.getElementById('exampleInputEmail1');
 function validate()
 {
    
     if(e.value!="" && p.value !="")
     {
         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         let passexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

         if(e.value.match(mailformat))
             {
                 if(p.value.length<8){
                     alert("Password is too short");
                     return false;
                }
                 else 
                {   
                    if(passexp.test(p.value)==false)
                        {
                        alert("Enter valid password");
                        return false;
                        }
                    else{
                    
                     return true;
                        }
                }
             }
         else
             {
             alert("You have entered an invalid email address!");

             return false;
             }
     }
     else
     alert("Email or Password cannot be empty");
     return false;
 }

