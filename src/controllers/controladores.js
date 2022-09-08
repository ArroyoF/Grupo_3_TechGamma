const path = require('path');                                           // habilita path


let plantas = [
    {
        id: 1,
        nombre: 'Planta 1',
        precio: 'Precio 1',
        descripcion: 'Descripción 1',
        imagen: '/images/planta1.png'
    },

    {
        id: 2,
        nombre: 'Planta 2',
        precio: 'Precio 2',
        descripcion: 'Descripción 2',
        imagen: '/images/planta2.png'
    },

    {
        id: 3,
        nombre: 'Planta 3',
        precio: 'Precio 3',
        descripcion: 'Descripción 3',
        imagen: '/images/planta3.png'
    },

]


let controladores = {
    
    index: function(req,res) {
        res.render(path.join(__dirname,'../views/index.ejs'));          // devuelve la página index.ejs al llamar a controlador.index
    },
    
    login:  function(req,res) {
        res.render(path.join(__dirname,'../views/login.ejs'));          // devuelve la página login.ejs al llamar a controlador.login
    },
    
    register:  function(req,res) {
        res.render(path.join(__dirname,'../views/register.ejs'));
    },

    productCart:  function(req,res) {
        res.render(path.join(__dirname,'../views/productCart.ejs'));
    },

    productDetail:  function(req,res) {
        let plantaEncontrada = plantas.find(planta => {
            return planta.id == req.params.id
        })
        res.render(path.join(__dirname,'../views/ProductDetail.ejs'), { planta : plantaEncontrada});
    },

    crear: function(req,res) {
        let datos_crear=req.body;                                       // carga los datos del formulario en datos_crear desde req.body
        //res.send(datos_crear);                                        // muestra los datos del formulario en el navegador
        res.redirect('/');                                              // envía a la página de home luego de cargar los datos del formulario
    },

    entrar: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },
};
 
module.exports = controladores;

