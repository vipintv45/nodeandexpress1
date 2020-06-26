const express= require('express')
const signupRoutes = express.Router();
const Userdata = require('../model/Userdata')


function router(nav)
{
    signupRoutes.get('/',function(req,res)
        {
        res.render("signup",{nav})
    
        })
    
    signupRoutes.post('/hai',function(req,res){
        
        
        // res.send("hi")
        var item =
        {
           
           name: req.body.name,
           email: req.body.email,
          password: req.body.password,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
         
        }
        var user = Userdata(item);
        user.save();
        res.redirect('/signin');

    
    })


return signupRoutes
}
module.exports= router;
