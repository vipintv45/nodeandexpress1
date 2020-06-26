const express= require('express')
const authorRouter= express.Router();
const Authordata = require('../model/Authordata')


function router(nav){
    // author=
    // [
    //     {name:'Susan Orlean',
    //     data:'Susan Orlean is a journalist and bestselling author of The Orchid Thief and The Library Book. She has been a staff writer for The New Yorker since 1992, and has contributed articles to many magazines including Vogue, Rolling Stone, Esquire, and Outside.',
    //     img:'/images/susanorlean.jpg'
    //     },
    //     {name:'John Edward Laroche',
    //     data:'John Edward Laroche is an American horticulturist who was arrested for poaching wild ghost orchids while working for the Seminole natives in the Fakahatchee Strand State Preserve in Florida.',
    //     img:'/images/johnlaroche.jpg'
    //     },
    //     {name:'Charles Stuart Kaufman',
    //     data:'Charles Stuart Kaufman is an American screenwriter, producer, director and novelist. He wrote the films Being John Malkovich, Adaptation, and Eternal Sunshine of the Spotless Mind. He made his directorial debut with Synecdoche, New York, which film critic Roger Ebert called "the best movie of the decade" in 2009',
    //     img:'/images/charliekaufman.jpg'
    //     },
       
    // ]
authorRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(author){res.render("author",{nav,author});})
    
    
})

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;
 
    Authordata.findOne({_id:id})
    .then(function(autho)
    { 
        res.render("sinauthor",{nav,autho})
        console.log(autho.description);

    })
})
authorRouter.get('/edit/:id',function(req,res){

const id=req.params.id;
Authordata.findOne({_id:id})
.then(function(author){
    res.render('authoredit',{nav,author,title:"Authoredit"})
})

})

// authorRouter.post('/edit/:id/updated',function(req,res){
//     var id=req.body.id;
//     var name =req.body.name;
//     var description=req.body.description;
//     Authordata.update({_id:id},{$set:{name:name,description:description}},function(err,res){
//         if(err){
//             //do something
//         }
//     })
   
//     res.redirect('/author');
//     // res.send("updated")
// })
authorRouter.post('/:id/hai',function(req,res){
    
    
    
        var id=req.body.id;
    var name =req.body.name;
    var description=req.body.description;
    console.log(id);
    Authordata.update({_id:id},{$set:{name:name,description:description}},function(err,res){
        if(err){
            //do something
        }
    })
   
    res.redirect('/author');
    // res.send("updated")
    
    //res.send("xcvb")
})


// authorRouter.get('/delete/:id',function(req,res){res.send("deleted")})

authorRouter.get('/delete/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
   
    Authordata.findByIdAndRemove(req.params.id,(err,doc)=> {
        if(!err){  res.redirect('/author');}
        
        
    });
    
})


return authorRouter
}
module.exports = router