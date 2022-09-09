const path = require('path');                                           // habilita path


let plantas = [
    {
        id: 1,
        nombre: 'Maceta Circulos Tamaño M',
        precio: '$4.990',
        descuento: '10% off',
        imagen: '/images/circulo2.jpeg'
    },

    {
        id: 2,
        nombre: 'Planta Potus 20cm',
        precio: '$1.990',
        descuento: '',
        imagen: '/images/potus.jpeg'
    },

    {
        id: 3,
        nombre: 'Planta Monstera 30cm',
        precio: '$3.250',
        descuento: '5% off',
        imagen: '/images/monstera.jpg'
    },

]


let controladores = {
    
    index: function(req,res) {
        res.render(path.join(__dirname,'../views/index.ejs'), {planta:plantas});          // devuelve la página index.ejs al llamar a controlador.index
    },
    
    login:  function(req,res) {
        res.render(path.join(__dirname,'../views/users/login.ejs'));          // devuelve la página login.ejs al llamar a controlador.login
    },
    
    register:  function(req,res) {
        res.render(path.join(__dirname,'../views/users/register.ejs'));
    },

    productCart:  function(req,res) {
        res.render(path.join(__dirname,'../views/products/productCart.ejs'));
    },

    productDetail:  function(req,res) {
        let plantaEncontrada = plantas.find(planta => {
            return planta.id == req.params.id
        })
        res.render(path.join(__dirname,'../views/products/ProductDetail.ejs'), { planta : plantaEncontrada});
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

    cart: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },

    detail: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/productCart');
    },
};
 
module.exports = controladores;

