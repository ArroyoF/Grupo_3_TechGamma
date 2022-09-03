const express = require('express')
const path = require('path')
const app = express()
var puerto=3030;

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/productCart', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.get('/productDetail', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})

app.post('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
});


app.listen(puerto, ()=>{
    console.log('Servidor funcionando en puerto '+puerto);
});