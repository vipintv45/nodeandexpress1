const express = require('express');
const app = new express();
const nav =[
{link:'/books',name:'Books'},
{link:'/author',name:'Author'},
{link:'/signin',name:'Signin'},
{link:'/signup',name:'Signup'},
{link:'/admin',name:'Add Book'},
{link:'/addauthor',name:'Add author'}
            ]
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const signinRouter =require('./src/routes/signinRoutes')(nav)
const signupRouter =require('./src/routes/signupRoutes')(nav)
const adminRouter =require('./src/routes/adminRoutes')(nav)
const addauthorRouter =require('./src/routes/addauthorRouter')(nav)

app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',function(req,res){
    res.render("index",
    {nav});
})






app.listen(9876);


