const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require("method-override");
const session = require ("express-session");
const cookieParser = require("cookie-parser");
const localsMiddle = require('./src/middleware/localsMiddle.js')
const recordameMiddle = require('./src/middleware/recordameMiddle.js')

const rutas = require('./src/routes/rutas.js');


var puerto=3030;

app.set('view engine', 'ejs');                      //inicializa ejs
app.set('views', path.join(__dirname, './src/views'))
app.use(methodOverride("_method"));                 //permite usar put y delete
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: false }));   //permite capturar datos enviados por el formulario con req.body
app.use(express.json());                            //permite capturar datos enviados por el formulario en req.body
app.use(session({secret:"Secreto"}));            // permite guardar usuario logeado
//app.use(cookieParser);                              // permite usar cookies
app.use(localsMiddle);                              // envía usuario a todas las paginas
 app.use(recordameMiddle);                           // recupera session desde cookie

app.use('/',rutas);                                 // define ruteo


app.listen(puerto, ()=>{
    console.log('Servidor funcionando http://localhost:'+puerto+'/');
});