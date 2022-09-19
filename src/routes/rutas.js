const express = require('express')                                  // instala express
const router = express.Router();                                    // habilita ruteo
const controladores = require('../controllers/controladores');       // importa controladores
const multer = require('multer');                                    // requiere multer en nuestro router


router.get('/', controladores.index);                               // usa controlador.index al entrar a home
router.get('/login', controladores.login);                          // usa controlador.login al entrar a /login
router.get('/register', controladores.register);
router.get('/productCart', controladores.productCart);
router.get('/productDetail/:id', controladores.productDetail);
router.get('/productCreate', controladores.productCreate);
router.get('/productEdit', controladores.edit);
router.get('/productList', controladores.productList);


router.post('/login', controladores.entrar);
router.post('/register', controladores.crear);
router.post('/productCart', controladores.cart);
router.post('/productDetail', controladores.detail);
router.post('/productCreate', controladores.create);

module.exports = router;                                            // exporta ruteador

