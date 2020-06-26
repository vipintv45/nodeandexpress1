const express= require('express')
const signinRoutes = express.Router();
const Userdata = require('../model/Userdata')


function router(nav)
{
signinRoutes.get('/',function(req,res)
    {
    res.render("signin",{nav})
   
    })


signinRoutes.post('/validate',function(req,res){
    // res.send("hi")
var email=req.body.email;
console.log(email);
var password=req.body.password;
Userdata.findOne({email :email, password:password},function(err,user){
    if(err){
        console.log(err)
    alert(err)
    return res.status(500).send();
    }
    if(!user){
       
        // return res.render('signin',{nav});
        return res.redirect('/signin');
     //   return res.status(404).send("Invlid Email or Password");// .....EE portionol doubt und
        // alert("invalid credentials");
        // res.redirect('signin');
    }
res.redirect('/books')
    
})


})

 return signinRoutes
}
module.exports= router;


