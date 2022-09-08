const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
const rutas = require('./src/routes/rutas.js');


var puerto=3030;

app.set('view engine', 'ejs');                      //inicializa ejs
app.use(express.urlencoded({ extended: false }));   //permite capturar datos enviados por el formulario con req.body
app.use(express.json());                            //permite capturar datos enviados por el formulario en req.body


app.use('/',rutas);                                 // define ruteo


app.listen(puerto, ()=>{
    console.log('Servidor funcionando en puerto '+puerto);
});