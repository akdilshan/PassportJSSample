const express=require('express');
const authRoutes= require('./routes/auth-route');
const passportSetup= require('./config/passport-setup');
const mongoose= require('mongoose');
const keys= require('./config/keys');


const app= express();

app.set('view engine','ejs');

mongoose.connect(keys.mongodb.mlabConnection, ()=>{
    console.log('connected to mongo')
});

app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
res.render('home');
});

app.listen(3000,()=>{
    console.log('app starts on port 3000');
})
