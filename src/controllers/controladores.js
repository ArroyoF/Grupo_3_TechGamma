const fs = require("fs");
const path = require('path');                                           // habilita path

function cargarProductos(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const data = JSON.parse(jsonData);
    return data
}

function salvarProductos(data){
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString);
 }



let carritos = [
    {
        id: 1,
        nombre: 'Maceta Circulos Tamaño M',
        precio: '$4.990',
        descuento: '10% off',
        imagen: '/images/circulo2.jpeg'
    },
]


let controladores = {
    
    index: function(req,res) {
        const plantas = cargarProductos();
        res.render(path.join(__dirname,'../views/index.ejs'), {planta:plantas});          // devuelve la página index.ejs al llamar a controlador.index
    },
    
    productList: function(req,res) {
        const plantas = cargarProductos();
        res.render(path.join(__dirname,'../views/products/productList.ejs'), {planta:plantas});          // devuelve la página index.ejs al llamar a controlador.index
    },

    login:  function(req,res) {
        res.render(path.join(__dirname,'../views/users/login.ejs'));          // devuelve la página login.ejs al llamar a controlador.login
    },
    
    register:  function(req,res) {
        res.render(path.join(__dirname,'../views/users/register.ejs'));
    },

    productCart:  function(req,res) {
        res.render(path.join(__dirname,'../views/products/productCart.ejs'), {carrito:carritos});
    },

    productDetail:  function(req,res) {
        const plantas = cargarProductos();
        let plantaEncontrada = plantas.find(planta => {
            return planta.id == req.params.id
        })
        res.render(path.join(__dirname,'../views/products/ProductDetail.ejs'), { planta : plantaEncontrada});
    },

    productCreate:  function(req,res) {
        res.render(path.join(__dirname,'../views/products/productCreate.ejs'));
    },

    crearProducto: function(req,res) {
        const plantas = cargarProductos();

        const nuevaPlanta = {
            id: plantas[plantas.length-1].id + 1,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        plantas.push(nuevaPlanta);

        salvarProductos(plantas);

        res.redirect('/productList');                                              // envía a la página de home luego de cargar los datos del formulario
    },

    actualizarProducto : function(req,res) {
        const plantas = cargarProductos();
        let plantaEncontrada = plantas.find(planta => {
            return planta.id == req.params.id
        })

        plantaEncontrada.nombre=req.body.nombre;
        plantaEncontrada.precio=req.body.precio;
        plantaEncontrada.descuento=req.body.descuento;

        salvarProductos(plantas);

        res.redirect('/productList');                                              // envía a la página de home luego de cargar los datos del formulario

    },

    borrarProducto: function(req,res) {
        const plantas = cargarProductos();
        
        let indiceEncontrado = plantas.findIndex(planta => {
            return planta.id == req.params.id
        })

        plantas.splice(indiceEncontrado,1);

        salvarProductos(plantas);

        res.redirect('/productList');

    },

    entrar: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },

    finalizarCompra: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },

    agregarCarrito: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/productCart');
    },

    
    crearUsuario: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },

    productEdit: function(req,res){
        const plantas = cargarProductos();
        let plantaEncontrada = plantas.find(planta => {
            return planta.id == req.params.id
        })
        res.render(path.join(__dirname,'../views/products/productEdit.ejs'), { planta : plantaEncontrada});
    },
};
 
module.exports = controladores;

