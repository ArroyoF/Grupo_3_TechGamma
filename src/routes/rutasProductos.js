const express = require('express')                                  // instala express
const router = express.Router();                                    // habilita ruteo
const controladoresUsuarios = require('../controllers/controladoresUsuarios');       // importa controladores
const controladoresProductos = require('../controllers/controladoresProductos');       // importa controladores
const multer = require('multer');                                    // requiere multer en nuestro router
const path = require("path");
const estaLogeado = require("../middleware/estaLogeado");
const noEstaLogeado = require("../middleware/noEstaLogeado");

const storage = multer.diskStorage({                                // configuración multer para guardar archivo imagen
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, "../../public/images")); 
       
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const uploadFile = multer({ storage });

router.get('/cart', estaLogeado, controladoresProductos.productCart);
router.get('/detail/:id', controladoresProductos.productDetail);
router.get('/create', controladoresProductos.productCreate);
router.get('/edit/:id', estaLogeado, controladoresProductos.productEdit);
router.get('/list', controladoresProductos.productList);
router.get('/comprar', controladoresProductos.comprar);


router.post('/cart', controladoresProductos.finalizarCompra);
router.post('/detail/:id', controladoresProductos.agregarCarrito);
router.post('/create', uploadFile.single('imagen'), controladoresProductos.crearProducto);
router.put('/edit/:id', uploadFile.single('imagen'), controladoresProductos.actualizarProducto);
router.delete('/edit/:id', controladoresProductos.borrarProducto);
router.delete('/cart/:id', controladoresProductos.borrarCarrito);

module.exports = router;                                            // exporta ruteador

