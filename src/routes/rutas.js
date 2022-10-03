const express = require('express')                                  // instala express
const router = express.Router();                                    // habilita ruteo
const controladores = require('../controllers/controladores');       // importa controladores
const multer = require('multer');                                    // requiere multer en nuestro router
const path = require("path");

const storage = multer.diskStorage({                                // configuración multer para guardar archivo imagen
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, "../../public/images")); 
       
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const uploadFile = multer({ storage });

router.get('/', controladores.index);                               // usa controlador.index al entrar a home
router.get('/login', controladores.login);                          // usa controlador.login al entrar a /login
router.get('/register', controladores.register);
router.get('/productCart', controladores.productCart);
router.get('/productDetail/:id', controladores.productDetail);
router.get('/productCreate', controladores.productCreate);
router.get('/productEdit/:id', controladores.productEdit);
router.get('/productList', controladores.productList);
router.get('/usersList', controladores.usersList);
router.get('/comprar', controladores.comprar);


router.post('/login', controladores.entrar);
router.post('/register', uploadFile.single('imagen'), controladores.crearUsuario);
router.post('/productCart', controladores.finalizarCompra);
router.post('/productDetail/:id', controladores.agregarCarrito);
router.post('/productCreate', uploadFile.single('imagen'), controladores.crearProducto);
router.put('/productEdit/:id', uploadFile.single('imagen'), controladores.actualizarProducto);
router.delete('/productEdit/:id', controladores.borrarProducto);
router.delete('/productCart/:id', controladores.borrarCarrito);
router.delete('/usersList/:id', controladores.borrarUsuario);

module.exports = router;                                            // exporta ruteador

