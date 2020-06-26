const express = require('express');
const booksRouter = express.Router();
// const bookdata = require('../model/Bookdata');
const Bookdata = require('../model/Bookdata');
function router(nav){

    // books=[
    //     {
    //     title:'Digital Minimalism',
    //     summary:'Choosing a Focused Life in a Noisy World The key to living well in a high tech world is to use much less technology.',
    //     img:'/images/1st.jpg',
    //     link:'https://www.calnewport.com/books/digital-minimalism/'
    //     },
    //     {
    //         title:'Deep Work',
    //         summary:'Rules for Focused Success in a Distracted World The ability to focus without distraction is becoming increasingly valuable. Here’s how to hone this skill..',
    //         img:'/images/2nd.jpg',
    //         link:'https://www.calnewport.com/books/deep-work/'
    
    //     },
    //     {
    //         title:'So Good They Can’t Ignore You:',
    //         summary:'Follow your passion” is bad advice. Here’s what you should do instead.',
    //         img:'/images/3rd.jpg',
    //         link:'https://www.calnewport.com/books/so-good/'
    
    //     },
    //     {
    //         title:'How to Be a High School Superstar:',
    //         summary:'Learn the secrets of relaxed superstars—students who get into top colleges without hating their high school lives.',
    //         img:'/images/4rth.jpg',
    //         link:'https://www.calnewport.com/books/high-school-superstar/'
    
    //     },
    //     {
    //         title:'How to Become a Straight-A Student:',
    //         summary:'Revealed for the first time: The proven study techniques used by real straight-A students.',
    //         img:'/images/5th.jpg',
    //         link:'https://www.calnewport.com/books/how-to-win-at-college/'
    
    //     },
    //     {
    //         title:'How to Win at College',
    //         summary:'Proven strategies for making the most of your college years, based on interviews with the country’s most successful students.',
    //         img:'/images/6th.jpg',
    //         link:'https://www.calnewport.com/books/how-to-win-at-college/'
    
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{nav,books});

        })
    

         
    })
    booksRouter.get('/:id',function(req,res)
    {
       const id= req.params.id;
       Bookdata.findOne({_id:id})
       .then(function(book)
       { 
        res.render("book",{nav,book})
       })

       
    })
    booksRouter.get('/edit/:id',function(req,res)
     {   //  res.send("kollam");
       const id= req.params.id;
       Bookdata.findOne({_id:id})
       .then(function(book)
       { 
        res.render("bookedit",{nav,book})
       })

       
    })

    booksRouter.post("/update",function(req,res){
        var id=req.body.id;
        var title=req.body.title;
        var author=req.body.author;
        var genre=req.body.genre;
        Bookdata.update({_id:id},{$set:{title:title,author:author,genre:genre}},function(err,res){
            if(err){
                //do something
            }
        })
       
        res.redirect('/books');
    })


    booksRouter.get('/delete/:id',function(req,res){
        var id=req.params.id;
        console.log(id);
       
        Bookdata.findByIdAndRemove(req.params.id,(err,doc)=> {
            if(!err){  res.redirect('/books');}
            
            
        });
        
    })

    
    
return booksRouter;
}

module.exports =router;