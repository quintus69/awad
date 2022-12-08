const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const port = 4000;

mongoose.connect('mongodb+srv://nisemono:nisemono123@cluster0.9dbw8ss.mongodb.net/test')
.then(()=>{
    console.log("connection open")
})
.catch((err)=>{
    console.log("Error")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    score: Number,
    year: Number
})

const login = new mongoose.Schema({
    email : String,
    password : String
})







app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', function(req,res){

    
    res.render('index')
})

app.post('/', function(req,res){

    const Login = mongoose.model('Login',login);
    const nigga = new Login({email: req.body.email, password: req.body.password})
    nigga.save();
    res.render('success')
})

app.get('/about', function(){
    res.send("Posted successfully")
})

app.listen(port,function(){
    console.log("helloworld")
})