const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata')

function router(nav){
addauthorRouter.get('/',function(req,res){
    // res.send("hi")
    res.render('addauthor',{
        nav,
        title:'Add book'
    })
})


addauthorRouter.post('/add',function(req,res){
   
     var item =
    {
       
       name: req.body.name,
       description: req.body.description,
       image: req.body.image
    }
   var author =Authordata(item);
   author.save();
   res.redirect('/author');

})
return addauthorRouter;
}

 module.exports= router;